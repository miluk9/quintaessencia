---
name: proposta-ed
description: >
  Gera uma proposta comercial da Essência Digital em HTML a partir de um briefing em texto livre.
  Aplica identidade visual ED e tom B2B calibrado ao contexto europeu.
  Use quando pedir "faz uma proposta pra [cliente]", "proposta ED", "orçamento pra empresa",
  "proposta de consultoria", ou descrever um cliente B2B com gargalo operacional.
---

# /proposta-ed — Proposta Comercial Essência Digital

## Dependências

- **Identidade visual:** `marca/design-guide.md`
- **Contexto do negócio:** `_contexto/empresa.md`
- **Tom de voz:** `_contexto/preferencias.md`

---

## Workflow

### Passo 1 — Coletar o briefing

Se o usuário não forneceu o suficiente, perguntar apenas o que falta:

1. "Nome do cliente e empresa?"
2. "Qual é o problema principal que eles têm? (pode ser bagunçado, eu organizo)"
3. "Qual é o escopo do trabalho? (automação, IA, estrutura operacional, ou ainda a definir)"
4. "Tem valor ou pacote em mente?"
5. "Prazo ou urgência específica?"

Se o contexto já foi dado de forma livre, extrair o que der e prosseguir sem perguntar tudo.

---

### Passo 2 — Ler arquivos de contexto

- Ler `marca/design-guide.md` para aplicar a identidade visual da Essência Digital
- Usar logo `marca/logo-essencia-digital.png` se disponível no header

---

### Passo 3 — Gerar o HTML

**Estrutura da proposta:**

1. **Header** — logo ED + data + nome do cliente
2. **O problema** — o desafio que o cliente enfrenta, em 2-3 parágrafos na perspectiva deles. Nomear o problema real, não o sintoma. Sem linguagem corporativa.
3. **Objetivos** — 3 objetivos claros e mensuráveis do projeto
4. **Como funciona** — 3 fases:
   - Fase 1: Diagnóstico (mapear processos, identificar gargalos reais, entender o time)
   - Fase 2: Implementação (estrutura, automações, IA conforme o cliente)
   - Fase 3: Transferência (documentação, treinamento, handover funcional)
5. **Pacotes / Investimento** — valor em destaque, com contexto de ROI quando possível:
   - Automação: £350 por automação (processo mapeado + implementado + testado)
   - Agente de IA: £700 por agente (configurado, treinado, integrado)
   - Formato adaptável: pacote fechado, retainer mensal, ou projeto sob medida
   - Pagamento: 50% no início + 50% após aprovação da Fase 2
6. **Sobre Michelle** — usar sempre esta bio calibrada:
   > "Michelle Miluk tem 15+ anos de experiência construindo e escalando negócios na Europa. Fundadora da Essência Digital, entra em negócios B2B, identifica onde está o gargalo operacional e implementa soluções que funcionam: estrutura, automação e IA. Sem fórmula genérica, sem consultoria que entrega deck e some."
7. **Próximos passos** — CTA direto (responder, agendar chamada, assinar)
8. **Políticas** — pagamento, NDA se aplicável, o que não está incluído

**Estilo visual:**
- Identidade Essência Digital do `marca/design-guide.md`
- Fundo Vinho (#541138) no header
- Fallback (sem design guide): fundo branco, texto escuro, acento Vinho #541138
- Layout de uma coluna, limpo, sem scroll horizontal
- Valor em destaque visual, não enterrado no texto
- Tipografia: Playfair Display (títulos) + Raleway (corpo)

---

### Passo 4 — Salvar e apresentar

Salvar em `essencia-digital/propostas/proposta-[nome-cliente]-[data].html`

Apresentar ao usuário:
```
SALVO: essencia-digital/propostas/proposta-[nome-cliente]-[data].html

Cliente: [nome]
Problema identificado: [1 frase]
Escopo: [o que está incluído]
Valor: [valor total ou estrutura de pacotes]
CTA proposto: [próximo passo]

Quer ajustar alguma seção?
```

Só mencionar Notion se o usuário pedir explicitamente.

---

## Regras

- Tom B2B não significa formal — significa direto e preciso
- Nunca inventar valor, prazo ou escopo — usar placeholder claro: `[VALOR A DEFINIR]`
- A proposta deve soar como veio de alguém que entende o problema, não de um template
- Sem jargão vazio: "soluções inovadoras", "entregamos valor", "transformação digital"
- Bio da Michelle: sempre usar a versão acima (15+ anos Europa, sem coach, sem guru)
- Nunca chamar Michelle de "mentora", "coach" ou similar
- O cliente deve se reconhecer no problema antes de chegar ao preço
- Não salvar no Notion até o usuário pedir
