# Biblioteca de paletas

Cada paleta segue o mesmo schema CSS para plugar direto no template:

```css
:root {
  --scene-deep:  /* fundo mais escuro/saturado */
  --scene-mid:   /* cor de meio-tom */
  --scene-light: /* fundo claro principal */
  --scene-soft:  /* fundo claro auxiliar */
  --scene-text:  /* texto sobre fundo escuro */
  --scene-text-soft: /* texto secundário */
  --scene-glow:  /* dourado / destaque / linhas finas */
}
```

**Regra:** quando a paleta principal é escolhida, crie 3 variantes para o switcher do rodapé (`atelier`, `bosque`, `noturno`, `areia` no exemplo Bianca) variando deep/light/glow. Mantenha tom geral consistente.

---

## ATELIER OLIVA — luxo orgânico (paleta original Bianca)
**Para:** saúde clínica, estética, boutique editorial, marca botânica.
```
--scene-deep:#292E17  --scene-mid:#868859  --scene-light:#F2ECDC
--scene-soft:#DDD7CA  --scene-text:#F2ECDC  --scene-glow:#DBC59A
```

## NOIR & GOLD — joalheria, alta gastronomia, evento premium
**Para:** chef, sommelier, joalheria, evento, atelier de moda.
```
--scene-deep:#0A0A08  --scene-mid:#1A1812  --scene-light:#E8DFC8
--scene-soft:#3A3528  --scene-text:#F5EFD9  --scene-glow:#C9A961
```

## BLUSH BOUDOIR — feminino quente, beleza, sensual
**Para:** estética íntima, lingerie, boudoir, doceria, salão.
```
--scene-deep:#3A1F2E  --scene-mid:#8B5C6E  --scene-light:#F5E6E1
--scene-soft:#E8C9C0  --scene-text:#FBEFEA  --scene-glow:#D4A574
```

## CLINICAL BLUE — médico, tech-saúde, fisio, dentista clean
**Para:** quem quer transmitir confiança técnica sem ser corporativo frio.
```
--scene-deep:#0E2A3F  --scene-mid:#3B7099  --scene-light:#F0F5F8
--scene-soft:#D8E4ED  --scene-text:#F8FAFC  --scene-glow:#9BC4D9
```

## TERRACOTA — orgânico quente, gastronomia rústica, cerâmica
**Para:** chef rústica, cerâmica, padaria artesanal, retiro, yoga.
```
--scene-deep:#3D1F12  --scene-mid:#A04B2A  --scene-light:#F4E8D8
--scene-soft:#E0C9A8  --scene-text:#FAF1E3  --scene-glow:#E89D5E
```

## VERDE FLORESTA — natural intenso, sustentável, jardim
**Para:** paisagismo, marca eco, retiro, terapia holística, vinícola.
```
--scene-deep:#1A2E1F  --scene-mid:#4A6B4F  --scene-light:#E8EFE5
--scene-soft:#C6D4C2  --scene-text:#F2F7EF  --scene-glow:#A8C290
```

## VIBRANT POP — millennial bold, glossier-style, jovem
**Para:** marca DTC, app, podcast, criadora de conteúdo, beauty pop.
```
--scene-deep:#1E1B4E  --scene-mid:#FF6B9D  --scene-light:#FFF4E6
--scene-soft:#FFD9B8  --scene-text:#FFFFFF  --scene-glow:#FFD93D
```

## MONO INK — minimal radical, arquiteto, designer, B2B sério
**Para:** arquiteto, fotógrafo P&B, escritório de design, consultoria.
```
--scene-deep:#000000  --scene-mid:#2C2C2C  --scene-light:#FAFAFA
--scene-soft:#E8E8E8  --scene-text:#FFFFFF  --scene-glow:#888888
```

## ROYAL VINHO — autoridade, advocacia, sommelier, gentleman
**Para:** advogado, sommelier, alfaiataria masculina, charutaria.
```
--scene-deep:#2A0E1A  --scene-mid:#6B1F35  --scene-light:#F4ECE3
--scene-soft:#D9C5B0  --scene-text:#FAF0E6  --scene-glow:#C9A961
```

## OCEAN MIST — sereno, fluido, terapia, costeiro, spa
**Para:** psicóloga, spa, costa, marca de skincare clean, terapia.
```
--scene-deep:#1F3A47  --scene-mid:#5A8298  --scene-light:#EAF1F4
--scene-soft:#C7D8DE  --scene-text:#F4F8FA  --scene-glow:#A8C9D6
```

---

## Guia rápido segmento → paletas candidatas

| Segmento | Paletas a propor primeiro |
|---|---|
| Saúde clínica | Atelier Oliva · Clinical Blue · Ocean Mist |
| Estética & beleza | Atelier Oliva · Blush Boudoir · Noir & Gold |
| Fitness | Vibrant Pop · Mono Ink · Royal Vinho (masculino) |
| Gastronomia | Noir & Gold · Terracota · Verde Floresta |
| Moda | Noir & Gold · Mono Ink · Blush Boudoir |
| Imobiliário | Mono Ink · Clinical Blue · Verde Floresta |
| Tech/SaaS | Mono Ink · Clinical Blue · Vibrant Pop |
| Música/Arte | Vibrant Pop · Noir & Gold · Mono Ink |
| Terapia/holístico | Ocean Mist · Verde Floresta · Atelier Oliva |
