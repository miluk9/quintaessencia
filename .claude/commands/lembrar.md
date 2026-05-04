---
name: lembrar
description: >
  Gerencia lembretes ativos no workspace. Adiciona, lista e remove lembretes
  que aparecem no início de cada conversa.
  Ativa com: "lembra que", "não esquecer de", "me lembra de", "coloca um lembrete",
  "/lembrar", "quero ser lembrada de".
---

# /lembrar — Gerenciar Lembretes

## O que faz

Adiciona, lista ou remove lembretes no arquivo `_contexto/lembretes.md`.
Claude lê esse arquivo no início de cada conversa e avisa sobre o que está ativo.

---

## Uso

### Adicionar lembrete

```
/lembrar [o que lembrar]
/lembrar [o que lembrar] até [data]
/lembrar [o que lembrar] toda semana / todo mês
```

Exemplos:
- `/lembrar atualizar proposta da Carla até sexta`
- `/lembrar postar o carrossel de precificação amanhã`
- `/lembrar verificar métricas dos anúncios toda segunda`

### Remover lembrete

```
/lembrar remover [título ou número]
```

### Listar todos

```
/lembrar listar
```

---

## Workflow

### Passo 1 — Identificar a ação

Determinar se é:
- **Adicionar** → tem "lembra", "não esquecer", "me lembra de"
- **Remover** → tem "remover", "pode tirar", "já fiz", "concluído"
- **Listar** → tem "listar", "quais são", "o que tenho"

---

### Passo 2 — Processar o lembrete

**Ao adicionar:**

Formatar o lembrete com:
- **Título:** resumo em 1 linha
- **Data/prazo:** se informado
- **Recorrência:** se for semanal, mensal ou pontual
- **Contexto:** o que precisa acontecer (1 frase)

Adicionar na seção correta de `_contexto/lembretes.md`:
- Com data → "Lembretes ativos"
- Recorrente → "Lembretes recorrentes"

**Ao remover:**
Mover o lembrete da seção ativa para "Arquivo — Lembretes concluídos" com a data de conclusão.

---

### Passo 3 — Confirmar

```
LEMBRETE ADICIONADO:
[título]
[prazo se houver]

Total de lembretes ativos: [número]
```

---

## Formato do lembrete em `_contexto/lembretes.md`

```markdown
### [Título do lembrete]
- **Prazo:** [data ou "sem prazo"]
- **Recorrência:** [uma vez / semanal / mensal]
- **Contexto:** [o que precisa acontecer]
- **Adicionado em:** [data]
```

---

## Regras

- Não perguntar detalhes desnecessários — se o lembrete for claro, adicionar direto
- Se a data for relativa ("sexta", "semana que vem"), converter para data absoluta
- Não duplicar — verificar se já existe lembrete similar antes de adicionar
- Ao início de cada conversa, se houver lembretes com prazo nos próximos 3 dias, avisar automaticamente
