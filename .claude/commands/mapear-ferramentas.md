---
name: mapear-ferramentas
description: >
  Mapeia as ferramentas que um prospect ou cliente usa — CRM, automação, comunicação,
  financeiro, operação — usando sinais públicos. Útil antes de uma proposta ED para
  entender o stack atual e identificar o que substituir ou integrar.
  Ativa com: "que ferramentas essa empresa usa", "mapeia o stack de [empresa]",
  "o que eles provavelmente usam", "descobre as ferramentas de [empresa]".
---

# /mapear-ferramentas — Mapeamento de Stack Tecnológico

## Dependências

- **Contexto do negócio:** `_contexto/empresa.md`

---

## Workflow

### Passo 1 — Receber o alvo

Perguntar se não foi informado:
- "Qual empresa quer mapear?"
- "Tem o site ou LinkedIn deles?"

---

### Passo 2 — Análise via sinais públicos

Investigar usando WebFetch e WebSearch:

**Site da empresa:**
- Scripts e pixels no código-fonte (ex: HubSpot, Google Tag Manager, RD Station, ActiveCampaign)
- Chat ao vivo (Intercom, Zendesk, Crisp)
- Formulários (Typeform, JotForm, HubSpot Forms)

**LinkedIn da empresa:**
- Vagas abertas — ferramentas mencionadas nas descrições de cargo
- Tecnologias listadas na página da empresa

**Busca pública:**
- `site:linkedin.com/jobs [empresa] AND (CRM OR HubSpot OR Salesforce OR RD Station)`
- `"[empresa]" + "usa" + ferramentas` no Google
- Casos de uso publicados por ferramentas (HubSpot, Pipedrive, Monday etc.)

**Registros DNS (quando aplicável):**
- SPF/DKIM revelam provedores de email (Google Workspace, Microsoft 365, SendGrid)
- CNAMEs revelam ferramentas de marketing

---

### Passo 3 — Classificar por categoria

```markdown
# Stack Tecnológico — [Empresa] | [Data]

## CRM / Comercial
[ferramenta identificada ou "não identificado"]
Confiança: alta / média / baixa
Fonte: [onde encontrou]

## Automação / Marketing
[ferramenta identificada ou "não identificado"]
Confiança: alta / média / baixa

## Comunicação interna
[Slack / Teams / email / não identificado]

## Gestão de projetos / tarefas
[Monday / Asana / Notion / Trello / não identificado]

## Financeiro / ERP
[identificado ou não identificado]

## Atendimento ao cliente
[identificado ou não identificado]

## Outros sinais relevantes
[qualquer ferramenta identificada fora das categorias acima]
```

---

### Passo 4 — Implicações para a proposta ED

Com base no stack identificado:

- **O que está faltando:** ferramentas-chave que empresas desse perfil normalmente têm e não apareceram
- **O que provavelmente está mal integrado:** combinações de ferramentas que raramente conversam bem sem customização
- **Ângulo de entrada para a ED:** o que seria mais fácil de propor como primeira implementação

---

### Passo 5 — Salvar

`essencia-digital/clientes/[empresa]/stack-ferramentas-[data].md`

---

## Regras

- Não inventar ferramentas sem fonte identificável — indicar sempre a origem do dado
- Confiança "alta" só para sinais diretos (código do site, vaga com nome da ferramenta)
- Confiança "média" para inferências (empresa do tamanho X geralmente usa Y)
- Se não encontrar nada, dizer claramente em vez de especular
- Conectar os achados ao contexto de implementação da ED, não só listar ferramentas
