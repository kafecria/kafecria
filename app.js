const cur = document.getElementById('cur');
document.addEventListener('mousemove', e => { cur.style.left = e.clientX+'px'; cur.style.top = e.clientY+'px'; });

// LER MAIS toggle
let lerMaisOpen = false;
function toggleLerMais(e) {
  if (e) { e.stopImmediatePropagation(); e.preventDefault(); }
  const expanded = document.getElementById('bio-expanded');
  const label = document.getElementById('ler-mais-label');
  if (!expanded || !label) return;
  lerMaisOpen = !lerMaisOpen;
  if (lerMaisOpen) {
    // maxHeight 'none': sem risco de recorte. Na arquitetura de body scroll do
    // mobile, o navegador recalcula a altura do documento nativamente ao
    // inserir conteúdo — nenhum hack de reflow é necessário (e o hack antigo
    // recriaria um scroller interno, sabotando a arquitetura).
    expanded.style.maxHeight = 'none';
    expanded.style.opacity = '1';
  } else {
    expanded.style.maxHeight = '0';
    expanded.style.opacity = '0';
  }
  const texts = {
    lpt: lerMaisOpen ? '[ fechar ]' : '[ ler mais ]',
    len: lerMaisOpen ? '[ close ]' : '[ read more ]',
    les: lerMaisOpen ? '[ cerrar ]' : '[ leer más ]',
    lzh: lerMaisOpen ? '[ 收起 ]' : '[ 阅读更多 ]',
  };
  ['lpt','len','les','lzh'].forEach(cls => {
    const el = label.querySelector('.' + cls);
    if (el) el.textContent = texts[cls];
  });
}

// ler-mais uses direct onclick
function toggleBio() {
  if (current === 'bio') showPanel('hero');
  else {
    // Reset ler mais state when entering bio
    lerMaisOpen = false;
    const expanded = document.getElementById('bio-expanded');
    const label = document.getElementById('ler-mais-label');
    if (expanded) { expanded.style.maxHeight = '0'; expanded.style.opacity = '0'; }
    if (label) {
      const lpt = label.querySelector('.lpt'); if(lpt) lpt.textContent = '[ ler mais ]';
      const len = label.querySelector('.len'); if(len) len.textContent = '[ read more ]';
      const les = label.querySelector('.les'); if(les) les.textContent = '[ leer más ]';
      const lzh = label.querySelector('.lzh'); if(lzh) lzh.textContent = '[ 阅读更多 ]';
    }
    showPanel('bio');
  }
}

// Toggle contato: opens if not there, returns to hero if already there
function toggleContato() {
  if (current === 'contato') showPanel('hero');
  else showPanel('contato');
}

// Clicking the empty upper centre of the stage returns to hero
document.getElementById('stage').addEventListener('click', function(e) {
  // Only fire if clicking directly on a panel (not on a link/button/panel-inner)
  const content = ['filme-autoral','filme-terceiros','musica-autoral','musica-terceiros','bio','contato'];
  if (!content.includes(current)) return;
  if (e.target.closest('.panel-inner')) return;
  showPanel('hero');
});

function setLang(l, btn) {
  document.body.setAttribute('data-lang', l);
  document.querySelectorAll('.lb').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
}

let current = 'hero';
function showPanel(id) {
  document.querySelectorAll('.fn-group').forEach(g => g.classList.remove('open'));
  if (id === current) return;
  const prev = document.getElementById('panel-' + current);
  const next = document.getElementById('panel-' + id);
  if (!next) return;
  prev.classList.remove('active');
  prev.classList.add('exit');
  setTimeout(() => prev.classList.remove('exit'), 550);
  setTimeout(() => next.classList.add('active'), 60);
  // Blur bg when leaving hero, unblur when returning
  const bg = document.getElementById('bg');
  if (id === 'hero') bg.classList.remove('dimmed');
  else bg.classList.add('dimmed');
  current = id;
  // Mobile (body scroll): nova "página" começa do topo
  if (window.innerWidth <= 768) window.scrollTo(0, 0);
  // Reentrada em MÚSICA>TERCEIROS no desktop: re-afirma o estado da subview
  // (música/covers). Idempotente; elimina meio-estados deixados por navegação.
  if (id === 'musica-terceiros' && window.innerWidth > 768 && typeof showMusicView === 'function') {
    showMusicView(currentMusicSubview);
  }
}

