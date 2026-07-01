/* ============================================================
   KAFECRIA.COM — CONTEÚDO
   Este arquivo contém apenas os DADOS do site.
   Para adicionar filme/música nova: copie um item existente
   do array correspondente, cole no início ou fim do array,
   e edite os campos. Imagens novas: salve em assets/films/
   ou assets/music/ e aponte o caminho aqui.
   Arrays:
   - autFilms       -> filmes autorais (painel Films)
   - srvFilmsData   -> filmes comerciais/serviço
   - autMusicData   -> música autoral (embeds Spotify)
   - srvMusicData   -> música serviço (créditos)
   - musicCoverArts -> capas exibidas na grade de música
   ============================================================ */

const autFilms = [
  {t:'LiBRE!',y:'2026',m:{pt:'sci-fi · curta-metragem',en:'sci-fi · short film',es:'sci-fi · cortometraje',zh:'科幻 · 短片'},tag:'autoral'},
  {t:'Projeto 02',y:'2024',m:{pt:'documentário',en:'documentary',es:'documental',zh:'纪录片'},tag:'autoral'},
];

const srvFilmsData = [
  {t:'ÀTTØØXXÁ — Os Cara Da Nasa / Tranca Rua / Blvck Bvng', type:'yt', id:'aI_f3549NgM', thumb:'assets/films/attooxxa-os-cara-da-nasa-tranca-rua-blvck-bvng.jpg'},
  {t:'EBONY — Extraordinária', type:'yt', id:'7IoSkJ-gnzM'},
  {t:'Ubuntu — Ministério Público & Jesse Royal', type:'yt', id:'OR3o8zn5gQw'},
  {t:'VJ Content — Xanddy & Anitta · Tic Nervoso', type:'db', src:'https://www.dropbox.com/scl/fi/4eiei4v7tmkize9rsygue/LED_XANDDY_TICNERVOSO_ANITTA_15_FPS.mp4?rlkey=my8lc203a3sc3hkmctujrriab&raw=1', thumb:'assets/films/vj-content-xanddy-anitta-tic-nervoso.jpg'},
  {t:'VJ Content — Xanddy & Ludmilla · Sacanagemzinha', type:'db', src:'https://www.dropbox.com/scl/fi/nn506iz7c935wuwgsa1g6/LED_XANDDY_SACANAGEMZINHA_LUDMILLA_15FPS.mp4?rlkey=jzk3rxqxgxo32nb0zseocm488&raw=1', thumb:'assets/films/vj-content-xanddy-ludmilla-sacanagemzinha.jpg'},
  {t:'ÀTTØØXXÁ — Mamacita feat. Preta Chave', type:'yt', id:'xikbwkqOXf4'},
  {t:'ÀTTØØXXÁ — Temperatura feat. Supremo', type:'yt', id:'sODp9hj5y8M'},
  {t:'ÀTTØØXXÁ — Terra Sagrada', type:'yt', id:'q0VEjT3-OAI'},
  {t:'ÀTTØØXXÁ & VANDAL — Vem Ni Mim', type:'yt', id:'jwervPVU8OA'},
  {t:'ÀTTØØXXÁ — Lambada feat. Cinara', type:'yt', id:'g9KoxBBT0gQ'},
  {t:'ÀTTØØXXÁ — Yoga', type:'yt', id:'bTIZWypJHJg'},
  {t:'ÀTTØØXXÁ — Tá Pra Onda', type:'yt', id:'ZEFu6kNMoM0'},
  {t:'ÀTTØØXXÁ — Tiradinha (Só Botada)', type:'yt', id:'PyieM4eMmCc'},
  {t:'ÀTTØØXXÁ — Protetor Solar', type:'yt', id:'A7VMqLiCGo0'},
  {t:'ÀTTØØXXÁ — Meus Cachorro feat. Yan Cloud', type:'yt', id:'AXNOzgqWywA'},
  {t:'ÀTTØØXXÁ — Chora Viola 2 feat. Mano Jonh', type:'yt', id:'7ecfm3QpfZ4'},
  {t:'ENME — Coração Rebelde', type:'yt', id:'4GjKhLWFAyI'},
  {t:'ACHE — OSTEO', type:'db', src:'https://www.dropbox.com/scl/fi/zovbimzg33d5jh6kphoe4/CORTE-OSTEO_4.mp4?rlkey=lm7t9mdc6o2wcgypml82ry2wp&raw=1', thumb:'assets/films/ache-osteo.jpg'},
  {t:'ACHE — DERMA', type:'db', src:'https://www.dropbox.com/scl/fi/4c5b9b7nv02ib5o08bmo7/CORTE-DERMA-04_.mp4?rlkey=qrb7w7j7bq5urwe01ozitz35l&raw=1', thumb:'assets/films/ache-derma.jpg'},
  {t:'Funktronauts — Make My Day (Remix)', type:'db', src:'https://www.dropbox.com/scl/fi/bt2hsjbx7ryvk3tl4967p/Funktronauts-Paradise.mp4?rlkey=udfe6hgsqyni5r724zl2baexd&raw=1', thumb:'assets/films/funktronauts-make-my-day-remix.jpg'},
  {t:'Banco do Brasil — Natal Sem Luz', type:'db', src:'https://www.dropbox.com/scl/fi/fvykaf5vv1qggcu40nlsv/Banco-Do-Brasil-Natal-Sem-Luz-2024.mp4?rlkey=kp0w9m0kkww7qc3dd8aioqdjg&raw=1', thumb:'assets/films/banco-do-brasil-natal-sem-luz.jpg'},
];

