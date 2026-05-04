---
name: radar-concorrentes
description: Pesquisa o que os concorrentes diretos e indiretos da Michelle estão fazendo no Instagram — temas, formatos, lançamentos e posicionamento. Rodar toda quinta-feira.
---

# /radar-concorrentes

## Contexto

Ler `_contexto/empresa.md` para entender o negócio e o posicionamento da Michelle antes de analisar os concorrentes.

## Concorrentes monitorados

**Diretos:**
- @dann.okane — instagram.com/dann.okane
- @camilarenaux — instagram.com/camilarenaux
- @karol.sabara — instagram.com/karol.sabara
- @cintiasouza.br — instagram.com/cintiasouza.br
- @laratiton — instagram.com/laratiton
- @sarahbrandaoh — instagram.com/sarahbrandaoh
- @blashdesign — instagram.com/blashdesign
- @devolvimeucracha — instagram.com/devolvimeucracha
- @yasmina.m — instagram.com/yasmina.m

**Indiretos:**
- @itsnandamelo — instagram.com/itsnandamelo
- @analuizavasconcelos — instagram.com/analuizavasconcelos
- @camila.tucunduva — instagram.com/camila.tucunduva
- @agabidomingues — instagram.com/agabidomingues
- @gregoryjhickman — instagram.com/gregoryjhickman
- @vinigrevy — instagram.com/vinigrevy

## Workflow

### Passo 1 — Pesquisar cada perfil

Para cada concorrente, fazer duas buscas em paralelo:

**Busca 1 — Google indexado:**
WebSearch com a query: `site:instagram.com/@{handle} OR "@{handle}" instagram posts 2025`

**Busca 2 — Perfil público via Jina:**
WebFetch em `https://r.jina.ai/https://www.instagram.com/{handle}/` para extrair o que o Jina conseguir ler do perfil público.

Se uma das duas fontes não retornar nada útil, usar só a outra. Não travar.

### Passo 2 — Extrair por perfil

Para cada perfil, extrair o que foi possível identificar:

- **Temas:** quais assuntos está abordando nas últimas semanas
- **Formatos:** reels, carrosseis, stories, lives, texto — o que está usando mais
- **Lançamentos:** produto novo, programa, evento, oferta, campanha
- **Posicionamento/mensagem:** ângulo que está empurrando — resultado, método, lifestyle, identidade, autoridade
- **Novidade:** algo que não fazia antes ou que mudou recentemente

Se não houver dados suficientes pra algum campo, colocar "— sem dados" ao invés de inventar.

### Passo 3 — Montar o relatório

Estrutura do relatório:

```
# Radar de Concorrentes — [data]

## Diretos

### @handle
- **Temas:** ...
- **Formatos:** ...
- **Lançamentos:** ...
- **Posicionamento:** ...
- **Novidade:** ...

[repetir para cada direto]

---

## Indiretos

### @handle
- **Temas:** ...
- **Formatos:** ...
- **Lançamentos:** ...
- **Posicionamento:** ...
- **Novidade:** ...

[repetir para cada indireto]

---

## Resumo da semana

[3-5 linhas: o que está em alta no mercado, movimentos relevantes, algo que vale atenção]
```

### Passo 4 — Salvar

Salvar o relatório em:
`pesquisas/concorrentes-YYYY-MM-DD.md`

Confirmar com a Michelle onde o arquivo foi salvo e perguntar se quer abrir ou se tem algum perfil pra investigar mais fundo.

## Regras

- Não inventar dados. Se não encontrou nada num perfil, dizer isso claramente
- Não avaliar se o conteúdo dos concorrentes é bom ou ruim — só descrever o que encontrou
- O resumo final deve ser factual, não uma análise estratégica forçada
- Se o Jina bloquear um perfil, tentar WebFetch direto em `instagram.com/{handle}` como fallback
- Diretos primeiro, indiretos depois — sempre nessa ordem
- Manter o relatório enxuto: uma linha por campo, sem parágrafos longos