function toggleSub(id) {
  const el = document.getElementById(id);
  const was = el.classList.contains('open');
  document.querySelectorAll('.fn-group').forEach(g => g.classList.remove('open'));
  if (!was) el.classList.add('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.fn-group')) document.querySelectorAll('.fn-group').forEach(g => g.classList.remove('open'));
});

const BG_C = ['#2a1f18','#3d1a10','#1a1a2a','#241410','#2a2010','#1a1010'];
const th = document.getElementById('fthumb');

function mkFilm(f, i) {
  const d = document.createElement('div'); d.className = 'fi';
  d.innerHTML = `<div class="fi-n">${String(i+1).padStart(2,'0')}</div>
    <div class="fi-info"><div class="fi-title">${f.t}</div>
    <div class="fi-meta"><span class="lpt">${f.m.pt}</span><span class="len">${f.m.en}</span><span class="les">${f.m.es}</span><span class="lzh">${f.m.zh}</span></div></div>
    <div class="fi-r"><div class="fi-year">${f.y}</div><div class="fi-tag">${f.tag}</div></div>`;
  d.addEventListener('mouseenter', () => { th.style.background=BG_C[i%BG_C.length]; th.src=''; th.classList.add('vis'); });
  d.addEventListener('mouseleave', () => th.classList.remove('vis'));
  d.addEventListener('mousemove', e => { th.style.left=(e.clientX+20)+'px'; th.style.top=(e.clientY-90)+'px'; });
  return d;
}

[['fl-aut',autFilms,mkFilm]].forEach(([id,data,fn]) => {
  const el = document.getElementById(id);
  if (el) data.forEach((f,i) => el.appendChild(fn(f,i)));
});

// ── FILMES TERCEIROS — VFX grid ──

function buildFilmGrid(gridId, data) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'fg-card';

    // Thumb wrap
    const thumbWrap = document.createElement('div');
    thumbWrap.className = 'fg-thumb-wrap';

    if (item.thumb || item.type === 'yt') {
      const thumb = document.createElement('img');
      thumb.className = 'fg-thumb';
      thumb.loading = 'lazy';
      thumb.src = item.thumb || `https://img.youtube.com/vi/${item.id}/mqdefault.jpg`;
      thumbWrap.appendChild(thumb);
    } else {
      const ph = document.createElement('div');
      ph.className = 'fg-placeholder';
      ph.innerHTML = `<span>${item.t}</span>`;
      thumbWrap.appendChild(ph);
    }

    // Play hint
    const hint = document.createElement('div');
    hint.className = 'fg-play-hint';
    thumbWrap.appendChild(hint);

    // Iframe wrap
    const iframeWrap = document.createElement('div');
    iframeWrap.className = 'fg-iframe-wrap';
    thumbWrap.appendChild(iframeWrap);

    // Close btn
    const closeBtn = document.createElement('button');
    closeBtn.className = 'fg-close';
    closeBtn.innerHTML = '✕';
    closeBtn.addEventListener('click', e => {
      e.stopPropagation();
      card.classList.remove('playing');
      iframeWrap.innerHTML = '';
    });
    thumbWrap.appendChild(closeBtn);

    // Title below
    const titleBelow = document.createElement('div');
    titleBelow.className = 'fg-title-below';
    titleBelow.textContent = item.t;

    // Click to open fullscreen player
    thumbWrap.addEventListener('click', () => {
      openPlayer(item);
    });

    card.appendChild(thumbWrap);
    card.appendChild(titleBelow);
    grid.appendChild(card);
  });
}