const autMusicData = [
  {src:'https://open.spotify.com/embed/album/295G8XvTS3wV4qpysbaa4L?utm_source=generator'},
  {src:'https://open.spotify.com/embed/track/1jWMt9wUBEUGPyClRMVsg0?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/5v7wWNF6RbfqHCFa9GfIgp?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/6aJjritu7npuJZWc62Zg1T?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/75K9rbHzofmAmdqMNCCdop?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/3fKX4MbFnIhBkA6vThkxUh?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/1ZyJmKYSBG52yFLX8QSSUO?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/0LUhkgThQIbz7ud7Bv5y6b?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/7y6EgZD5NBDF1QSz8hm9m9?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/1Se7gU4ci1rN7tddfl8Ynq?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/2sBj9IcVkONWhpCAdCYxG2?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/4uexfxiXP7F6JxPnnSMJr2?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/6iLD5AWAZ0qKJcvd0V5E1U?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/7B7AG4seUmB6lavRYOCLT2?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/0gEmbs7Enyqe9Fi8E8ZXhE?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/6VvFUo6N6Yt5Ou3ZoIGcSm?utm_source=generator'},
  {src:'https://open.spotify.com/embed/track/50Nq50LXTkMqkSIPsQLZ9t?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/4m5c8hOvREP4UDlkm6XCB5?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/3U6ZQWaAvz3uuY6yS99SJO?utm_source=generator&theme=0'},
  {src:'https://open.spotify.com/embed/track/2oK30HTnDbwPcdGZf6yL2I?utm_source=generator'},
  {src:'https://open.spotify.com/embed/track/2wir8Za8qcTJ5OTByKfqdq?utm_source=generator'},
  {src:'https://open.spotify.com/embed/track/7IkugpK4Me685GpgPw8ki0?utm_source=generator'},

];

