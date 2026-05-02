# Michelle Miluk — Claude Code OS

## O que é esse workspace

Workspace central de Michelle Miluk, onde rodam as duas empresas: **Quinta Essência** (programa de aceleração para brasileiros que querem vender pro mercado europeu) e **Essência Digital** (consultoria B2B de implementação operacional e IA).

**Estrutura de pastas:**
- `quinta-essencia/` — aulas, clientes, materiais, campanhas e sites do programa
- `essencia-digital/` — clientes, propostas, contratos e projetos de consultoria
- `marketing/` — conteúdo, scripts, newsletters e redes sociais
- `dados/` — drop zone para arquivos a analisar (CSV, XLSX, PDF, TXT)
- `marca/` — identidade visual, logos e design guide
- `_contexto/` — empresa, preferências e estratégia (memória do sistema)
- `templates/skills/` — templates de skills prontos para personalizar com /mapear
- `templates/ferramentas/catalogo.md` — APIs e ferramentas disponíveis para usar em skills

## Sobre o negócio

Michelle é fundadora de duas empresas complementares, opera solo e toca tudo. A Quinta Essência ensina brasileiros a estruturar e vender no mercado europeu, com foco em execução rápida e resultado financeiro em curto prazo. A Essência Digital entra em empresas B2B, identifica gargalos operacionais e implementa estrutura, automação e IA para o negócio funcionar sem depender do dono.

## O que mais fazemos aqui

- Scripts e slides de aula (Quinta Essência)
- Propostas comerciais e contratos (Essência Digital)
- Sites e landing pages (HTML / Framer / Hostinger)
- Funis de vendas completos (quiz funnels, low ticket, high ticket)
- Newsletters e e-mails de broadcast
- Conteúdo para Instagram, LinkedIn, TikTok, Threads e YouTube
- How-to guides e documentos pós-sessão estratégica
- Research e briefing pré-call de clientes B2B
- Automações e scripts de workflow
- Análise de dados de clientes e campanhas

## Clientes e contexto

Duas frentes: B2C via Quinta Essência (brasileiras que querem vender pro mercado europeu) e B2B via Essência Digital (empresas com gargalo operacional que precisam de implementação, não de conselho). Michelle atende clientes externos em ambas.

## Tom de voz

Direta. Sem introdução desnecessária. Entra no ponto. Experiência real, não teoria copiada. Respeita a inteligência de quem lê. Segunda pessoa ("você"), mas sem intimidade forçada. Ver `_contexto/preferencias.md` para lista completa do que evitar.

## Ferramentas conectadas

Gmail · Google Calendar · Notion · Google Docs · Canva · Framer · Hostinger · WhatsApp · Granola · Google Meet · Instagram · LinkedIn · TikTok · Threads

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (se existirem e estiverem configurados):

1. `_contexto/empresa.md` — quem é a Michelle, o que faz, como funcionam as duas empresas
2. `_contexto/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_contexto/estrategia.md` — foco atual, prioridades, o que pode esperar

Usar essas informações como base para qualquer resposta ou decisão. Ao sugerir prioridades, formatos ou abordagens, considerar o foco atual descrito em `estrategia.md`.

Para qualquer tarefa visual (carrossel, proposta, slide, landing page), consultar `marca/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe uma skill relevante em `.claude/skills/` ou `.claude/commands/`.
Se encontrar, seguir as instruções da skill.
Se não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível, perguntar:

> "Isso pode virar uma skill para a próxima vez. Quer que eu crie?"

Não perguntar para tarefas pontuais ou perguntas simples. Só quando o padrão de repetição for claro.

---

## Aprender com correções

Quando a Michelle corrigir algo, melhorar uma resposta ou dar uma instrução que parece permanente (frases como "na verdade é assim", "não faça mais isso", "prefiro assim", "sempre que...", "evita...", "da próxima vez..."), perguntar:

> "Quer que eu salve isso para não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** → `_contexto/empresa.md`
- **Sobre preferências e estilo** → `_contexto/preferencias.md`
- **Sobre prioridades e foco atual** → `_contexto/estrategia.md`
- **Regra de comportamento nessa pasta** → este `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro. Confirmar o que foi salvo mostrando a linha adicionada.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante no projeto (novo cliente, nova skill, mudança de foco, novo processo, ferramenta instalada, estrutura alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize os arquivos de memória?"

**Quando NÃO perguntar:**
- Tarefas pontuais que não mudam o contexto (escrever um email, criar um post avulso)
- Perguntas simples ou conversas sem ação

---

## Criação de skills

Quando pedir para criar uma nova skill:

1. Verificar se existe um template relevante em `templates/skills/`
2. Perguntar: "Essa skill é específica para esse projeto ou vai ser útil em qualquer projeto?"
   - Específica → `.claude/skills/nome-da-skill/SKILL.md`
   - Global → `~/.claude/skills/nome-da-skill/SKILL.md`
3. Ler `_contexto/empresa.md` e `_contexto/preferencias.md` para calibrar ao contexto
4. Seguir o fluxo da skill-creator nativa do Claude Code
