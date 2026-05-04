---
name: avoid-ai-writing
description: >
  Audita e reescreve conteúdo para remover padrões de escrita de IA ("AI-isms").
  Use quando pedir "remove AI-isms", "limpa escrita de IA", "edita para soar menos como IA",
  "audita para AI tells", ou "faz esse texto parecer humano".
---

# /avoid-ai-writing — Audit & Rewrite

## O que faz

Remove padrões de escrita gerada por IA que fazem o texto parecer máquina. O resultado é direto, específico, com confiança demonstrada, não apenas afirmada.

---

## Workflow

### Passo 1 — Receber o conteúdo

O usuário fornece um texto (artigo, post, email, proposta, etc).

### Passo 2 — Auditar

Identificar cada AI-ism presente, citando o texto específico. Categorias principais:

**Formatação:**
- Em dashes (—): Máximo 1 por 1.000 palavras
- Bold excessivo: Máximo 1 por seção ou nenhum
- Emoji em headers: Remover entirely
- Listas de bullet pontos: Converter em prosa quando possível

**Estrutura de sentença:**
- "Não é X, é Y": Reescrever como afirmação direta
- Intensificadores vazios: genuine, real, truly, quite frankly, to be honest
- Hedging: perhaps, could potentially, it's important to note that
- Paragrafos desconexos: Adicionar sentenças de transição
- "Regra de três" compulsiva: Variar agrupamentos

**Palavras/frases a remover ou substituir:**
- delve → explore, dig into
- landscape (metáfora) → field, space, industry
- tapestry → descrever a complexidade real
- realm → area, field, domain
- paradigm → model, approach, framework
- embark → start, begin
- robust → strong, reliable, solid
- cutting-edge → latest, newest, advanced
- leverage (verbo) → use
- harness → use, take advantage of
- seamless → smooth, easy
- unleash → release, enable, unlock
- streamline → simplify, speed up
- empower → enable, let, allow
- utilize → use
- serve as → is
- features (verbo) → has
- boasts → has
- presents → is, shows

**Estrutura:**
- Comprimento uniforme de parágrafo: Variar intencionalmente
- Aberturas formulaicas: "In the rapidly evolving world..." → levar com a notícia
- Atribuições vagas: "Experts believe", "Studies show" → citar ou remover
- Conclusões genéricas: "The future looks bright" → cortar ou ser específico
- Frases de preenchimento: "In order to" → "To"; "Due to the fact that" → "Because"
- Artefatos de chatbot: "I hope this helps!", "Feel free to reach out"

**Significância inflacionada:**
- "marking a pivotal moment" → descrever o que aconteceu
- "watershed moment" → "turning point" ou descrever
- "continues to thrive" → citar números ou cortar

**Evitação de cópula:**
- Não usar "serves as", "features", "boasts", "presents" quando "is" ou "has" é mais claro

**Ciclo de sinônimos:**
- Se a mesma palavra aparece 3x no parágrafo e é a palavra certa, manter as 3
- Não forçar variação artificial

**Análises superficiais:**
- Strings de "-ing": "symbolizing", "reflecting", "showcasing" → fatos específicos ou cortar

**Linguagem promocional:**
- "nestled within the breathtaking foothills" → "is a town in X"
- "vibrant hub" → descrição concreta
- "thriving ecosystem" → números ou contexto específico

### Passo 3 — Reescrever

Retornar a versão reescrita completa. Preservar estrutura original, intenção e todos os detalhes técnicos. Mudar apenas o necessário.

### Passo 4 — Apresentar em 4 seções

**1. Issues Found**
Lista de cada AI-ism identificado, com o texto ofensivo citado.

**2. Rewritten Version**
Texto completo reescrito.

**3. What Changed**
Resumo dos edits principais (não palavra por palavra, só mudanças significativas).

**4. Second-Pass Audit**
Releitura da versão reescrita. Identificar AI tells remanescentes. Se limpo, afirmar. Se não, corrigir inline e anotar.

---

## Regras

- Objetivo: texto que pareça escrito por uma pessoa. Direto. Específico. Confiança demonstrada.
- Se o texto já é forte, dizer isso e fazer apenas os cortes necessários
- Não sobre-editar por sobre-editar
- Se a voz natural usa fragmentos ou começa sentença com "And"/"But", manter
- Não remover personalidade ao sanding away da gramática
- Quando duplicar uma palavra é certa, não forçar variação artificial
- Cutoff disclaimers nunca: "While specific details are limited...", "As of my last update" — ou achar a info ou remover o hedge
