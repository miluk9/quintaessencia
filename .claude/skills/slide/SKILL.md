---
name: slide
description: >
  Cria um slide ou card visual em HTML pra usar em apresentações, decks ou posts.
  Aplica a identidade visual do usuário (marca/design-guide.md).
  Use quando o usuário pedir "faz um slide", "cria um card", "quero um visual pra apresentação",
  "frame pra deck", ou pedir um slide sobre algum tema específico.
---

# /slide — Criação de Slide ou Card Visual

## Dependências

- **Identidade visual:** `marca/design-guide.md`

---

## Workflow

### Passo 1 — Entender o que o usuário quer

Se não estiver claro, perguntar:
1. "Qual é o tema ou conteúdo do slide?"
2. "Qual é o formato? (card quadrado 1:1, slide wide 16:9, story vertical 9:16)"
3. "É um slide de dados/estatística, texto/insight, diagrama/fluxo, ou visual/imagem?"

### Passo 2 — Ler o design guide

Ler `marca/design-guide.md` pra aplicar as cores e fontes corretas.
Se estiver vazio, usar padrão: fundo escuro, acento amarelo, Bricolage Grotesque.

### Passo 3 — Gerar o HTML

Criar um arquivo HTML único, com dimensões específicas pro formato pedido:
- Card 1:1: 1080x1080px
- Slide 16:9: 1920x1080px
- Story 9:16: 1080x1920px

**Tipos de layout por conteúdo:**

*Dado/estatística:*
- Número em destaque grande (80-120px)
- Label descritivo pequeno abaixo
- Fundo de cor sólida ou gradiente sutil

*Texto/insight:*
- Título em serif italic grande
- Corpo em sans-serif, até 3 frases
- Elemento gráfico de destaque (linha, box, destaque de cor)

*Diagrama/fluxo:*
- SVG inline ou caixas com setas/conexões
- Cores conforme design guide
- Espaçamento claro entre elementos

*Visual/imagem:*
- Espaço para imagem de background (com overlay de cor se necessário)
- Texto em camada sobre a imagem com legibilidade garantida

### Passo 4 — Renderizar e salvar

1. Salvar HTML em `marketing/conteudo/slides/slide-[tema].html`
2. Oferecer renderizar em PNG (via Playwright) se o usuário quiser

---

## Regras

- Responder a proporção correta (não forçar 16:9 num slide quadrado, por exemplo)
- Sempre aplicar cores e fontes do `marca/design-guide.md`
- Se o design guide estiver vazio, usar padrões coerentes (não misturar muitas cores)
- Simplificar a informação — um slide bom comunica uma ideia, não 5
- Usar espaço em branco — não encher o slide
