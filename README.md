# Link in Bio — Monorepo

Monorepo dos projetos Link in Bio do JG Studio. Cada cliente é uma pasta autossuficiente; cada lead/proposta vive em `atelie/` até virar cliente real.

## Estrutura

```
.
├── atelie/                      ← mockups por pessoa (leads, propostas, exploração)
│   ├── <slug-do-lead>/
│   │   ├── index.html           ← apresentação HTML (gerada pela skill link-in-bio)
│   │   └── assets/              ← logo, fotos, brand-kit do lead
│   └── _historicos/             ← mockups antigos não-atribuídos
│
├── clients/                     ← projetos Next.js de quem JÁ FECHOU
│   └── <slug-do-cliente>/       ← pasta autossuficiente
│       ├── app/                 ← Next.js App Router
│       ├── package.json
│       ├── next.config.mjs
│       ├── assets-brand-kit/    ← brand kit do cliente
│       └── README.md
│
├── docs/                        ← documentação do projeto
│   └── design-directions/
│
├── .claude/skills/link-in-bio/  ← skill conversacional pra criar mockup novo
└── vercel.json
```

## Fluxo de novo lead → cliente

1. **Lead entra.** Skill `cockpit` registra em `pipeline[]` do dashboard JG Studio (`~/Desktop/Olimpo/00-Hub/projects.json`)
2. **Briefing + mockup.** Invocar skill `link-in-bio` — entrevista o usuário, escolhe paleta/cenas/tipografia, gera `atelie/<slug>/index.html` com 3 direções
3. **Apresentação.** Screen recording do mockup pra mandar via WhatsApp (NUNCA enviar link/HTML — protege trabalho)
4. **Aprovação + 50%.** Cliente escolhe direção, paga 1ª parcela
5. **Promoção pra cliente.** Skill `cockpit` move lead pra `clients[]`. Cria pasta `clients/<slug>/` (copia template Next.js da estrutura de outro cliente recente; refator pra `shared/` quando 3+ clientes)
6. **Build + Vercel.** Configura Vercel project apontando pra `clients/<slug>/`
7. **Entrega + 50% restante.** Cobrar 2ª parcela na entrega aprovada
8. **Pós-entrega.** Pedir indicação + depoimento

## Convenções

- **Slug:** kebab-case do nome (`livia-holanda`, `bianca-andrade`)
- **Mockup HTML:** standalone, sem build, fonts via Google Fonts CDN, assets em `./assets/` relativa
- **Projeto Next.js:** App Router, Tailwind, sem framework UI pesado
- **Sem emojis no código** (lucide-react ou similar)
- **Sem `#hex` ou `rgba()` repetidos** — extrair pra token CSS/Tailwind no `tailwind.config.js` do cliente
- **Easing canônico:** `cubic-bezier(0.22, 1, 0.36, 1)` (do brand JG Studio)

## Skill `link-in-bio`

Vive em `.claude/skills/link-in-bio/`. Invocar quando o usuário pedir "criar/fazer/montar um link in bio" pra cliente novo. A skill:
- Conduz briefing em 3-4 rodadas de perguntas
- Cura paleta + 3 cenas + tipografia + voz da biblioteca local
- Gera `atelie/<slug>/index.html` com mockup standalone
- Documenta conversão pra Next.js em `nextjs-conversion.md`

## Estado atual (2026-05-25)

**Clientes:**
- `clients/livia-holanda/` — advogada, R$300 pago, em desenvolvimento

**Atelie (leads):**
- `atelie/bianca-andrade/` — mockup pronto, aguardando apresentação
- `atelie/_historicos/serena/` — mockup antigo
- `atelie/_historicos/livia-holanda-mockup-original.html` — versão pré-Next.js

## Dashboard externo

Estado comercial geral (clientes pagos, pipeline, foco do dia) vive em:
`~/Desktop/Olimpo/00-Hub/projects.json` → renderizado em `~/Desktop/Olimpo/00-Hub/visualizacoes/dashboard.html`

Editar via skill `cockpit` (não direto no JSON).
