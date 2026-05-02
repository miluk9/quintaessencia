---
name: pos-reuniao-ed
description: >
  Gera diagnóstico e plano de ação após uma reunião com cliente da Essência Digital.
  Salva o rascunho localmente; só vai ao Notion com aprovação da Michelle.
  Use quando pedir "documenta a reunião com [empresa]", "faz o diagnóstico de hoje",
  "pós-reunião ED", ou passar notas brutas de uma call com cliente B2B.
---

# /pos-reuniao-ed — Pós-Reunião Essência Digital

## Dependências

- **Contexto do negócio:** `_contexto/empresa.md`
- **Tom de voz:** `_contexto/preferencias.md`
- **Notas da reunião:** fornecidas pela Michelle (Granola, texto livre, ou arquivo)

---

## Workflow

### Passo 1 — Coletar as informações da reunião

Se não foram fornecidas, perguntar:

1. "Qual é o nome da empresa e da pessoa com quem você conversou?"
2. "Era uma primeira reunião, reunião de diagnóstico ou acompanhamento?"
3. "Tem notas da call? (Granola, pontos que lembra, ou arquivo)"

Se as notas forem fragmentadas, extrair o que der e prosseguir sem pedir para repetir tudo.

---

### Passo 2 — Gerar o documento pós-reunião

**Estrutura:**

**01. Contexto da empresa**
Quem são, o que fazem, tamanho aproximado do time, ferramentas que usam. Tirar das notas da call.

**02. O problema principal**
O que está travado no dia a dia operacional. Em palavras concretas, não em jargão de consultoria. Um problema central + problemas secundários se existirem.

**03. O que a Michelle identificou**
Diagnóstico dela: o que está por trás do problema relatado. A causa raiz, não o sintoma. Pode diferir do que o cliente disse.

**04. Processos prioritários para mapear**
Lista dos processos que precisam ser documentados e potencialmente automatizados. Em ordem de impacto.

**05. Próximos passos acordados**
O que ficou combinado na reunião.
- [ ] Ação — responsável — prazo
- [ ] Ação — responsável — prazo

**06. Observações para a proposta / projeto**
O que precisa constar na proposta se for avançar: escopo, restrições, o que o cliente valoriza, o que pode ser obstáculo.

**Tom:** documento interno de trabalho. Direto, sem floreio. A Michelle deve conseguir ler e saber exatamente o que fazer.

---

### Passo 3 — Salvar e apresentar rascunho

Salvar em:
- `essencia-digital/clientes/[nome-empresa]/reuniao-[data].md`

Apresentar ao usuário:
```
RASCUNHO SALVO: essencia-digital/clientes/[empresa]/reuniao-[data].md

Empresa: [nome]
Problema central: [1 frase]
Processos prioritários: [quantidade] identificados
Próximos passos: [quantidade] ações

Quer ajustar algo?
Se estiver certo, posso salvar no Notion ou gerar a proposta com /proposta-ed.
```

Só salvar no Notion após aprovação explícita.

---

### Passo 4 — Salvar no Notion (apenas se aprovado)

Criar página no Notion na pasta do cliente correspondente.
Confirmar ao usuário: "Salvo no Notion. [link]"

---

## Regras

- Não inventar diagnóstico — se as notas não deixam claro, perguntar antes de escrever
- O diagnóstico da Michelle pode (e deve) ir além do que o cliente relatou — é o valor dela
- Próximos passos: ações concretas com responsável, não intenções genéricas
- Nunca enviar ao Notion sem aprovação da Michelle primeiro
- Se houver informação suficiente para gerar uma proposta, oferecer: "Quer que eu já gere o /proposta-ed com esse diagnóstico?"
