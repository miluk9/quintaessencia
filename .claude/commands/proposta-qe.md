---
name: proposta-qe
description: >
  Gera uma apresentação/proposta do programa Quinta Essência para uma potencial cliente,
  personalizada com o diagnóstico dela. Calibrada para não soar como pitch genérico.
  Use quando pedir "faz a proposta do QE pra [cliente]", "manda a apresentação do programa",
  "preciso de um documento pra fechar [cliente]", ou após uma sessão de diagnóstico.
---

# /proposta-qe — Apresentação do Programa Quinta Essência

## Dependências

- **Identidade visual:** `marca/design-guide.md`
- **Contexto do negócio:** `_contexto/empresa.md`
- **Tom de voz:** `_contexto/preferencias.md`

---

## Workflow

### Passo 1 — Coletar contexto da cliente

Se não foi fornecido, perguntar apenas o que falta:

1. "Nome da cliente?"
2. "Qual é o negócio dela e onde está travada?"
3. "O que ela quer construir no mercado europeu?"
4. "Já tiveram uma conversa ou sessão? O que foi discutido?"
5. "Valor do investimento a apresentar?"

Se o contexto já existe (ex: depois de /pos-reuniao-qe ou conversa anterior), usar diretamente sem perguntar tudo.

---

### Passo 2 — Gerar o documento

**Estrutura:**

1. **Abertura personalizada** — "[Nome], aqui está o que discutimos e o que proponho." Direto, sem protocolo corporativo.
2. **O que eu vi** — diagnóstico breve do negócio dela, com as palavras exatas que ela usou. Mostrar que foi ouvida.
3. **O que o programa resolve** — conectar os gargalos identificados com o que o QE entrega. Não listar tudo, só o que é relevante para ela.
4. **Como funciona** — versão enxuta:
   - 6 meses, 1 sessão individual por mês (CIA)
   - Plano de ação personalizado a cada sessão (PAP)
   - 4 engrenagens trabalhadas: Produto, Marketing, Comercial, Gestão
   - Acesso direto à Michelle
5. **O que ela vai ter em 6 meses** — resultados concretos e realistas para o negócio dela, nunca genéricos
6. **Investimento** — valor + forma de pagamento
7. **Sobre Michelle** — bio calibrada:
   > "Michelle Miluk tem 15+ anos construindo negócios na Europa. O Quinta Essência não é teoria sobre o mercado europeu: é o que ela vive e aplica todos os dias. Você aprende o que funciona, no tempo que você tem, no negócio que você tem."
8. **Próximo passo** — CTA simples: responder confirmando, agendar chamada de fechamento, ou assinar

**Formato:** HTML por padrão. Perguntar se a Michelle prefere Markdown (para colar no WhatsApp ou email) antes de gerar.

**Estilo visual (se HTML):**
- Identidade Quinta Essência do `marca/design-guide.md`
- Fundo claro: Off-White #F5F0E8 ou Linho #E4DDD0
- Tipografia: Playfair Display (títulos) + Raleway (corpo)
- Sem formatação corporativa pesada

---

### Passo 3 — Salvar e apresentar

Salvar em `quinta-essencia/clientes/[nome-cliente]/proposta-qe-[data].html`

Mostrar ao usuário:
```
SALVO: quinta-essencia/clientes/[nome]/proposta-qe-[data].html

Cliente: [nome]
Diagnóstico apresentado: [1-2 frases]
Foco personalizado para ela: [o que foi destacado]
Valor apresentado: [valor]

Quer ajustar antes de enviar?
```

---

## Regras

- Tom: conversa entre iguais, não pitch de vendas
- Nunca usar: "transforme sua vida", "realize seu sonho", "mentoria que muda tudo"
- Nunca chamar Michelle de "mentora" ou "coach"
- O diagnóstico deve usar as palavras da cliente, não uma interpretação externa
- Resultados: realistas e específicos para o negócio dela, nunca genéricos
- A proposta deve parecer feita para essa cliente específica, não um template com nome trocado
- Não salvar no Notion até o usuário pedir
