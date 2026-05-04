---
name: prospectar-investimento
description: >
  Detecta empresas que receberam investimento recentemente — sinal de que precisam
  estruturar operação rapidamente. Identifica o decisor e prepara abordagem de contato.
  Ativa com: "empresas que receberam investimento", "sinal de funding", "quem recebeu
  aporte recente", "prospectar por investimento", "empresas recém-financiadas".
---

# /prospectar-investimento — Prospecção por Sinal de Investimento

## Por que funciona para a ED

Empresa que recebe investimento enfrenta pressão imediata para:
- Crescer a equipe rapidamente
- Reportar resultados para investidores
- Estruturar operação que suporte o crescimento

Geralmente o gargalo operacional — que existia antes — agora é urgente. A ED resolve isso antes que o caos escale junto com o time.

---

## Workflow

### Passo 1 — Definir o foco

Se não foi especificado, perguntar:
- "Algum setor específico?"
- "Tamanho de rodada que faz sentido? (seed, série A, série B)"
- "País ou região?"
- "Janela de tempo? (ex: últimos 30 dias)"

---

### Passo 2 — Busca de investimentos recentes

Pesquisar via WebSearch:

```
site:startupi.com.br investimento [setor] [mês/ano]
site:exame.com aporte [setor]
"rodada seed" OR "série A" OR "captação" site:startups.com.br
"received funding" OR "raised" site:techcrunch.com [setor] brasil
```

Para startups brasileiras também verificar:
- Distrito (distrito.me)
- Fintechs, healthtechs, B2B SaaS

Para cada empresa encontrada, extrair:
- Nome da empresa
- Valor captado e tipo de rodada
- Setor
- Data do anúncio
- Site / LinkedIn

---

### Passo 3 — Qualificar

Para cada empresa encontrada:
- Verificar se é B2B ou tem uma operação relevante (não só produto/tecnologia)
- Tamanho atual da equipe (LinkedIn)
- Fit com o ICP da ED

Priorizar:
- **Prioridade 1:** Rodada seed ou série A + equipe de 5-30 pessoas + B2B
- **Prioridade 2:** Série B ou empresa maior — processo de venda mais longo
- **Descarte:** Só produto/tech sem operação de serviço, ou empresa grande demais

---

### Passo 4 — Identificar o decisor

Para cada empresa Prioridade 1:
- Fundador/CEO no LinkedIn
- COO se existir
- Quem está contratando ativamente (vagas abertas = sinal de expansão em curso)

---

### Passo 5 — Rascunhar a abordagem

**Estrutura:**
1. Gancho no investimento (mostrar que acompanhou)
2. O desafio que esse momento cria (operação que precisa escalar junto)
3. O que a ED faz nesse contexto
4. Uma pergunta que abre a conversa

**Exemplo de abordagem:**
```
Vi o anúncio da rodada seed de [empresa] — parabéns.

Esse momento de crescimento acelerado costuma expor um problema clássico: a operação que funcionava para 5 pessoas começa a travar quando vai para 15.

A Essência Digital trabalha com empresas B2B exatamente nessa transição — estruturando processo e implementando as ferramentas certas antes que o caos de crescimento instale. Valeria um papo de 20 minutos?
```

Adaptar sempre ao contexto específico.

---

### Passo 6 — Output e salvar

```markdown
# Prospecção por Investimento — [Data]

## Empresas identificadas: [número]

### Prioridade 1 — Contatar essa semana
| Empresa | Rodada | Setor | Decisor | Canal | Status |
|---|---|---|---|---|---|

### Prioridade 2 — Acompanhar
| Empresa | Rodada | Por que aguardar |
|---|---|---|

## Rascunhos de abordagem
[Um por empresa Prioridade 1]
```

Salvar em: `essencia-digital/prospecção/sinal-investimento-[data].md`

---

## Regras

- Janela ideal para contato: até 2 semanas após o anúncio do investimento
- Gancho tem que referenciar o investimento real, não ser genérico
- Tom: reconhecer o crescimento, não explorar insegurança
- Focar no momento de transição, não no problema — empresas recém-financiadas estão animadas, não em crise
- Se a empresa for de tecnologia pura (produto digital, sem operação de serviço), provavelmente fora do ICP
