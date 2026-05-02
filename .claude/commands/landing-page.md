---
name: landing-page
description: >
  Gera uma landing page HTML completa para Quinta Essência ou Essência Digital.
  Aplica a identidade visual correta e calibra o copy ao objetivo da página.
  Use quando pedir "faz uma landing page pra", "página de vendas do QE", "página do programa",
  "cria uma página pra [produto/serviço]", "preciso de uma página de captação".
---

# /landing-page — Landing Page HTML

## Dependências

- **Identidade visual:** `marca/design-guide.md`
- **Contexto do negócio:** `_contexto/empresa.md`
- **Tom de voz:** `_contexto/preferencias.md`

---

## Workflow

### Passo 1 — Identificar tipo e objetivo

Antes de qualquer coisa, identificar:

1. **Para qual empresa?** Quinta Essência ou Essência Digital
2. **Tipo de página:**
   - Vendas de programa (QE alto ticket)
   - Captação de leads / lead magnet
   - Low ticket / produto de entrada
   - Consultoria B2B (ED)
   - Página de obrigado / confirmação
3. **O que a pessoa vai fazer na página?** (comprar, preencher formulário, agendar, baixar)
4. **Tem copy ou briefing de conteúdo?** Se não, perguntar antes de gerar.

---

### Passo 2 — Coletar o briefing de copy

Se o conteúdo não foi fornecido, perguntar:

1. "Qual é o produto ou oferta?"
2. "Quem é a pessoa que vai chegar nessa página? O que ela está sentindo nesse momento?"
3. "Qual é a principal promessa/transformação?"
4. "Tem preço, prazo ou bônus que precisam aparecer?"
5. "Tem depoimentos ou prova social para incluir?"

---

### Passo 3 — Gerar o HTML

**Estrutura padrão de landing page de vendas (adaptável por tipo):**

1. **Hero** — headline principal + subheadline + CTA imediato
2. **Problema** — o que a pessoa está vivendo agora (espelho emocional sem drama excessivo)
3. **Solução** — o que o produto/programa resolve e como
4. **Como funciona** — o que está incluído, em formato visual (lista ou cards)
5. **Para quem é** — perfil ideal + perfil que não serve (honestidade cria credibilidade)
6. **Resultados / Depoimentos** — prova social ou resultados concretos (se disponível)
7. **Investimento** — valor em destaque, formas de pagamento, o que a pessoa ganha
8. **Sobre Michelle** — bio calibrada conforme a empresa:

   *QE:*
   > "Michelle Miluk tem 15+ anos de experiência construindo negócios no mercado europeu. O Quinta Essência não é teoria — é o que ela aplica e vive todos os dias."

   *ED:*
   > "Michelle Miluk tem 15+ anos construindo e escalando negócios na Europa. Fundadora da Essência Digital, entra em negócios B2B e implementa estrutura, automação e IA — sem consultoria que entrega deck e some."

9. **FAQ** — 4-6 perguntas reais, respostas diretas
10. **CTA final** — repetir o botão de ação com senso de clareza (sem urgência artificial)

**Regras de copy na página:**
- Headline: específica, sem clickbait, sem "transforme sua vida"
- Nenhuma frase que poderia ser de qualquer coach ou curso online
- Sem contagem regressiva falsa ou vagas limitadas artificiais
- Europeus decidem com critério, não com pressão

**Estilo visual:**

*Quinta Essência:*
- Paleta: Off-White #F5F0E8 como fundo, Terra #6B4629 como acento, Bosque #3E5936 para CTA
- Tipografia: Playfair Display (h1/h2) + Raleway (corpo, weight 300-400)
- Visual: limpo, espaçado, sem excesso de elementos

*Essência Digital:*
- Paleta: Vinho #541138 no header/hero, Off-White no corpo, texto escuro
- Tipografia: mesma família
- Visual: mais direto, menos ornamental

**Inline CSS.** Google Fonts como única dependência externa. Responsivo.

---

### Passo 4 — Salvar e apresentar

Salvar em:
- `quinta-essencia/sites/[nome-pagina]/index.html` (para QE)
- `essencia-digital/sites/[nome-pagina]/index.html` (para ED)

Apresentar ao usuário:
```
SALVO: [caminho do arquivo]

Estrutura gerada:
- Hero: [headline usada]
- Tipo: [tipo da página]
- CTA principal: [o que o botão faz]

Para publicar: /publicar-site [caminho]
Quer ajustar algo antes?
```

---

## Regras

- Nunca gerar página sem ter o briefing mínimo (produto + público + promessa)
- Placeholders claros para o que não foi fornecido: `[DEPOIMENTO A ADICIONAR]`, `[PREÇO]`
- Bio da Michelle: sempre usar a versão calibrada acima (nunca "mentora dos sonhos")
- Copy: soar como uma pessoa que entende o problema, não como funil de guru americano
- Não salvar no Notion nem publicar sem aprovação
