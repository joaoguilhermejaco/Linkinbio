# Checklist de qualidade — pré-entrega

Rode mentalmente cada bloco antes de declarar "pronto". Se algum falhar, conserte antes de fazer commit.

## Estrutura
- [ ] Arquivo único `index.html` (ou `clients/<slug>/index.html`) — nenhuma dependência local além de `assets/`
- [ ] Tag `<html lang="pt-BR" data-palette="<nome>">` na raiz
- [ ] Topbar com nome do cliente + meta de versão (ex: "Apresentação · [mês] [ano] · v1")
- [ ] Hero com eyebrow, h1, sub, e bloco `hero-meta` com 3-4 metadados
- [ ] Grid `.directions` com **exatamente 3** `.direction`, cada uma com mock de iPhone
- [ ] Tabela `compare-table` com 6-7 linhas comparativas entre as 3 direções
- [ ] Bloco `recommendation` explicando quando escolher cada caminho
- [ ] Switcher `.palette-bar` no rodapé com 4 variantes (se `incluir_switcher_paleta: sim`)
- [ ] Footer com data + versão

## Conteúdo
- [ ] Nome do cliente correto em **todos** os lugares (busque por nome antigo para garantir)
- [ ] Especialidade adaptada à área da nova cliente
- [ ] 4-5 links principais, na ordem de prioridade do brief
- [ ] CTA principal é sempre o **primeiro** link
- [ ] Microcopy de cada cena segue a **voz** escolhida (releia `library/voice.md`)
- [ ] Tagline em **uma linha**, sem ponto final se voz 01, com ponto se voz 02/04/06
- [ ] Inspirações (em `.inspire`) trocadas para referências do segmento da cliente
- [ ] Idioma 100% no idioma escolhido (sem mistura PT/EN não intencional)

## Visual
- [ ] Variáveis CSS `--scene-*` definidas conforme paleta escolhida
- [ ] 4 variantes do switcher seguem a mesma família (não cor aleatória)
- [ ] Par tipográfico do brief, com `<link>` do Google Fonts correspondente
- [ ] Logo: se cliente enviou PNG/SVG, está em `assets/logo.png` e referenciada; senão, SVG provisório com cor da paleta
- [ ] Ícones SVG inline de cada link fazem sentido para o link (instagram, pin, telefone, calendário, etc.)
- [ ] Contraste texto/fundo passa AA em todas as paletas (não testar com olho — usar regra: texto claro só sobre fundo escuro)

## Animação
- [ ] Cada cena tem timing total entre 2-6s (preferência 3-5s)
- [ ] Delays escalonados — nada entrando junto
- [ ] Botão "Reproduzir" funciona (clone + replace technique)
- [ ] Animação NÃO bloqueia interação com links após terminar
- [ ] Em iPhone antigo (testar em DevTools throttling 4x slowdown) ainda fica suave
- [ ] Nenhuma animação em loop infinito tipo flash que distraia da leitura

## Interação
- [ ] Switcher de paleta troca instantaneamente sem recarregar
- [ ] Botões `Reproduzir / Fundo / Logo / Frases / Símbolos` funcionam (testar 1 a 1 mentalmente)
- [ ] Botão ativo mostra estado visual (.active class)
- [ ] Em mobile (1 coluna), nenhum elemento estoura horizontal

## Performance
- [ ] Sem `<script src="https://...">` externo além do Google Fonts CSS
- [ ] Sem `<img>` de mais de 300kb (avisar usuário se logo enviada é pesada)
- [ ] CSS inline está ok (single page, sem repetição)
- [ ] `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com`

## Honestidade editorial
- [ ] Cada direção tem `.details` com **"O que funciona"** E **"Trade-offs honestos"**
- [ ] Recomendação no rodapé descreve quando escolher cada caminho, não força um
- [ ] `compare-table` é justa — se a direção 03 é mais cara, mostra ~6 dias e não esconde

## Final (Fase 1)
- [ ] Abra mentalmente em iPhone 13 — passa no "primeiro segundo"? a cliente entende o que é?
- [ ] Se a cliente perguntar "por que essas 3?" — você tem resposta justificada nas notas de curadoria
- [ ] Commit message: `link-in-bio: <nome-cliente> v1` (ou `v2`, `v3` em iterações)
- [ ] Push no branch designado
- [ ] NÃO abre PR a menos que pedido

---

## Fase 2 — Port pro Next.js *(quando cliente aprovar uma direção)*

Detalhes em `nextjs-conversion.md`. Checklist crítico:

- [ ] Brand kit do cliente em `clients/<slug>/assets-brand-kit/brand-kit/`
- [ ] Lockup oficial copiado pra `public/logo-lockup.png` (confirmar texto canônico antes — Assessoria vs Consultoria etc)
- [ ] Fontes oficiais via `next/font/google` (NÃO chutar — ler manual)
- [ ] Tokens CSS oficiais do brand kit mapeados (não inventar cores)
- [ ] Copy oficial destilado do texto institucional do cliente (NÃO inventar frases poéticas)
- [ ] Animações em CSS puro (sobrevivem ao hydration)
- [ ] Drawer com useState + Esc fecha + body overflow lock
- [ ] Responsivo desktop sem "card flutuando" (body herda mesmo gradient do .page)
- [ ] Safe areas: `html { background }` + `themeColor` no viewport
- [ ] **OG image dinâmica**: `app/opengraph-image.tsx` com lockup em fundo vinho + `metadataBase` no layout
- [ ] **WhatsApp com mensagem pré-preenchida** via `?text=encodeURIComponent(msg)` (não link cru `wa.me/numero`)
- [ ] `prefers-reduced-motion` zera animações
- [ ] `npx tsc --noEmit` → No errors
- [ ] `npm run build` passa local (sem warning de metadataBase)
- [ ] Removidos do Next: switcher de paletas, compare table, recommendation, grid 3-up, botão Reproduzir, topbar de apresentação

## Fase 3 — Deploy Vercel *(quando Fase 2 estiver verde)*

Detalhes em `deploy-vercel.md`. Checklist crítico:

- [ ] `vercel.json` da raiz do monorepo deletado se existir (atrapalha)
- [ ] Projeto Vercel criado via **dashboard** (não CLI — CLI não conecta Git automático)
- [ ] Root Directory: `clients/<slug>` (sem barra)
- [ ] "Include files outside root directory": **OFF**
- [ ] **"Skip deployments when no changes to root directory": ON** ← crítico pra monorepo
- [ ] Node.js Version: 22.x (LTS)
- [ ] Framework: Next.js (auto-detect)
- [ ] Push pra main dispara build automático
- [ ] Status "Ready" no deployment
- [ ] URL pública abre, animação roda, drawer funciona
- [ ] **OG image válida em produção**: testa cola URL em https://developers.facebook.com/tools/debug/ → deve mostrar lockup em fundo vinho
- [ ] Atualiza memória do projeto (`project-<slug>-entrega`) e STATUS.md do vault
- [ ] Manda URL pra cliente validar
- [ ] Avisa cliente sobre cache de OG image em redes sociais (se já compartilhou antes, rodar Facebook Debugger)