buildFilmGrid('fl-srv', srvFilmsData);

function openPlayer(item) {
  if (current !== 'filme-terceiros') return; // guard: only fires on film page
  const player = document.getElementById('fs-player');
  const content = document.getElementById('fs-content');
  const titleEl = document.getElementById('fs-title');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const headerH = header ? Math.max(header.getBoundingClientRect().height, 55) : 68;
  const footerH = footer ? Math.max(footer.getBoundingClientRect().height, 55) : 72;
  player.style.top = headerH + 'px';
  player.style.bottom = footerH + 'px';
  titleEl.textContent = item.t;
  if (item.type === 'yt') {
    content.innerHTML = `
      <div style="flex:1;position:relative;display:flex">
        <iframe id="yt-frame" src="https://www.youtube.com/embed/${item.id}?autoplay=1&enablejsapi=1"
          allow="autoplay; fullscreen" allowfullscreen
          style="flex:1;width:100%;border:none"></iframe>
      </div>`;
  } else {
    content.innerHTML = `<video src="${item.src}" autoplay controls controlsList="nodownload"
      style="flex:1;width:100%;object-fit:contain;background:#000;display:block"></video>`;
  }
  player.classList.add('open');
}

function closePlayer() {
  const player = document.getElementById('fs-player');
  const content = document.getElementById('fs-content');
  // Kill iframe src first to release cross-origin focus lock
  const iframe = content.querySelector('iframe');
  if (iframe) iframe.src = 'about:blank';
  player.classList.remove('open');
  // Use intermediate focusable element to wrest focus from iframe context
  const trap = document.createElement('button');
  trap.setAttribute('tabindex', '0');
  trap.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none';
  document.body.appendChild(trap);
  trap.focus();
  requestAnimationFrame(() => {
    content.innerHTML = '';
    document.body.removeChild(trap);
  });
}

// ESC key closes player
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePlayer(); });

// ── COVER ART + FILMS TAB — isolated capture listeners ──
// COVER ART tabs - attach once after DOM ready, use mousedown for reliability
(function() {
  function bindTabs() {
    const ct = document.getElementById('ft-covers-tab');
    const ft = document.getElementById('ft-films-tab');
    if (ct) {
      ct.addEventListener('mousedown', function(e) {
        e.stopImmediatePropagation(); e.preventDefault();
        showFilmView('covers');
      }, true);
      ct.addEventListener('click', function(e) {
        e.stopImmediatePropagation(); e.preventDefault();
      }, true);
    }
    if (ft) {
      ft.addEventListener('mousedown', function(e) {
        e.stopImmediatePropagation(); e.preventDefault();
        showFilmView('films');
      }, true);
      ft.addEventListener('click', function(e) {
        e.stopImmediatePropagation(); e.preventDefault();
      }, true);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindTabs);
  else bindTabs();
})();
function showFilmView(view) {
  const filmsView = document.getElementById('ft-films-view');
  const coversView = document.getElementById('ft-covers-view');
  const filmsTab = document.getElementById('ft-films-tab');
  const coversTab = document.getElementById('ft-covers-tab');
  if (!filmsView || !coversView) return;
  if (view === 'covers') {
    filmsView.classList.remove('sv-visible');
    filmsView.classList.remove('sv-hidden-left');
    filmsView.classList.add('sv-hidden-left');
    coversView.classList.remove('sv-hidden-right');
    coversView.classList.remove('sv-visible');
    coversView.classList.add('sv-visible');
    filmsTab.classList.remove('active');
    filmsTab.classList.add('inactive');
    coversTab.style.color = 'rgba(237,230,219,.75)';
  } else {
    coversView.classList.remove('sv-visible');
    coversView.classList.remove('sv-hidden-right');
    coversView.classList.add('sv-hidden-right');
    filmsView.classList.remove('sv-hidden-left');
    filmsView.classList.remove('sv-visible');
    filmsView.classList.add('sv-visible');
    filmsTab.classList.remove('inactive');
    filmsTab.classList.add('active');
    coversTab.style.color = '';
  }
}

// Cover art images — add URLs when available
const coverArts = [];
(function buildCoverGrid() {
  const grid = document.getElementById('cover-grid');
  if (!grid) return;
  if (!coverArts.length) {
    grid.innerHTML = '<div style="color:rgba(237,230,219,.2);font-size:.6rem;letter-spacing:.28em;text-transform:uppercase;padding:2rem 0;grid-column:span 4">em breve</div>';
    return;
  }
  coverArts.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cover-item';
    div.innerHTML = `<img src="${item.src}" alt="${item.title}" loading="lazy">`;
    grid.appendChild(div);
  });
})();

