# Biblioteca de cenas

Cada cena = uma "direção" de design que vai dentro de um iPhone mock. Sempre escolha **3** para apresentar à cliente. Não pegue sempre as mesmas; combine 1 cena de impacto + 1 cena clean + 1 cena de assinatura.

A implementação detalhada (CSS + HTML) está em `references/dra-bianca.md` para as cenas 01, 02 e 03 — use-as como referência canônica. Para cenas novas (04+), siga a mesma convenção: classe `.scene-X` no container, animações nomeadas, sub-elementos `.logo`, `.title`, `.divider`, `.links/.cards`, `.tagline`.

---

## 01 · CINEMATIC HERO  *(existente, ver dra-bianca.md `.scene-b`)*
**Pitch:** A logo desenha (stroke-dasharray). Nome surge. Linha dourada cresce. Links chegam como capítulos numerados (I, II, III…) em vidro fosco com shimmer.
**Personalidades:** Editorial luxo · Boutique parisiense · Noir & Gold · Royal Vinho
**Tempo total animação:** ~5s
**Variantes inclusas:** fundo escuro (default) · fundo claro · logo desenhada SVG · logo real PNG
**Trade-off:** estrutura vertical clássica, impacto se esgota na segunda visita.

## 02 · MANIFESTO TRIO  *(existente, ver dra-bianca.md `.scene-c`)*
**Pitch:** Logo. Fio dourado. Três promessas em cascata (cada uma com ícone + frase serif). Depois os links. Um manifesto antes do menu.
**Personalidades:** Editorial luxo · Minimal sereno · Atelier Oliva · Ocean Mist
**Tempo total:** ~4.5s
**Variantes inclusas:** frases serenas/originais · ícones geométrico/romano/pontual/botânico
**Trade-off:** menos "uau" cinematográfico, depende da tipografia.

## 03 · VÉU CURTAIN  *(existente, ver dra-bianca.md `.scene-v`)*
**Pitch:** Véu de seda cobre a tela. Duas cortinas se abrem pros lados em 2.4s revelando o interior. Teatral.
**Personalidades:** Editorial luxo · Boutique parisiense · Blush Boudoir · Noir & Gold
**Tempo total:** ~5.5s
**Trade-off:** maior tempo de implementação, animação 3s pode cansar.

---

## 04 · STACK CARDS (a implementar)
**Pitch:** Cards entram empilhados como um deck sendo cortado. Cada card é um link. Animação tipo "shuffle" com leve rotação. Card do topo é o CTA principal, destacado.
**Personalidades:** Tech clean · Vibrant Pop · Mono Ink
**Tempo total:** ~2.5s
**Tecnologia:** transform rotate + translateY com delay por nth-child
**Bom para:** quem tem muitos links (6-8) e quer dinamismo sem ser brega

## 05 · TYPEWRITER REVEAL
**Pitch:** Fundo monocromático limpo. O nome aparece sendo digitado letra a letra. Tagline aparece linha por linha como manuscrito. Links aparecem em lista numerada (não cards).
**Personalidades:** Mono Ink · Minimal sereno · jornalismo, escritor, fotógrafo
**Tempo total:** ~6s (longo)
**Tecnologia:** `steps()` em width + cursor piscante
**Trade-off:** lento, mas memorável para perfil intelectual

## 06 · GALLERY MOSAIC
**Pitch:** Grade 2x3 de "fotos" (placeholders ou imagens reais do cliente) que entram com fade escalonado. Toque numa foto = abre overlay com link. Tipo Instagram feed virou navegação.
**Personalidades:** Moda · Fotografia · Gastronomia · Estética visual forte
**Tempo total:** ~2s
**Requer:** 6 imagens 1:1 do cliente (assets/g1..g6.jpg)
**Bom para:** quem o trabalho visual É o produto

## 07 · MARQUEE TICKER
**Pitch:** Texto rolando no topo tipo Bloomberg/runway (nome • especialidade • frase • etc). Abaixo, layout limpo de links em lista. Pop sem ser infantil.
**Personalidades:** Vibrant Pop · Brutalist/raw · jovem, criadora de conteúdo, podcast
**Tempo total:** ~1s (loop infinito)
**Tecnologia:** `@keyframes` translateX -100% loop
**Trade-off:** pode irritar; ofereça botão de pausar.

## 08 · MORPH BLOB
**Pitch:** Blob orgânico colorido se move atrás dos links. Links em vidro semi-transparente flutuam sobre. SVG morphing entre 3-4 formas. Hipnótico e moderno.
**Personalidades:** Vibrant Pop · Tech clean · marca DTC, app, terapia holística
**Tempo total:** ~3s entrada + loop infinito
**Tecnologia:** SVG path morphing com `@keyframes` ou JS lerp
**Trade-off:** mais pesado; teste perf em iPhone antigo

## 09 · POLAROID FAN
**Pitch:** 3-4 polaroides entram da direita em leque, cada uma com um "momento" (foto + caption + link). Estilo álbum, íntimo, contado-à-mão.
**Personalidades:** Blush Boudoir · Terracota · fotógrafa de família, casamento, doula
**Tempo total:** ~3s
**Requer:** 3-4 imagens + captions curtas

## 10 · KINETIC TYPE  *(brutalist)*
**Pitch:** O nome ocupa a tela inteira em tipografia condensada gigante. Letras se reorganizam, escapam, voltam. Em baixo, lista de links nua, sem cards, só texto sublinhado.
**Personalidades:** Brutalist/raw · Mono Ink · designer, marca de moda, agência criativa
**Tempo total:** ~4s
**Trade-off:** divide opiniões — só sugira se a personalidade pediu "bold/raw/different"

---

## Combinações recomendadas por perfil

| Perfil | Trio sugerido |
|---|---|
| Estética/clínica feminina luxo | 01 Cinematic · 02 Manifesto · 03 Véu *(o padrão Bianca)* |
| Chef contemporânea | 01 Cinematic *(Noir&Gold)* · 06 Gallery · 09 Polaroid |
| Personal trainer | 04 Stack Cards · 07 Marquee · 10 Kinetic |
| Psicóloga / terapia | 02 Manifesto *(Ocean Mist)* · 05 Typewriter · 08 Morph Blob |
| Arquiteto / fotógrafo | 05 Typewriter · 06 Gallery · 10 Kinetic |
| Marca DTC / app | 04 Stack · 07 Marquee · 08 Morph Blob |
| Advogado / consultor sério | 01 Cinematic *(Noir&Gold)* · 02 Manifesto · 05 Typewriter |
| Chef rústico / artesã | 02 Manifesto *(Terracota)* · 09 Polaroid · 06 Gallery |

## Como inventar uma cena nova

1. Pensa no **gesto** central (revelar, empilhar, abrir, digitar, morfar).
2. Define **timing total** entre 2-5s (mais que isso cansa, menos que isso passa batido).
3. Aplica o gesto a 3 elementos: logo · tagline · links.
4. Garante que respeita o sistema de paletas (`--scene-*`).
5. Adiciona um "easter egg" — shimmer, light sweep, pulse — que aparece após 5s pra reter atenção.
