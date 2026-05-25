# Fase 3 — Deploy no Vercel

> **Validado em 25/mai/2026** com a Lívia Holanda. Playbook pra replicar com cada cliente novo.

## Estratégia: monorepo + 1 projeto Vercel por cliente

Todos os clientes ficam no mesmo repo Git (`Linkinbio`). Cada cliente tem seu **projeto Vercel independente** apontando pra `clients/<slug>/` como Root Directory.

Vantagens:
- Cada cliente isolado — deploy de um não afeta outro
- Domínios próprios por cliente (subdomínio Vercel grátis OU domínio comprado)
- Build separado, billing claro, rollback independente
- Git único, fácil de gerenciar localmente

## Pré-requisitos (uma vez por máquina)

- Vercel CLI instalado: `brew install vercel-cli` ou `npm i -g vercel`
- Autenticado: `vercel login` (uma vez)
- `Bash(vercel *)` no allowlist do Claude Code: `.claude/settings.local.json` do projeto
- MCP Vercel tools no allowlist (monitorar builds sem cli):
  - `mcp__claude_ai_Vercel__list_teams`
  - `mcp__claude_ai_Vercel__list_projects`
  - `mcp__claude_ai_Vercel__get_project`
  - `mcp__claude_ai_Vercel__get_deployment`
  - `mcp__claude_ai_Vercel__get_deployment_build_logs`
  - `mcp__claude_ai_Vercel__list_deployments`
  - `mcp__claude_ai_Vercel__deploy_to_vercel`

## Pipeline padrão pra novo cliente

### 1. Validar build local antes
```bash
cd clients/<slug> && npm run build
```
Se quebrar aqui, **não tenta deploy**. Conserta primeiro.

### 2. Commit + push pra main
Branch atual → main (fast-forward quando possível). Vercel detecta push e dispara build automático **após** o projeto estar configurado.

### 3. Criar projeto Vercel via dashboard (recomendado)

Tentar via CLI (`vercel link`) cria projeto sem conectar Git — vira projeto "órfão" que precisa configurar Git depois. Mais limpo via dashboard:

1. https://vercel.com/new
2. **Import Git Repository** → escolher `<usuario>/Linkinbio`
3. **Project Name**: `<slug>` (ex: `livia-holanda`)
4. **Framework Preset**: Next.js (auto-detect)
5. **Root Directory**: clica em **Edit** → seleciona `clients/<slug>` (ou digita direto)
6. **Build Settings**: tudo padrão (não mexer em Build Command / Output Directory / Install Command)
7. **Deploy** → primeiro build dispara

### 4. Configurações críticas pós-criação

Settings → **Build & Development Settings → Root Directory**:

- **Root Directory**: `clients/<slug>` (sem barra inicial/final)
- **Include files outside the root directory**: **OFF** (cada cliente é autocontido)
- **Skip deployments when there are no changes to the root directory or its dependencies**: **ON** ← **crítico pra monorepo** — sem isso, mexer em `atelie/` ou em outro cliente faz Vercel buildar TODOS os projetos à toa.

Settings → **Node.js Version**: **22.x** (LTS, compatível com Next 16+)

Settings → **On-Demand Concurrent Builds**: **Run all builds immediately** (padrão hobby tier)

### 5. URL pública

Vercel gera automaticamente:
- `<slug>-<team-slug>.vercel.app` (production)
- `<slug>-git-main-<team-slug>.vercel.app` (alias do branch)

Pra Lívia: `livia-holanda-joaoguilhermejacos-projects.vercel.app`

Se a cliente quiser domínio próprio, adiciona em Settings → Domains (não tem custo Vercel — só o registro DNS).

## Armadilhas reais

1. **`vercel link` via CLI cria projeto SEM Git conectado.** Resultado: push na main não dispara deploy automático. Solução: usar dashboard pra criar OU rodar `vercel git connect` depois.

2. **Esquecer "Skip deployments when no changes"** = caos quando você tiver 5 clientes. Cada `git push` aciona 5 builds em paralelo. Liga sempre.

3. **`vercel.json` na raiz do repo** com `rewrites` apontando pra arquivos estáticos antigos atrapalha a estratégia monorepo. **Deletar** se existir.

4. **Root Directory salvo errado** (com barra inicial `/clients/<slug>` ou só `/`) faz Vercel buildar na raiz e falhar com "No Next.js version detected". Sempre `clients/<slug>` puro.

5. **Allowlist do Claude Code** demora pra recarregar. Mudança em `.claude/settings.local.json` só vale na próxima sessão. Pra rodar `vercel` na sessão atual, usar `! vercel ...` no prompt OU pedir pro usuário executar.

## Monitorar deploy via MCP

Sem precisar entrar no dashboard:

```
mcp__claude_ai_Vercel__list_deployments → últimos deploys + status
mcp__claude_ai_Vercel__get_deployment_build_logs → log completo do build
mcp__claude_ai_Vercel__get_project → config atual (root dir, framework, node version)
```

Útil pra avisar "build em BUILDING" → "build READY, URL pronto" sem interromper o usuário.

## Validação pós-deploy

- [ ] Status "Ready" no deployment
- [ ] URL pública abre sem erro
- [ ] Mobile (DevTools iPhone 13) — animação roda, drawer abre
- [ ] Status bar com cor vinho (não preta) no iOS Safari real
- [ ] Lighthouse mobile ≥90 nos 4 scores
- [ ] Links externos (WhatsApp/Maps/IG) abrem corretamente
- [ ] Atualiza memória do projeto: `[[project-<slug>-entrega]]` com URL e status "NO AR"
- [ ] Atualiza STATUS.md do vault
- [ ] Manda URL pra cliente validar