// Smooth hover — only one card active at a time (desktop pointer only)
(function() {
  const grid = document.getElementById('fl-srv');
  if (!grid) return;
  // On touch devices mouseover fires on tap and stays latched, trapping the
  // panel's vertical scroll. Bind hover behaviour only where a fine pointer
  // (mouse) is the primary input.
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!hasFinePointer) return;
  let hoverTimer = null;
  let currentActive = null;

  function clearAll() {
    grid.querySelectorAll('.fg-card').forEach(c => c.classList.remove('fg-active','fg-shrink'));
    currentActive = null;
  }

  function activate(card) {
    if (currentActive === card) return;
    clearAll();
    currentActive = card;
    const cards = Array.from(grid.querySelectorAll('.fg-card'));
    const idx = cards.indexOf(card);
    const col = idx % 5;
    const wrap = card.querySelector('.fg-thumb-wrap');
    if (wrap) wrap.style.transformOrigin = col >= 3 ? 'right top' : 'left top';
    cards.forEach(c => c === card ? c.classList.add('fg-active') : c.classList.add('fg-shrink'));
  }

  grid.addEventListener('mouseover', e => {
    const card = e.target.closest('.fg-card');
    if (!card || card.classList.contains('playing')) return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => activate(card), 130);
  });

  grid.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimer);
    clearAll();
  });
})();

// ── MÚSICA: DIRECT SPOTIFY EMBEDS ──

function buildDirectList(listId, data) {
  const el = document.getElementById(listId);
  if (!el) return;
  data.forEach(item => {
    const wrap = document.createElement('div');
    wrap.className = 'sp-direct-item';
    if (item.role) {
      const role = document.createElement('div');
      role.className = 'sp-role';
      role.textContent = item.role;
      wrap.appendChild(role);
    }
    const iframe = document.createElement('iframe');
    iframe.src = item.src;
    // YouTube entries get 16:9 aspect, Spotify gets compact 152px
    const isYT = item.src.includes('youtube.com');
    iframe.height = isYT ? 'auto' : '152';
    if (isYT) {
      iframe.style.cssText = 'width:100%;aspect-ratio:16/9;border-radius:6px;display:block';
    } else {
      iframe.style.borderRadius = '6px';
    }
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    iframe.loading = 'lazy';
    wrap.addEventListener('click', function(e) { e.stopPropagation(); });
    wrap.appendChild(iframe);
    el.appendChild(wrap);
  });
}

// Estado da subview de MÚSICA>TERCEIROS (música | covers) — usado para
// re-afirmar o estado ao reentrar no painel e para o controlador de wheel.
var currentMusicSubview = 'music';

