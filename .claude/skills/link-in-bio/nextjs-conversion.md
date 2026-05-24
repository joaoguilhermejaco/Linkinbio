# Fase 2 — Conversão para Next.js

> **Status: STUB.** Este arquivo será preenchido na primeira conversão real, com base no que de fato acontece — não em chute. Por enquanto serve para ancorar decisões e listar perguntas a responder.

## Quando usar

A cliente aprovou **uma das 3 direções** da apresentação HTML (fase 1). Agora a página vira um projeto Next.js de produção: domínio próprio, SEO, OG image, performance Lighthouse, edge runtime.

## Perguntas a responder na primeira conversão (TODO)

- [ ] App Router ou Pages Router? *(default: App Router)*
- [ ] Fontes: `next/font/google` (auto-host) ou manter Google Fonts CDN? *(default: next/font — Lighthouse +15)*
- [ ] Logo: `next/image` com priority? Tamanhos? PNG ou exportar SVG?
- [ ] Animações que já são CSS puro → ficam. **Quais precisam virar JS** por interação? *(replay, switcher de paleta, toggles)*
- [ ] Replay button: `key={n}` num client component basta?
- [ ] Switcher de paleta: `useState` no layout + `data-palette` no `<html>` via `useEffect`?
- [ ] Metadata: title, description, OG image (gerada com `next/og`?), favicon
- [ ] Deploy: Vercel default. Domínio custom? Analytics?
- [ ] i18n? *(quase sempre não — uma página, um idioma)*
- [ ] Tracking de clique nos links (Plausible / Vercel Analytics)?
- [ ] Salvar paleta escolhida no `localStorage`?

## Estrutura provável (a confirmar na prática)

```
app/
├── layout.tsx          # html lang, fontes, metadata, viewport
├── page.tsx            # server component, renderiza a cena
├── scene.tsx           # client component, anim + interação
├── opengraph-image.tsx # gera OG dinâmica
└── globals.css         # vars --scene-* + reset

components/
├── iphone-frame.tsx    # mock se ainda quisermos exibir em /preview
└── links-list.tsx      # lista de links (reusável)

public/
├── logo.png            # logo do cliente
└── favicon.ico

content/
└── client.ts           # { nome, tagline, links, palette, voice } tipado
```

## O que NÃO levar para o Next.js

- O switcher de 4 paletas do rodapé (era ferramenta de venda, não produto final).
- A grid `.directions` com 3 iPhones — vai só uma cena.
- O `compare-table` e o `recommendation` — só fase 1.
- Toggles de "frases · serenas/originais" e "ícones · geométrico/romano" — decida UM combo na entrega.

## O que LEVAR

- A cena escolhida, 1:1 em estrutura HTML/CSS
- O sistema de variáveis CSS `--scene-*`
- As animações @keyframes + delays
- O par tipográfico
- Os links e microcopy

## Próximos passos

Na próxima sessão de conversão, atualize este arquivo com:
1. Decisões tomadas em cada checkbox acima
2. Comandos `create-next-app` usados
3. Armadilhas encontradas (ex: "animation-delay com `clone+replace` precisou virar `key` porque o React não re-dispara CSS animation senão")
4. Lighthouse antes/depois
5. Tempo total da conversão
