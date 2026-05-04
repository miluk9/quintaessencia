---
name: definir-icp
description: >
  Define ou refina o ICP (Ideal Customer Profile) da Essência Digital com base
  em clientes reais, padrões de sucesso e critérios de qualificação.
  Gera uma definição concreta para usar em prospecção, qualificação e proposta.
  Ativa com: "define o ICP da ED", "refinando o ICP", "quem é o cliente ideal?",
  "quero ser mais específica sobre quem atendo", "atualiza o perfil de cliente ideal".
---

# /definir-icp — Definição de ICP da Essência Digital

## Dependências

- **Contexto do negócio:** `_contexto/empresa.md`
- **Estratégia:** `_contexto/estrategia.md`

---

## Workflow

### Passo 1 — Levantar contexto

Ler `_contexto/empresa.md` para entender o que já está definido.

Se não houver ICP formalizado, perguntar:

1. "Quais foram os 2-3 clientes que mais deram certo até agora? O que eles tinham em comum?"
2. "Tem algum tipo de empresa que você sabe que não quer mais atender? Por quê?"
3. "Qual é o sinal que faz você ter certeza de que uma empresa vai se beneficiar do seu trabalho?"
4. "Qual o tamanho e perfil de empresa onde sua entrega gera resultado mais rápido?"
5. "Tem um preço mínimo de projeto ou porte mínimo de cliente que faz sentido para a ED?"

---

### Passo 2 — Construir o ICP

Montar a definição em dois blocos: inclusão e exclusão.

**Inclusão (quem encaixa):**

| Dimensão | Critério específico |
|---|---|
| Modelo de negócio | B2B ou B2B2C — vende para outras empresas |
| Tamanho | [definir com base nos exemplos da Michelle] |
| Estágio | Operação existente há pelo menos 2 anos |
| Problema | Crescimento travado por falta de processo, não por falta de demanda |
| Decisor | Fundador ou gestor sênior com autonomia para contratar |
| Sinal de compra | Tentou resolver internamente e não conseguiu |
| Setor | [aberto ou restrito — confirmar com Michelle] |

**Exclusão (quem não encaixa):**

| Motivo de exclusão | Evidência que identifica esse perfil |
|---|---|
| Startup em early stage sem receita | Produto ainda sem PMF, sem clientes pagantes |
| Empresa que quer estratégia, não implementação | Pede "visão" antes de execução |
| Empresa com mais de 200 funcionários | Processo de compra longo, múltiplos decisores |
| Setor que exige regulação específica | [definir se aplicável] |

---

### Passo 3 — Gerar o perfil completo

```markdown
# ICP — Essência Digital | [Data]

## Quem é o cliente ideal

[2-3 frases descrevendo a empresa e o gestor de forma concreta]

## Inclusão — o que precisa ter

| Dimensão | Critério |
|---|---|
[tabela completa]

## Exclusão — o que descarta imediatamente

| Motivo | Como identificar |
|---|---|
[tabela completa]

## Sinais de dor que indicam fit

[Lista de 5-7 sinais concretos que aparecem antes da call — vagas, comunicação pública, reviews, tamanho da equipe]

## Ângulos de entrada que funcionam

[Os 2-3 ganchos que costumam abrir a conversa com esse perfil]

## O que sucesso parece para esse cliente

[O resultado que eles querem em 3-6 meses — em termos deles, não em termos da ED]
```

---

### Passo 4 — Salvar e atualizar

Salvar em: `essencia-digital/icp-[data].md`

Se for uma atualização significativa do ICP, perguntar: "Quer que eu atualize `_contexto/empresa.md` com essa versão?"

---

## Regras

- ICP vago não serve — "empresas em crescimento" não é ICP
- Cada critério de inclusão deve ter uma forma de verificar antes da call
- Exclusões são tão importantes quanto inclusões — economizam tempo e energia
- Basear nos clientes reais que deram certo, não no cliente imaginário ideal
- Atualizar o ICP a cada 3-4 meses ou depois de 3+ clientes novos