function showMusicView(view) {
  currentMusicSubview = view === 'covers' ? 'covers' : 'music';
  const musicView = document.getElementById('ms-music-view');
  const coversView = document.getElementById('ms-covers-view');
  const musicTab = document.getElementById('ms-music-tab');
  const coversTab = document.getElementById('ms-covers-tab');
  if (!musicView || !coversView) return;

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // On mobile: toggle display so only one view takes layout space
    if (view === 'covers') {
      musicView.style.display = 'none';
      coversView.style.removeProperty('display'); // let CSS rule go; override with block
      coversView.style.display = 'block';
      coversView.style.opacity = '1';
      coversView.style.transform = 'none';
      coversView.style.pointerEvents = 'auto';
      if (musicTab) { musicTab.classList.remove('active'); musicTab.classList.add('inactive'); }
      if (coversTab) coversTab.style.color = 'rgba(237,230,219,.75)';
    } else {
      coversView.style.display = 'none';
      musicView.style.display = '';
      musicView.style.opacity = '1';
      musicView.style.transform = 'none';
      musicView.style.pointerEvents = 'auto';
      if (musicTab) { musicTab.classList.remove('inactive'); musicTab.classList.add('active'); }
      if (coversTab) coversTab.style.color = '';
    }
    return;
  }

  // Desktop: opacity/transform transitions.
  // visibility is toggled alongside opacity because the global rule
  // `.panel.active * { pointer-events:auto }` re-enables pointer-events on the
  // hidden view's children (e.g. #ms-cover-list), so opacity:0 alone leaves an
  // invisible layer stacked over #ms-music-view that swallows the wheel on
  // return. visibility:hidden removes it from hit-testing entirely.
  if (view === 'covers') {
    musicView.style.opacity='0'; musicView.style.transform='translateX(-60px)'; musicView.style.pointerEvents='none'; musicView.style.visibility='hidden';
    coversView.style.opacity='1'; coversView.style.transform='translateX(0)'; coversView.style.pointerEvents='auto'; coversView.style.visibility='visible';
    if (musicTab) { musicTab.classList.remove('active'); musicTab.classList.add('inactive'); }
    if (coversTab) coversTab.style.color='rgba(237,230,219,.75)';
  } else {
    coversView.style.opacity='0'; coversView.style.transform='translateX(60px)'; coversView.style.pointerEvents='none'; coversView.style.visibility='hidden';
    musicView.style.opacity='1'; musicView.style.transform='translateX(0)'; musicView.style.pointerEvents='auto'; musicView.style.visibility='visible';
    if (musicTab) { musicTab.classList.remove('inactive'); musicTab.classList.add('active'); }
    if (coversTab) coversTab.style.color='';
  }
}

