# Biblioteca tipográfica

Cada par tem 3 papéis: **display** (títulos grandes, italianos/altos), **serif** (corpo editorial, citações), **sans** (UI, labels, microcopy). Todos Google Fonts — basta colar o `<link>` correspondente.

Substitua em:
```css
:root {
  --display: 'X', serif;
  --serif:   'Y', serif;
  --sans:    'Z', system-ui, sans-serif;
}
```

---

## 01 · EDITORIAL CLÁSSICO *(padrão Bianca)*
Display: **Italiana** · Serif: **Cormorant Garamond** · Sans: **Inter**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Italiana&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```
**Para:** luxo editorial, boutique, estética, joalheria. **Vibe:** Vogue, Chanel.

## 02 · MODERN SERIF EDITORIAL
Display: **Playfair Display** · Serif: **Lora** · Sans: **Inter**
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```
**Para:** moda, blog editorial, advocacia premium, restaurante moderno.

## 03 · BRUTALIST CONFIDENT
Display: **Anton** · Serif: **DM Serif Display** · Sans: **Space Grotesk**
```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Serif+Display:ital@0;1&family=Space+Grotesk:wght@300;400;500;600&display=swap" rel="stylesheet">
```
**Para:** marca jovem, agência criativa, podcast, marca DTC ousada.

## 04 · TECH CLEAN
Display: **Space Grotesk 700** · Serif: **Source Serif Pro** · Sans: **Inter**
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Source+Serif+Pro:wght@300;400;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```
**Para:** SaaS, app, tech, designer/dev, consultoria moderna.

## 05 · WARM HUMANIST
Display: **Fraunces** · Serif: **Fraunces** *(reuso)* · Sans: **Manrope**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,400&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet">
```
**Para:** terapia, psicologia, marca holística, doula, nutricionista quente.

## 06 · MONO STATEMENT
Display: **IBM Plex Mono 600** · Serif: **IBM Plex Serif** · Sans: **IBM Plex Sans**
```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Serif:wght@300;400;500&display=swap" rel="stylesheet">
```
**Para:** desenvolvedor, escritor, jornalismo, brand brutalist-but-warm.

## 07 · FEMININE SOFT LUXURY
Display: **Cormorant Infant** · Serif: **EB Garamond** · Sans: **Outfit**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,400;0,500;0,600;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
```
**Para:** lingerie, boudoir, doceria, salão feminino quente.

## 08 · DISPLAY HEADLINE POP
Display: **Syne 700** · Serif: **Crimson Pro** · Sans: **DM Sans**
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@500;700;800&family=Crimson+Pro:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```
**Para:** marca jovem millennial, criadora de conteúdo, beauty pop.

---

## Mapeamento personalidade → par

| Personalidade do brief | Par recomendado |
|---|---|
| Editorial luxo | 01 Editorial Clássico ou 07 Feminine Soft |
| Vibrante pop | 08 Display Pop ou 03 Brutalist |
| Minimal sereno | 04 Tech Clean ou 05 Warm Humanist |
| Brutalist / raw | 03 Brutalist ou 06 Mono |
| Orgânico botânico | 05 Warm Humanist ou 01 Editorial |
| Tech clean | 04 Tech Clean ou 06 Mono |
| Boutique parisiense | 01 Editorial ou 02 Modern Serif |
| Esportivo dinâmico | 03 Brutalist ou 08 Display Pop |
