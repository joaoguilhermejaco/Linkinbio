---
name: link-in-bio
description: Build a premium, single-page link-in-bio presentation (iPhone mock + 3 design directions + palette switcher) tailored to a specific client. Use whenever the user asks to "criar/fazer/montar um link in bio", "apresentação link-in-bio", "página do Instagram" para um cliente novo, ou quer iterar/refinar um link-in-bio existente.
---

# Link-in-bio — skill do estúdio

Esta skill produz, a partir de um briefing de cliente, uma **apresentação HTML standalone** no padrão da `references/dra-bianca.md` — uma página única com hero, 3 direções de design dentro de mock-ups de iPhone, switcher de paletas, comparativo e recomendação. Tudo em um único `index.html` sem build, hospedável em qualquer lugar (GitHub Pages, Vercel, S3).

## Princípios não-negociáveis

1. **Mobile-first, iPhone como peça central.** O iPhone mock vende. Não substitua por desktop.
2. **3 direções, nem 2 nem 4.** Menos parece pouca opção; mais paralisa a cliente.
3. **Cada direção honesta:** "o que funciona / trade-offs / inspiração". Nada de só elogiar.
4. **Paleta como sistema** (CSS custom properties `--scene-*`), nunca cor fixa por componente.
5. **Tom da linguagem segue a personalidade**, não o gosto do designer. Uma personal trainer não fala como uma joalheria.
6. **Standalone HTML.** Zero dependência de build, zero framework. Fonts via Google Fonts CDN. Imagens em `assets/` relativa.
7. **Animações coreografadas** com delays escalonados (rise 0.8s @ 3.7s, @ 3.95s, @ 4.2s…). Não tudo entrando junto.
8. **Sempre incluir botão "Reproduzir"** sob cada iPhone — a cliente vai querer ver de novo.

## Pensando em Next.js já na fase 1

A direção aprovada vira um projeto Next.js depois (ver `nextjs-conversion.md` quando existir). Algumas escolhas no HTML hoje custam caro lá; siga estas regras para a conversão ser barata:

1. **Animações em CSS puro, não em JS.** Use `@keyframes` + `animation-delay`, não `setTimeout`/`requestAnimationFrame`. Sobrevive ao hidration do React sem reescrita.
2. **Replay via "remount", não DOM manipulation.** No HTML use o padrão `cloneNode + replaceChild` que já existe — em React vira `key={replayCount}` num componente, troca trivial.
3. **Sem `document.querySelector`/`addEventListener` espalhados.** Centralize listeners num único `<script>` no fim do body. No Next.js viram `useEffect` num client component.
4. **Classes BEM-friendly por cena** (`.scene-b`, `.scene-c`, `.scene-v`). Vira CSS Module ou `styled-jsx` 1-pra-1.
5. **Nada de `<img src="https://...">` externo.** Use `assets/` relativa. Vira `next/image` com `import logo from '@/assets/logo.png'`.
6. **Texto sempre como texto** (não dentro de SVG, não como background-image). Necessário para SEO e i18n no Next.js.
7. **Estrutura semântica:** `<header>`, `<section>`, `<footer>`, `<h1>` único. Next.js Metadata API depende disso.

## Passo a passo (executar nesta ordem)

### 1. Briefing
Leia `briefing.md`. Conduza a entrevista com `AskUserQuestion` em **3-4 rodadas** de perguntas agrupadas (segmento + personalidade, paleta + tom, conteúdo + links, referências). Não despeje 12 perguntas de uma vez.

Se o usuário já forneceu o brief inteiro de saída, pule para o passo 2 — mas valide os campos críticos faltantes (nome, segmento, links).

### 2. Curadoria
A partir do brief:
- **Escolha 1 paleta** de `library/palettes.md` (ou proponha uma custom se o cliente forneceu cores oficiais — neste caso encaixe-as no schema `--scene-deep/--scene-mid/--scene-light/--scene-soft/--scene-text/--scene-glow`).
- **Escolha 3 cenas** de `library/scenes.md` que combinem com a personalidade. Não pegue sempre as mesmas três. Justifique a escolha em 1 linha por cena.
- **Escolha 1 par tipográfico** de `library/typography.md`.
- **Escolha 1 voz** de `library/voice.md` para o microcopy.

Apresente essa curadoria ao usuário em ~120 palavras e peça aprovação antes de gerar HTML. Se ele aprovar, siga; se ele questionar, ajuste.

### 3. Geração
Gere `index.html` na raiz do repo (ou em `clients/<slug>/index.html` se o usuário pediu organizar por cliente). Use `references/dra-bianca.md` como guia estrutural: mesmas seções (topbar → hero → directions grid → compare → recommendation → palette switcher → footer), mesmas convenções de classe (`.iphone`, `.scene-b`, `.scene-c`, `.scene-v`, `.phone-controls`, `.palette-bar`).

Substitua:
- Nome do cliente, especialidade, data
- Os 5 links principais (com ícones SVG inline coerentes)
- Microcopy de cada cena (taglines, capítulos, manifesto)
- Variáveis CSS `--c-*` e `--scene-*` para a paleta escolhida
- Pares de fontes em `--display`, `--serif`, `--sans` + tag `<link>` do Google Fonts
- Conteúdo de `compare-table` e `recommendation` adaptados às 3 cenas escolhidas

Mantenha:
- A grade `.directions` (grid de 3 colunas → 1 coluna em mobile)
- Toda a mecânica JS (replay, toggle bg/logo, palette switcher, trio swaps)
- O switcher de paletas no rodapé com 4 opções **da mesma família** (variações claras/escuras da paleta principal)

### 4. Qualidade
Rode mentalmente `checklist.md`. Antes de declarar pronto, confirme cada item.

### 5. Entrega
Faça commit no branch atual com mensagem `link-in-bio: <nome-cliente> v1`. Não abra PR a menos que o usuário peça.

## Quando fugir do padrão

- **Cliente B2B / corporativo sério** → considere remover o switcher de paletas (parece brinquedo) e entregar uma direção única refinada em vez de 3.
- **Cliente com identidade visual já madura** (manual de marca) → paleta e tipografia vêm do manual, sem catálogo; o trabalho é só nas cenas e animações.
- **Cliente que NÃO vai apresentar a si mesmo** (ex: agência mostrando ao cliente) → a apresentação `index.html` faz sentido. **Cliente que vai usar direto no Instagram** → o entregável final é o `link.html` (uma das três cenas), não a apresentação.

## O que esta skill NÃO faz

- Não desenha logos. Pede ao usuário o arquivo (PNG/SVG transparente) em `assets/logo.png`.
- Não publica em domínio. Para deploy, sugere `vercel --prod` ou GitHub Pages — não executa.
- Não traduz para outros idiomas — por padrão tudo em PT-BR. Mude só se o brief especificar.
- Não otimiza imagens automaticamente. Avisa se a logo enviada pesa >300kb.