const srvMusicData = [
  {role:'mixagem', src:'https://open.spotify.com/embed/track/2xup1frEhNaxTEiH9JX2m9?utm_source=generator&theme=0'},
  {role:'mixagem', src:'https://open.spotify.com/embed/track/2QnIXNhjJCwbE8jP3QgK3H?utm_source=generator&theme=0'},
  {role:'co-produção · mixagem · masterização', src:'https://open.spotify.com/embed/track/5yfkS5GXG6JmPeSMElT7gN?utm_source=generator&theme=0'},
  {role:'co-composição · produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/track/2UQI7CWzx2eINYwVGXJ0fY?utm_source=generator&theme=0'},
  {role:'', src:'https://open.spotify.com/embed/album/5Tq8rOwuysoJCvuAgTHLmg?utm_source=generator'},
  {role:'co-composição · co-produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/track/7z9WyytxQY7nRLuQNeFeE8?utm_source=generator&theme=0'},
  {role:'co-composição', src:'https://open.spotify.com/embed/track/6naNITZv5jzbEw6MkBOG0H?utm_source=generator'},
  {role:'co direção criativa · produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/album/3OoewDG9iofdwBoPovsURq?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/6j9YiLIN5TqwUuBwoyglMW?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/0fUKtplwyARI75LjMI0xaF?utm_source=generator&theme=0'},
  {role:'co-produção · mixagem · masterização', src:'https://open.spotify.com/embed/track/3z8aghokqoqjtLXsUS0H4H?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/1AvVHmQOHABihWXUuEmuPh?utm_source=generator'},
  {role:'', src:'https://open.spotify.com/embed/album/1NizetDtNp04k6BEAFnRlG?utm_source=generator'},
  {role:'', src:'https://open.spotify.com/embed/album/1GQAqw5wPkdw9LL1xPCSSX?utm_source=generator&theme=0'},

  {role:'produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/track/5LNZ6LCCBMjJLY0lDXFX6L?utm_source=generator&theme=0'},
  {role:'produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/track/2SG3Etrq3D18deY1QCRFaB?utm_source=generator&theme=0'},
  {role:'produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/track/3Cip8Fq9C3HLtKIcmTPhQi?utm_source=generator&theme=0'},
  {role:'produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/track/6Gsm8NQi3Ri2Xb1NXpP6WC?utm_source=generator&theme=0'},
  {role:'produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/track/4m5c8hOvREP4UDlkm6XCB5?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/1hmK9WmVMEtxugiC1DyGAn?utm_source=generator'},
  {role:'', src:'https://open.spotify.com/embed/album/1F1rvS1dK9SoMq4PrNEnWx?utm_source=generator'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/0ooCBkSlyG6gl3ym5s2PVA?utm_source=generator'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/album/61oUpSp7XODAKgdU34V0oj?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/7sgwvP1InkBhTwBmi3CP4a?utm_source=generator'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/3jsW6loDgSFFr9nMhbqU40?utm_source=generator&theme=0'},
  {role:'co-composição · co-produção · mixagem · masterização', src:'https://open.spotify.com/embed/track/2sBj9IcVkONWhpCAdCYxG2?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/1yXkJ9H4WJ688CpSUSkxVq?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/3DPX3InXSDNQAjDyxpxDau?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/1XhpldZIC7CirKKOOkrieU?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/5DcfeiAfLoJzROh2sqQkwV?utm_source=generator'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/album/3mFzjH7gyXWB8ZynEUQMwY?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/album/3mFzjH7gyXWB8ZynEUQMwY?utm_source=generator&theme=0'},
  {role:'co-composição · mixagem · masterização', src:'https://open.spotify.com/embed/track/0mdlrJL3gSIl7z8PA6rBET?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/0aKGUdUtiSC7V9d3f2Uxqs?utm_source=generator'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/album/0KQJroOM3kyI723WUHma02?utm_source=generator'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/0TB87T3diQPV8X15CDJY5I?utm_source=generator&theme=0'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/2hbjj46SKT55H7TwBBsCaj?utm_source=generator'},
  {role:'mixagem · masterização', src:'https://open.spotify.com/embed/track/7cXYddvCaBB2NdwccM0Ngq?utm_source=generator'},
  {role:'', src:'https://open.spotify.com/embed/album/7wCeiaTJTFuArJXLBX1JJG?utm_source=generator'},
  {role:'composição · co-produção musical · mixagem', src:'https://open.spotify.com/embed/album/2WfXCiDjPa3zrVms8AnfVK?utm_source=generator'},
  {role:'produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/track/4gDwVncFEXsTV6zZyse1wY?utm_source=generator'},
  {role:'co-produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/track/0hMyI7w5pBWP2KlghaGB24?utm_source=generator'},
  {role:'co-produção musical · mixagem · masterização', src:'https://open.spotify.com/embed/track/2DWOLvywcchDIeTWwkZwo0?utm_source=generator'},
  {role:'co-composição · co-produção · co-mixagem', src:'https://open.spotify.com/embed/album/6uxVmhyToTMRfY2hO6sF8i?utm_source=generator'},
  {role:'composição · co-produção · co-mixagem · co-masterização', src:'https://open.spotify.com/embed/album/6uxVmhyToTMRfY2hO6sF8i?utm_source=generator'},
  {role:'', src:'https://open.spotify.com/embed/track/1xSEt8ZT3lHXvxF7SnlDZJ?utm_source=generator'},
  {role:'composição · produção musical · mixagem', src:'https://open.spotify.com/embed/track/7B7AG4seUmB6lavRYOCLT2?utm_source=generator&theme=0'},
  {role:'composição · produção musical · mixagem', src:'https://open.spotify.com/embed/track/0gEmbs7Enyqe9Fi8E8ZXhE?utm_source=generator&theme=0'},
  {role:'co-produção · mixagem · masterização', src:'https://open.spotify.com/embed/track/3U6ZQWaAvz3uuY6yS99SJO?utm_source=generator&theme=0'},
  {role:'co-composição · co-produção musical · mixagem', src:'https://open.spotify.com/embed/track/4ywzFmbZziX3OUm3Mg3Phw?utm_source=generator'},
  {role:'co-composição · co-produção musical · mixagem', src:'https://open.spotify.com/embed/track/7dbJcdLICW3vsXbCX2hk0A?utm_source=generator'},

  {role:'sound design · mixagem', src:'https://www.youtube.com/embed/JQf7af7m74k'},
  {role:'produção musical · mixagem · masterização', src:'https://www.youtube.com/embed/2G8lddmVy_o'},
];

const musicCoverArts = [
  {name:'Larissa Luz — DESMONTE', srcs:['assets/music/larissa-luz-desmonte-capa.jpg','assets/music/larissa-luz-desmonte-contracapa.jpg']},
  {name:'Yan Cloud, Fawaz, Avicena — ZAZA', src:'assets/music/yan-cloud-fawaz-avicena-zaza.jpg'},
  {name:'ÀTTØØXXÁ — Tá Pra Onda', src:'assets/music/attooxxa-ta-pra-onda.jpg'},
  {name:'Cinara — Mexe Mexe Mainha', src:'assets/music/cinara-mexe-mexe-mainha.jpg'},
  {name:'Cinara — Paquerei', src:'assets/music/cinara-paquerei.jpg'},
  {name:'Enme — Coração Rebelde', src:'assets/music/enme-coracao-rebelde.jpg'},
  {name:'Nara Couto — Herança Sagrada', src:'assets/music/nara-couto-heranca-sagrada.jpg'},
  {name:'ZAI — Balancinho', src:'assets/music/zai-balancinho.jpg'},
  {name:'Kafé, Panda — Hipnotizar', src:'assets/music/kafe-panda-hipnotizar.jpg'},
  {name:'Kafé, Paiva Prod — DENGO', src:'assets/music/kafe-paiva-prod-dengo.jpg'},
  {name:'R4 — Na Sua Mente', src:'assets/music/r4-na-sua-mente.jpg'},
  {name:'Fabio Brazza — A Roda, a Rima, o Riso e a Reza', src:'assets/music/fabio-brazza-a-roda-a-rima-o-riso-e-a-reza.jpg'},
];
