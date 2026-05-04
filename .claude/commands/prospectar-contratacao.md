---
name: prospectar-contratacao
description: >
  Detecta empresas que estão contratando para cargos operacionais — sinal de que
  têm o problema que a Essência Digital resolve. Identifica o decisor e prepara
  a abordagem de contato.
  Ativa com: "empresas contratando para ops", "sinal de contratação", "quem está
  contratando [cargo]", "prospectar por vaga", "detecta oportunidades por job posting".
---

# /prospectar-contratacao — Prospecção por Sinal de Contratação

## Por que funciona para a ED

Quando uma empresa posta vaga para "coordenador de operações", "analista de processos", "head de operações" ou qualquer cargo similar, ela já:
- Reconheceu que tem um problema operacional
- Alocou orçamento para resolver
- Está no momento certo para ouvir uma alternativa

A ED chega antes do processo de contratação concluir, com uma proposta mais rápida e específica.

---

## Workflow

### Passo 1 — Definir o alvo

Se não foi especificado, perguntar:
- "Qual tipo de vaga quer monitorar? (ex: coordenador de operações, analista de processos, COO, etc.)"
- "Algum setor ou tamanho de empresa específico?"
- "Quer pesquisar agora ou montar uma lista para acompanhar?"

---

### Passo 2 — Busca de vagas

Pesquisar via WebSearch:

```
site:linkedin.com/jobs "coordenador de operações" OR "analista de processos" OR "head de operações"
site:linkedin.com/jobs "estruturar processos" OR "implementar processos"
site:gupy.io "operações" "processos"
```

Para cada vaga encontrada, extrair:
- Nome da empresa
- Cargo
- O que a descrição da vaga diz sobre o problema (geralmente está implícito nas responsabilidades)
- Data de postagem
- LinkedIn da empresa

---

### Passo 3 — Qualificar as empresas

Para cada empresa encontrada, verificar rapidamente:
- Tamanho (LinkedIn — número de funcionários)
- Setor e modelo de negócio
- Fit com o ICP da ED (ver `/auditoria-icp` para análise completa)

Classificar em:
- **Prioridade 1:** Vaga postada há menos de 7 dias + empresa encaixa no ICP
- **Prioridade 2:** Vaga mais antiga ou encaixe parcial
- **Descarte:** Empresa grande demais, sem fit, ou setor fora do escopo

---

### Passo 4 — Identificar o decisor

Para cada empresa Prioridade 1:
- Buscar no LinkedIn: fundador, CEO, COO, gerente geral
- Identificar quem provavelmente tomaria a decisão de contratar a ED
- Verificar se têm perfil ativo (postagens recentes)

---

### Passo 5 — Rascunhar a abordagem

Para cada prospect qualificado, gerar mensagem de primeiro contato:

**Estrutura:**
1. Gancho na vaga (mostrar que pesquisou)
2. A alternativa que a ED oferece (mais rápido, mais específico, resultado garantido)
3. Uma pergunta que abre a conversa

**Exemplo de abordagem LinkedIn:**
```
Vi que vocês estão buscando alguém para estruturar operações em [empresa].

Esse tipo de contratação costuma demorar 3-6 meses entre processo seletivo e onboarding — e a pessoa ainda precisa de tempo para entender o negócio.

A Essência Digital entra nisso em semanas, com foco direto no gargalo. Posso te mostrar como funciona em 20 minutos?
```

Adaptar sempre para o contexto específico da empresa.

---

### Passo 6 — Output e salvar

```markdown
# Prospecção por Contratação — [Data]

## Vagas monitoradas: [número]

### Prioridade 1 — Contatar essa semana
| Empresa | Vaga | Decisor | Canal | Status |
|---|---|---|---|---|

### Prioridade 2 — Acompanhar
| Empresa | Vaga | Por que aguardar |
|---|---|---|

### Descartados
[Lista rápida com motivo]

## Rascunhos de abordagem
[Um por empresa Prioridade 1]
```

Salvar em: `essencia-digital/prospecção/sinal-contratacao-[data].md`

---

## Regras

- Gancho tem que ser específico — mencionar a vaga real, não ser genérico
- Não mandar a mesma mensagem para todos — adaptar ao contexto de cada empresa
- Janela ideal para contato: até 7 dias após a postagem da vaga
- Se a vaga for antiga (30+ dias), a empresa pode ter contratado — verificar antes de abordar
- Tom: direto, sem introdução longa, com ângulo de solução imediata
