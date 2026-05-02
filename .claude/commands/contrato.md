---
name: contrato
description: >
  Gera um contrato de prestação de serviços para Essência Digital ou Quinta Essência.
  Calibrado ao escopo e tom de cada empresa. Sempre gera rascunho para revisão antes de enviar.
  Use quando pedir "faz o contrato pra [cliente]", "contrato de consultoria",
  "contrato do programa QE", "preciso de um contrato para [projeto/serviço]".
---

# /contrato — Contrato de Prestação de Serviços

## Dependências

- **Contexto do negócio:** `_contexto/empresa.md`
- **Tom de voz:** `_contexto/preferencias.md`

---

## Workflow

### Passo 1 — Identificar o tipo de contrato

1. **Para qual empresa?** Essência Digital ou Quinta Essência
2. **Tipo:**
   - ED: consultoria de projeto (escopo fechado)
   - ED: retainer mensal (horas ou entregáveis recorrentes)
   - QE: matrícula no programa (6 meses)
3. **Tem proposta aprovada?** Se sim, usar os dados da proposta para preencher o contrato.

Se faltarem informações críticas (valor, escopo, partes), perguntar antes de gerar.

---

### Passo 2 — Gerar o contrato

**Estrutura padrão (ambas as empresas):**

1. **Partes** — Prestadora: Michelle Miluk / [nome da empresa legal] | Contratante: [cliente]
2. **Objeto** — o que será entregue (escopo específico, sem linguagem vaga)
3. **Prazo** — início, duração, e o que acontece em caso de extensão
4. **Entregáveis** — lista clara do que está incluído
5. **O que NÃO está incluído** — evitar conflito depois
6. **Investimento e forma de pagamento**
7. **Confidencialidade** — informações trocadas são confidenciais por padrão
8. **Propriedade intelectual** — o que a cliente pode usar e o que fica com a Michelle
9. **Rescisão** — condições para cancelar por ambos os lados
10. **Foro e jurisdição** — definir conforme a localização das partes

**Cláusulas específicas por tipo:**

*ED — Projeto fechado:*
- Pagamento: 50% na assinatura + 50% após entrega da Fase 2
- Revisões: quantas estão incluídas
- Prazo de aprovação por fase (ex: 5 dias úteis para feedback)

*ED — Retainer:*
- Escopo mensal (horas ou entregáveis)
- O que não cabe no retainer
- Prazo de aviso para cancelamento (30 dias)

*QE — Programa:*
- Duração: 6 meses a partir da data de início
- Sessões: 6 CIAs mensais de [duração]
- Política de cancelamento de sessões (prazo mínimo de aviso)
- Não há reembolso após início — mas há pausa com aviso de 30 dias
- O conteúdo criado durante o programa (PAPs, documentos) pertence à cliente

**Tom do contrato:**
- Claro e direto — deve poder ser lido por alguém que não é advogado
- Sem linguagem jurídica desnecessária
- Cada cláusula em 1-3 linhas, sem parágrafos longos

---

### Passo 3 — Salvar rascunho e apresentar

Salvar em:
- `essencia-digital/contratos/contrato-[cliente]-[data].md`
- `quinta-essencia/clientes/[cliente]/contrato-qe-[data].md`

Apresentar ao usuário:
```
RASCUNHO SALVO: [caminho]

Partes: Michelle Miluk x [cliente]
Objeto: [1 frase]
Valor: [valor e forma de pagamento]
Prazo: [duração]

Revisar antes de enviar — especialmente cláusulas de rescisão e o que não está incluído.
Quer ajustar algo?
```

---

## Regras

- Nunca inventar valor ou escopo — se não foi fornecido, placeholder claro: `[VALOR]`, `[ESCOPO A DEFINIR]`
- Sempre incluir "o que não está incluído" — evita conflito futuro
- Não enviar ao cliente sem revisão explícita da Michelle
- Se houver proposta aprovada, usar os dados dela como base
- O contrato não é um documento de vendas — não precisa convencer ninguém
