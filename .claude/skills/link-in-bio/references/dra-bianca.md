# Caso de referência — Dra. Bianca Guimarães

**Entregue em:** maio 2026 · **v3** (refinamento final)
**Arquivo canônico:** `/index.html` na raiz do repo (1376 linhas standalone)

Esta é a apresentação que estabelece o padrão de qualidade que toda nova entrega deve igualar ou superar. Use-a como referência estrutural — ao gerar uma nova cliente, abra o `index.html` e replique a arquitetura, trocando apenas o que muda.

## Brief original (reconstruído)

| Campo | Valor |
|---|---|
| nome | Dra. Bianca Guimarães |
| segmento | Saúde clínica · Estética |
| subespecialidade | Cirurgiã-dentista · Estética |
| público-alvo | Mulheres 25-45, alto padrão |
| personalidade | Editorial luxo + Boutique parisiense |
| tom_voz | Voz 01 · Poética contemplativa |
| paleta | Atelier Oliva (`--scene-deep:#292E17` `--scene-mid:#868859` `--scene-light:#F2ECDC` `--scene-soft:#DDD7CA` `--scene-glow:#DBC59A`) |
| tipografia | Par 01 Editorial Clássico (Italiana + Cormorant Garamond + Inter) |
| links | I. Agendar consulta · II. Site oficial · III. Instagram · IV. Localização · V. Contato direto |
| logo | `assets/logo-bg.png` *(ainda não commitada — alerta)* |
| formato | Apresentação com 3 direções |
| switcher de paletas | Sim — 4 variantes (atelier, bosque, noturno, areia) |

## 3 direções escolhidas

### Direção 01 — Cinematic Hero (`.scene-b`)
Logo se desenha em SVG (stroke-dashoffset 800→0 em 2.6s) ou aparece como PNG com light-sweep. Nome surge. Linha dourada cresce 0→200px. Capítulos romanos I-V chegam com rise 0.8s @ delays 3.7s/3.95s/4.2s/4.45s/4.7s, cada um com shimmer recorrente. Variantes: fundo escuro/claro, logo desenhada/real.

### Direção 02 — Manifesto Trio (`.scene-c`)
Logo + linha dourada + tríade de promessas (ícone + frase serif) em cascata 1.5s/2.1s/2.7s. Depois links em vidro fosco. Toggles: frases serenas/originais, ícones geométrico/romano/pontual/botânico.

### Direção 03 — Véu (`.scene-v`)
Conteúdo já renderizado por baixo. Duas cortinas de seda (gradientes diagonais + ruído repeating-linear-gradient + silk-breath anim) se afastam pros lados em 2.4s a partir de 0.7s. Após revelar, links em cards arredondados.

## Por que essa curadoria funcionou

- **Coerência**: 3 cenas todas no espectro editorial-luxo, sem rompimento de tom.
- **Variedade de impacto**: 01 é estrutura, 02 é manifesto, 03 é teatro.
- **Reuso de paleta**: a mesma `--scene-*` rende 4 versões cinematográficas.
- **Honestidade**: cada direção declarou seu trade-off (estrutura clássica · menos "uau" · 6 dias de implementação).

## Lições para próximas clientes

1. **Logo real DEVE estar commitada** antes da apresentação — `assets/logo.png` foi omitido no commit inicial e quebra a 1ª impressão se a cliente abrir o link.
2. **Ofereça duas variantes de fundo (claro/escuro)** sempre que a paleta permitir — vendeu sozinho na cenário 01.
3. **Switcher de paletas no rodapé** virou objeto de fascínio da cliente; manter mesmo quando ela não pediu.
4. **Versão `v3`** indica que houve 2 rounds de refinamento — orçamento desse tipo de projeto precisa absorver 2-3 iterações antes do OK final.
5. **Frases serenas + ícones geométricos** foi a combinação aprovada — guardar como default para perfil editorial-luxo feminino.
