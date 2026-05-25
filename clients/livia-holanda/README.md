# Lívia Holanda — Link in Bio (Next.js)

Versão Next.js do caminho 1 do showcase em `clients/livia-holanda/`. Pronto pra Vercel.

## Rodar local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy Vercel

```bash
# 1) via CLI
npx vercel

# 2) ou conectar este diretório no dashboard Vercel (Git import)
```

## Estrutura

- `app/page.tsx` — server page que renderiza o client component
- `app/LinkInBio.tsx` — markup + state do drawer
- `app/globals.css` — paleta, tipografia, animações, layout mobile-first
- `public/logo-lockup.png` — lockup oficial (LH + nome + tagline)

## Conteúdo

Telefone, e-mail, endereço, Instagram e copy do drawer estão em `LinkInBio.tsx` no topo (constantes `WHATSAPP`, `MAPS`, `EMAIL`, `INSTAGRAM`, `AREAS`, `TAGLINE`).
