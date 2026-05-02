---
name: slide
description: >
  Cria slides e cards visuais em HTML com a identidade visual da Quinta Essência.
  Suporta os dois padrões visuais: "Insights da Michelle Luk" e "lembrete de empresária".
  Use quando pedir "faz um slide", "cria um card", "quero um visual pra apresentação",
  "frame pra deck", ou pedir slide sobre algum tema específico.
---

# /slide — Slide ou Card Visual

## Dependências

- **Identidade visual:** `marca/design-guide.md`
- **Playwright:** para renderizar em PNG (opcional, mas recomendado)

---

## Workflow

### Passo 1 — Entender o pedido

Identificar:
1. **Conteúdo:** o que vai no slide (texto, dado, diagrama, citação)
2. **Série/estilo:** "Insights", "lembrete de empresária", aula/apresentação, ou outro
3. **Formato:** card quadrado 1:1 (1080x1080) / slide wide 16:9 (1920x1080) / story vertical 9:16 (1080x1920)
4. **Tipo:** texto/insight, dado/estatística, diagrama/fluxo, capa de apresentação

Se não estiver claro, perguntar apenas o que falta.

---

### Passo 2 — Aplicar a identidade visual

Ler `marca/design-guide.md`. Aplicar:
- **Paleta:** Terra #6B4629 · Bosque #3E5936 · Pedra #BDA78D · Linho #E4DDD0 · Vinho #541138 · Preto #0A0A0A · Off-White #F5F0E8
- **Tipografia:** Playfair Display (display/títulos) · Raleway (body, weight 300) · DM Mono (labels, metadados)
- **Handle:** @miluk no rodapé quando for post de redes sociais

---

### Passo 3 — Gerar o HTML

**Série "Insights da Michelle Luk" (card 1080x1080 ou 1080x1350):**
- Fundo externo: areia/terra suave (#C4A882 ou similar)
- Card branco centralizado com padding generoso e cantos levemente arredondados
- Header do card: "< Insights da Michelle Luk" em Terra, ícone "···" à direita
- Texto no card: preto/escuro, Raleway 300, parágrafos com respiro
- Destaque em negrito: sem highlight ou com box amarelo suave (#FFF3C4) quando for o insight central
- Nota manuscrita em itálico (ex: "ele fechou em 3 dias!!") quando houver virada de resultado
- Borda lateral esquerda em Terra no trecho destacado com highlight
- @MILUK em cinza claro no rodapé, fora do card

**Série "lembrete de empresária" (card 1080x1080):**
- Fundo: #E4DDD0 (Linho)
- Watermark "lembrete de empresária" no topo: Raleway 300, letras muito espaceadas, cor suave (#C4B8A8)
- Tipografia grande no centro misturando:
  - Playfair Display em Bosque #3E5936 (palavras-chave em display)
  - Playfair Display bold em Terra #6B4629 (palavra de impacto)
- Subtítulo menor abaixo em Raleway, cor escura
- @miluk em cinza suave no rodapé

**Slide de aula/apresentação (16:9):**
- Fundo: #0A0A0A
- Borda lateral esquerda em Terra (4px)
- Label superior em DM Mono uppercase (ex: "Módulo 01 / Posicionamento")
- Título em Playfair Display Off-White
- Subtítulo/autor em Raleway 300 #555
- Símbolo dos 5 pontos no canto inferior direito (discreto)

**Card de dado/estatística:**
- Número em destaque: Playfair Display 80-120px, cor Terra
- Label descritivo abaixo: Raleway uppercase, espaçado, #555
- Fundo escuro ou claro conforme contexto

**Diagrama/fluxo:**
- Caixas com border 1px solid #222 (fundo escuro) ou #BDA78D (fundo claro)
- Texto em Raleway 300
- Conectores em Terra
- Numeração 01 / 02 / 03 em DM Mono

---

### Passo 4 — Salvar e renderizar

Salvar em `marketing/conteudo/slides/slide-[tema]-[data].html`

Renderizar com Playwright:
```bash
# Card 1:1
npx playwright screenshot --viewport-size=1080,1080 --full-page "file:///[caminho]/slide.html" "slide.png"

# Slide 16:9
npx playwright screenshot --viewport-size=1920,1080 --full-page "file:///[caminho]/slide.html" "slide.png"

# Story/Vertical
npx playwright screenshot --viewport-size=1080,1920 --full-page "file:///[caminho]/slide.html" "slide.png"
```

---

## Regras

- Um slide por vez — se quiser vários, criar um de cada vez e confirmar antes do próximo
- Inline CSS, sem dependências externas além do Google Fonts
- O slide deve funcionar como screenshot — tudo visível dentro da área, sem scroll
- Sem border-radius agressivo nos elementos principais (visual retilíneo)
- Sem gradientes coloridos, sem sombras dramáticas
- Nunca usar fontes fora das três famílias definidas (Playfair Display, Raleway, DM Mono)
- Se o design guide tiver logo definido, incluir no slide quando fizer sentido (canto inferior, assinatura)
