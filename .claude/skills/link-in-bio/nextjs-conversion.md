# Fase 2 — Conversão para Next.js

> **Status: VALIDADO.** Preenchido em 25/mai/2026 com base na conversão real da Lívia Holanda. Próxima cliente deve seguir esse playbook e atualizar este arquivo com armadilhas novas.

## Quando usar

A cliente aprovou **uma das 3 direções** da apresentação HTML (fase 1, em `atelie/<slug>/index.html`). Agora vira projeto Next.js de produção em `clients/<slug>/`. Próxima fase depois é deploy (ver `deploy-vercel.md`).

## Pré-requisitos

- Mockup HTML aprovado em `atelie/<slug>/index.html`
- Brand kit do cliente em `clients/<slug>/assets-brand-kit/brand-kit/` (lockup PNG/SVG, paleta, manual de fontes)
- Copy oficial validado pela cliente (não inventar frases poéticas — destilar do texto institucional dela)

## Setup do projeto Next

Estrutura mínima:
```
clients/<slug>/
├── app/
│   ├── layout.tsx        # html lang, fontes, metadata, viewport, themeColor
│   ├── page.tsx          # server component thin, renderiza <LinkInBio />
│   ├── LinkInBio.tsx     # client component, animações + drawer + state
│   └── globals.css       # tokens vinho/paleta, animações @keyframes, drawer
├── public/
│   └── logo-lockup.png   # copiado de assets-brand-kit/brand-kit/
├── assets-brand-kit/     # preservado, NÃO commitado em outros lugares
├── package.json          # next, react, react-dom, typescript
├── tsconfig.json         # padrão Next
└── next.config.mjs       # padrão (vazio ok)
```

## Decisões padrão (não rediscutir)

| Item | Decisão | Por quê |
|---|---|---|
| Router | **App Router** | Padrão Next 16. Server components + metadata API. |
| Fontes | **`next/font/google`** com `variable` | Auto-host, zero render-blocking, Lighthouse +15 vs CDN |
| Lockup | **`next/image` com `priority`** | LCP visível no fold |
| Animações | **CSS puro** (`@keyframes` + `animation-delay`) | Sobrevive ao hydration sem `useEffect` |
| Replay (se houver) | **`key={n}`** num client component | Trivial de re-disparar animações |
| Drawer | **`useState` + classe `.open`** | Sem libs, transition CSS |
| Esc fecha drawer | **`useEffect` com keydown listener** | UX padrão |
| Body lock quando drawer aberto | **`document.body.style.overflow`** num useEffect | Evita scroll por baixo |
| Reduced motion | **`@media (prefers-reduced-motion: reduce)`** zerando duração/opacity | Acessibilidade |

## Tokens CSS — schema da skill mapeado pro brand kit

Sempre que possível, **mapear os tokens `--scene-*`** (convenção da skill) pros tokens reais do brand kit do cliente. Exemplo Lívia (vinho):

```css
:root {
  /* Tokens oficiais do brand kit */
  --c-vinho-deep: #2B0D14;
  --c-vinho-mid:  #4A1F1C;
  --c-vinho-soft: #1E120D;
  --c-bege-light: #E6CFB8;
  --c-bege-mid:   #C0A78C;
  --c-gold:       #CFA35A;
  --c-text:       #E6CFB8;
  --c-text-soft:  #C0A78C;

  /* Fontes via next/font (variáveis injetadas pelo layout.tsx) */
  --display: var(--font-display), Georgia, serif;
  --sans:    var(--font-sans), -apple-system, sans-serif;
}
```

No `layout.tsx`:
```tsx
import { Playfair_Display, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  style: ['normal','italic'],
  display: 'swap',
  variable: '--font-display',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','500','600'],
  display: 'swap',
  variable: '--font-sans',
});

// no JSX:
<html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
```

## Responsividade desktop sem "card flutuando"

Mobile-first sempre. Pra evitar o efeito "phone-shape flutuando sobre fundo diferente" no desktop:

