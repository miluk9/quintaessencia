---
name: triagem-conteudo
description: >
  Analisa métricas do Instagram e Meta Ads, pontua cada conteúdo e indica o que
  merece ser aprofundado, replicado ou descartado.
  Use quando colar dados de performance, prints de métricas ou relatórios do Meta.
  Ativa com: "analisa meu conteúdo", "o que está funcionando", "triagem do instagram",
  "me diz o que replicar", "analisa as métricas".
---

# /triagem-conteudo — Triagem de Conteúdo Instagram + Meta

## Dependências

- **Contexto do negócio:** `_contexto/empresa.md`
- **Tom de voz:** `_contexto/preferencias.md`
- **Métricas:** fornecidas pela Michelle (prints, texto, CSV, relatório exportado do Meta)

---

## Workflow

### Passo 1 — Coletar os dados

Se não foram fornecidas métricas, perguntar:

1. "Qual período vamos analisar?"
2. "Os dados são do Instagram orgânico, Meta Ads, ou os dois?"
3. "Cola os dados aqui — pode ser texto, print descrito ou lista de posts com números."

Aceitar qualquer formato: lista manual, texto copiado do Instagram Insights, relatório do Ads Manager, ou descrição livre.

---

### Passo 2 — Mapear o que existe

Para cada post/anúncio identificado, extrair:
- Tema / assunto
- Formato (Reel, carrossel, estático, story)
- Alcance
- Engajamento (curtidas + comentários + salvamentos + compartilhamentos)
- Taxa de engajamento (engajamento ÷ alcance)
- Cliques no perfil ou link (se disponível)
- Custo por resultado (se for anúncio pago)

Se algum dado estiver faltando, trabalhar com o que tem — não travar a análise.

---

### Passo 3 — Pontuar e classificar

Dar uma nota de 1 a 10 para cada conteúdo com base em:

| Critério | Peso |
|---|---|
| Taxa de engajamento | 40% |
| Salvamentos (indicador de valor percebido) | 25% |
| Alcance orgânico (distribuição sem pagar) | 20% |
| Cliques / conversão (se disponível) | 15% |

Classificar cada conteúdo em:
- **🔥 Replicar** — nota ≥ 7,5 — o que funcionou bem e vale repetir com variações
- **📊 Testar** — nota 5 a 7,4 — teve algo interessante mas precisa ajuste
- **🗑️ Descartar padrão** — nota < 5 — não vale replicar no formato atual

---

### Passo 4 — Análise dos padrões

Depois de classificar os conteúdos individuais, identificar padrões transversais:

**Temas que funcionam:**
Quais assuntos geraram mais engajamento? Posicionamento, implementação, mercado europeu, bastidores?

**Formatos que funcionam:**
Reels performam mais que carrosséis? Stories convertem mais? Qual duração de vídeo tem melhor retenção?

**Horários e dias:**
Se os dados incluírem isso, identificar padrões de quando o conteúdo performa melhor.

**O que não está funcionando:**
Temas ou formatos consistentemente abaixo da média.

---

### Passo 5 — Recomendações

Entregar três blocos:

**01. REPLICAR AGORA**
Lista dos 2-3 conteúdos com maior potencial de replicação + ângulo sugerido para a próxima versão.

**02. TESTAR NO PRÓXIMO CICLO**
Hipóteses a testar — formato diferente, hook diferente, tema adjacente.

**03. PARAR DE FAZER**
O que está consumindo energia sem retorno. Direto, sem rodeio.

---

### Passo 6 — Salvar

Salvar análise em:
`marketing/conteudo/triagens/triagem-[plataforma]-[período]-[data].md`

Apresentar confirmação:
```
TRIAGEM SALVA: triagem-[plataforma]-[período]-[data].md

Período: [datas]
Conteúdos analisados: [número]
🔥 Replicar: [número]
📊 Testar: [número]
🗑️ Descartar: [número]

Padrão principal identificado: [1 frase]
```

---

## Regras

- Não elogiar conteúdo fraco para ser gentil — a análise precisa ser honesta
- Recomendações devem ser ações concretas, não sugestões vagas ("postar mais reels" não é recomendação)
- Se os dados forem insuficientes para conclusões sólidas, dizer isso claramente antes de especular
- Usar linguagem de resultado, não de teoria de marketing ("esse formato gerou 3x mais salvamentos" > "conteúdo educacional tende a performar bem")
- Sempre conectar recomendações ao contexto atual: Quinta Essência ou posicionamento de Michelle
