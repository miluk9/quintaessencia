# Claude OS — Skills do Projeto

## Como funcionam as skills

As skills aqui neste workspace são instruções detalhadas que ensinam Claude como executar tarefas repetíveis do seu negócio.

Cada skill está em seu próprio diretório com um arquivo `SKILL.md` que descreve:
- **name:** nome da skill (como você vai chamar)
- **description:** quando usar (Claude lê isso pra decidir se chama a skill)
- **Workflow:** instruções passo a passo
- **Regras:** restrições e boas práticas

---

## Skills disponíveis

### 1. `/proposta-comercial`
Gera uma proposta comercial profissional em HTML com sua identidade visual.

**Quando chamar:**
- "Faz uma proposta pra esse cliente"
- "Preciso de um orçamento em HTML"
- "Cria um documento de venda"

**Resultado:** arquivo HTML salvo em `propostas/`

---

### 2. `/carrossel`
Cria carrosséis completos para Instagram e TikTok com seus designs e tom de voz.

**Quando chamar:**
- "Faz um carrossel sobre..."
- "Transforma isso em slides pro Insta"
- "Cria um carousel"

**Resultado:** Slides em HTML + PNGs salvos em `conteudo/carrosseis/`

---

### 3. `/slide`
Cria um slide ou card visual único em HTML pra apresentações ou posts.

**Quando chamar:**
- "Faz um slide sobre..."
- "Cria um card visual"
- "Quero um frame pro deck"

**Resultado:** arquivo HTML em `marketing/conteudo/slides/`

---

### 4. `/email-profissional`
Rascunha emails calibrados ao destinatário e objetivo.

**Quando chamar:**
- "Escreve um email pra esse cliente"
- "Como eu respondo essa mensagem?"
- "Faz um email de cobrança"

**Resultado:** email pronto pra copiar/colar

---

### 5. `/roteiro-post`
Transforma ideias em roteiros de conteúdo pra redes sociais, vídeos ou newsletters.

**Quando chamar:**
- "Faz um roteiro de post"
- "Transforma esse artigo em thread"
- "Cria um script de vídeo curto"

**Resultado:** roteiro salvo em `conteudo/roteiros/`

---

### 6. `/publicar-site`
Publica um arquivo HTML no Cloudflare Pages e gera um link compartilhável.

**Quando chamar:**
- "Publica essa proposta"
- "Coloca esse HTML no ar"
- "Quero um link público pra esse arquivo"

**Pré-requisito:** configurar `.env` com credenciais do Cloudflare (na primeira vez, Claude guia)

**Resultado:** link HTTPS público

---

### 7. `/analisar-dados`
Analisa arquivos (CSV, Excel, JSON) e gera resumo executivo com insights.

**Quando chamar:**
- "Analisa esse relatório"
- "O que mostram esses dados?"
- Arrastar um arquivo CSV/XLSX

**Resultado:** análise em prosa salva em `estudos/`

---

### 8. `/avoid-ai-writing`
Audita e reescreve conteúdo para remover padrões de escrita de IA ("AI-isms").

**Quando chamar:**
- "Remove os AI-isms desse texto"
- "Limpa essa escrita de IA"
- "Faz parecer menos como IA"
- "Audita para AI tells"

**Resultado:** conteúdo reescrito + relatório de mudanças

---

### 9. `/killer-scripter`
Escreve scripts de YouTube, Reels, Shorts e carousels que soam como conversa real e genuína.

**Quando chamar:**
- "Escreve um script pra mim"
- "Faz um script de reel"
- "Roteiro de YouTube"
- "Cria um carousel"
- "Turn this idea into a script"

**Resultado:** script pronto pra gravar, com hooks, ritmo e estrutura

---

## Como usar

Basta mencionar o que você quer. Claude vai entender quando chamar cada skill baseado na descrição.

**Exemplos:**
- "Faz uma proposta pra XYZ Consultoria" → chama `/proposta-comercial`
- "Cria um carrossel sobre produtividade" → chama `/carrossel`
- "Analisa esse arquivo de vendas" → chama `/analisar-dados`

---

## Adicionando novas skills

Se quiser criar uma skill nova:

1. Crie uma pasta em `.claude/skills/nome-da-skill/`
2. Dentro dela, crie um arquivo `SKILL.md` com:
   - Cabeçalho YAML (name, description)
   - Instruções detalhadas do workflow
   - Regras a seguir

3. Chame Claude: "Cria uma skill que [descrição do que faz]"

As skills melhores têm:
- Descrição clara (pra Claude saber quando chamar)
- Dependências explícitas (quais arquivos/pastas precisa ler)
- Workflow em passos (não tudo de uma vez)
- Checkpoints (momentos pra o usuário revisar)
- Regras (o que fazer e o que evitar)

---

## Estrutura

```
.claude/
  skills/
    proposta-comercial/
      SKILL.md
    carrossel/
      SKILL.md
    email-profissional/
      SKILL.md
    publicar-site/
      SKILL.md
    roteiro-post/
      SKILL.md
    slide/
      SKILL.md
    analisar-dados/
      SKILL.md
    avoid-ai-writing/
      SKILL.md
    killer-scripter/
      SKILL.md
  commands/
    (comandos customizados com / se houver)
```

---

## Dica importante

Todas as skills **leem seus arquivos de contexto** (`_contexto/empresa.md`, `_contexto/preferencias.md`, `marca/design-guide.md`) pra personalizar o resultado. Quanto melhor preenchidos esses arquivos, melhor saem as skills.