// Music cover art tab listener
(function() {
  function bindMusicTabs() {
    const ct = document.getElementById('ms-covers-tab');
    const mt = document.getElementById('ms-music-tab');
    if (ct) ct.addEventListener('mousedown', function(e){ e.stopImmediatePropagation(); e.preventDefault(); showMusicView('covers'); }, true);
    if (mt) mt.addEventListener('mousedown', function(e){ e.stopImmediatePropagation(); e.preventDefault(); showMusicView('music'); }, true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindMusicTabs);
  else bindMusicTabs();
})();

(function buildMusicCovers() {
  const list = document.getElementById('ms-cover-list');
  if (!list) return;
  musicCoverArts.forEach(item => {
    const wrap = document.createElement('div');
    wrap.className = 'cover-list-item';
    // item.srcs (array) permite capa + contracapa no mesmo item,
    // com a legenda uma única vez, depois da última imagem.
    const srcs = item.srcs || [item.src];
    wrap.innerHTML = srcs.map(function(s){
      return '<img src="' + s + '" alt="' + item.name + '">';
    }).join('') + '<div class="cover-list-item-name">' + item.name + '</div>';
    wrap.addEventListener('click', e => e.stopPropagation());
    list.appendChild(wrap);
  });
})();

buildDirectList('ml-aut', autMusicData);
buildDirectList('ml-srv', srvMusicData);
// ── IFRAME SCROLL SHIELD ──
// Shields intercept wheel events on iframes (always on, so scroll is never broken).
// On mousedown, temporarily set pointer-events:none for 300ms so the underlying
// iframe receives the click sequence (mousedown already fired on shield, but the
// browser's native hit-testing routes the subsequent mouseup+click to the iframe
// while pointer-events:none is active at the compositor level for cross-origin iframes).
(function addScrollShields() {
  const view = document.getElementById('ms-music-view');
  if (!view) return;
  view.querySelectorAll('iframe').forEach(function(iframe) {
    const parent = iframe.parentNode;
    if (window.getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }
    const shield = document.createElement('div');
    shield.className = 'iframe-shield';
    shield.style.cssText = 'position:absolute;inset:0;z-index:4;background:transparent;';
    // The shield blocks the cross-origin iframe from swallowing the wheel event,
    // but does NOT hijack scroll. With pointer-events on the shield, the wheel
    // event bubbles to #ms-music-view and the browser scrolls it natively — no
    // JS in the hot path, so no stutter. preventDefault/scrollTop manipulation
    // removed: that was forcing a non-passive reflow on every wheel tick.
    // On mousedown: briefly go transparent so the iframe receives the click
    shield.addEventListener('mousedown', function() {
      shield.style.pointerEvents = 'none';
      setTimeout(function() { shield.style.pointerEvents = ''; }, 300);
    });
    parent.appendChild(shield);
  });
})();

// ── CONTROLADOR DE WHEEL (desktop) ──
// Garante scroll em MÚSICA>TERCEIROS independentemente de qual camada o
// navegador acerta no hit-test (iframes cross-origin, shields, views ocultas,
// estado pós-[cover art]). Listener único em fase de CAPTURA no painel:
// intercepta o wheel antes de qualquer filho e rola a subview ativa.
// Deltas acumulados e aplicados 1x por frame (rAF) — sem o jank do modelo
// antigo de escrever scrollTop a cada tick.
(function musicWheelController() {
  const panel = document.getElementById('panel-musica-terceiros');
  const musicView = document.getElementById('ms-music-view');
  const coversView = document.getElementById('ms-covers-view');
  if (!panel || !musicView) return;
  let acc = 0, raf = 0;
  function flush() {
    raf = 0;
    const target = (currentMusicSubview === 'covers' && coversView) ? coversView : musicView;
    target.scrollTop += acc;
    acc = 0;
  }
  panel.addEventListener('wheel', function(e) {
    if (window.innerWidth <= 768) return; // mobile usa o scroller do panel-inner
    let d = e.deltaY;
    if (e.deltaMode === 1) d *= 40;
    else if (e.deltaMode === 2) d *= musicView.clientHeight;
    acc += d;
    if (!raf) raf = requestAnimationFrame(flush);
    e.preventDefault();
    e.stopPropagation();
  }, { passive: false, capture: true });
})();

// Mobile: mede o header e seta top exato em todos os panels para que
// nenhum conteúdo apareça por trás do logo/idiomas/instagram.
// O CSS tem 6.5rem como fallback; aqui sobrescrevemos com o valor real medido.
// Mobile (body scroll): mede header e footer fixos e aplica como padding do
// #stage, para o conteúdo nunca ficar por trás deles. Fallbacks no CSS.
function applyMobileStagePadding() {
  if (window.innerWidth > 768) return;
  var stage = document.getElementById('stage');
  if (!stage) return;
  var hdr = document.querySelector('header');
  var ftr = document.querySelector('footer');
  if (hdr) stage.style.setProperty('padding-top', (Math.ceil(hdr.getBoundingClientRect().height) + 10) + 'px', 'important');
  if (ftr) stage.style.setProperty('padding-bottom', (Math.ceil(ftr.getBoundingClientRect().height) + 14) + 'px', 'important');
}
applyMobileStagePadding();

// Re-aplica depois das fontes (podem alterar a altura do header/footer)
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(applyMobileStagePadding);
}