```css
/* MOBILE: .page tem o gradient próprio */
.page {
  background: radial-gradient(ellipse at 50% 18%,
    var(--c-vinho-mid) 0%, var(--c-vinho-deep) 70%, var(--c-vinho-soft) 100%);
  max-width: 480px;
  margin: 0 auto;
}

/* DESKTOP: body herda o MESMO gradient, .page fica transparent */
@media (min-width: 481px) {
  body {
    background: radial-gradient(ellipse at 50% 18%,
      var(--c-vinho-mid) 0%, var(--c-vinho-deep) 70%, var(--c-vinho-soft) 100%);
  }
  .page {
    background: transparent;
    box-shadow: none;
  }
  .page::before { background: none; } /* sem vinheta sobre coluna */
}
```

Não criar gradient diferente pro body desktop — quebra a continuidade visual.

## Safe areas (status bar iOS/Android, overscroll)

```css
html { background: var(--c-vinho-soft); }  /* cobre overscroll */
```
```tsx
// layout.tsx
export const viewport: Viewport = {
  themeColor: '#1E120D', // cor das bordas/extremidades do gradient
};
```

Sem isso, status bar fica preta no iOS.

## O que NÃO levar do mockup atelie pro Next

- Switcher de 4 paletas (era ferramenta de venda)
- Grid `.directions` com 3 iPhones
- Tabela `compare-table` e card `recommendation`
- Toggles de "modo onda / modo foco" ou similar (decide UM combo)
- Botão Reproduzir (não tem replay no produto final)
- Topbar de apresentação ("Mockup · 2026-05-25 · v3")

## O que LEVAR

- A cena escolhida 1:1 em estrutura HTML/CSS
- Os tokens CSS oficiais do brand kit
- As animações @keyframes + delays (CSS puro, sobrevive ao hydration)
- O par tipográfico via `next/font`
- O drawer com copy oficial das áreas
- Os links e microcopy validados

## Armadilhas reais encontradas

1. **Fontes do mockup ≠ fontes oficiais.** Comece pelo brand kit do cliente (manual de marca). No mockup eu chutei Cormorant+Inter; o oficial era Playfair+Montserrat. Tive que retrabalhar.

2. **Lockup pode estar desatualizado.** O PNG no brand-kit pode dizer texto antigo ("Assessoria") enquanto o brand kit institucional já mudou ("Consultoria"). Confirmar com cliente qual é o canônico **antes** de codar — não inventar.

3. **Copy poético inventado é tentador, mas erra o tom.** Sempre destilar do texto institucional que o cliente enviar. Frases como "Quando a vida muda de forma, o Direito precisa caber nela" parecem boas, mas não são a voz do cliente.

4. **Animação em scroll editorial ≠ link-in-bio.** Link-in-bio é micro-site curto, botões na 1ª vista, drawer pra profundidade. Não cair na tentação de fazer "página institucional" (vide `feedback_link_in_bio_conceito.md` na memória global).

5. **Replay via `cloneNode + replaceChild` no mockup** vira **`key={replayCount}`** no Next — mas só se for produto final. Geralmente o produto não precisa de replay.

6. **Drawer em `position: fixed` quebra dentro de iframe.** No mockup do atelie eu usei `position: absolute` dentro do iPhone screen. No Next vira `position: fixed` (tela cheia).

## Validação antes de deploy

- [ ] `npx tsc --noEmit` → No errors
- [ ] `npm run build` localmente passa sem erro
- [ ] Página renderiza em `localhost:3000` (`npm run dev`)
- [ ] Drawer abre/fecha/Esc fecha/scrim fecha
- [ ] Animação roda corretamente do zero (hard refresh Cmd+Shift+R)
- [ ] Mobile no DevTools (iPhone 13) — primeiro segundo já mostra o lockup
- [ ] Desktop tela cheia — sem corte visual de cor entre body e .page
- [ ] `prefers-reduced-motion` (DevTools Rendering) — animações suprimidas, conteúdo legível
- [ ] Links: WhatsApp abre `wa.me`, e-mail abre cliente, endereço abre Maps, IG abre perfil
- [ ] Cliente confirmou copy do drawer (frases das áreas, abertura, fechamento)

Depois disso: `deploy-vercel.md`.
