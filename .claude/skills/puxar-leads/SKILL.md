---
name: puxar-leads
description: Puxa leads da web com Firecrawl, filtra pelo ICP e devolve só as empresas que encaixam, com ângulo de abordagem. Foco em B2B europeu (Espanha, Portugal e resto da UE) e regras de RGPD. Use quando pedir "puxa leads de [segmento] em [lugar]", "monta uma lista de prospecção", "encontra empresas de [nicho]", "raspa esse diretório", "lista de leads pra ED", ou quando uma aluna do QE precisar de lista de clientes europeus.
---

# Puxar Leads

Transforma uma fonte pública (diretório, câmara de comércio, lista de expositores, busca na web) numa lista curta de empresas que encaixam no ICP, cada uma com contato corporativo publicado e um ângulo de entrada.

A regra que guia tudo: 25 empresas certas valem mais que 500 nomes soltos. Lista não é pipeline.

---

## Dependências

- **Firecrawl** (plugin ou MCP). Plano gratuito com 500 créditos pra testar.
- `_contexto/empresa.md` e `_contexto/estrategia.md` pra entender qual negócio está prospectando.
- Skill `auditoria-icp` (se disponível) pro filtro de ICP. Se não estiver, usar os critérios do Passo 5.
- Skill `definir-icp`, se a Michelle já tiver um ICP salvo, usar ele como referência.

---

## Workflow

### Passo 0. Verificar o Firecrawl

Checar se existem ferramentas do Firecrawl disponíveis na sessão (nomes com `firecrawl`).

Se não existirem, parar e orientar a instalação. Não seguir com scraping improvisado.

1. Criar a chave gratuita em firecrawl.dev/app
2. Instalar por um dos caminhos:
   - Plugin: rodar `/plugin`, buscar **firecrawl** e instalar (precisa do Firecrawl CLI instalado globalmente)
   - MCP: `claude mcp add firecrawl -e FIRECRAWL_API_KEY=sua-chave -- npx -y firecrawl-mcp`
3. Reiniciar o Claude Code

Avisos:
- Nunca salvar a chave em arquivo do repositório nem colar no chat. Ela fica só na configuração do MCP (ou como segredo do ambiente, numa sessão na nuvem).
- Numa sessão do Claude Code na nuvem, o host `api.firecrawl.dev` precisa estar liberado na rede do ambiente. Se der erro de rede, explicar isso em vez de tentar contornar.

### Passo 1. Entender o pedido

Perguntar o que faltar, numa mensagem só:

1. **Pra quem é a lista:** prospecção da Essência Digital, cliente da ED, ou aluna do Quinta Essência (e qual é o negócio dela)
2. **Segmento:** tipo de empresa (ex: distribuidoras de alimentos, clínicas, escritórios de contabilidade)
3. **Onde:** país, região ou cidade
4. **Fonte:** se a Michelle já tem uma URL (diretório, feira, associação), usar. Se não, sugerir fontes (Passo 2)
5. **Quantidade final:** padrão de 25 empresas qualificadas

**Checkpoint:** resumir o pedido em 3 linhas e o ICP que vai ser usado no filtro. Esperar confirmação.

### Passo 2. Escolher as fontes

Priorizar fontes onde a própria empresa publica seus dados:

01 / Câmaras de comércio (Cámaras de Comercio de España, câmaras de comércio portuguesas, Câmara de Comércio Brasil-Portugal, câmaras bilaterais Brasil-Espanha)
02 / Listas de expositores de feiras do setor
03 / Associações e federações setoriais (membros listados publicamente)
04 / Páginas de "clientes" ou "parceiros" de empresas do mesmo ecossistema
05 / Busca na web pelo Firecrawl ("[segmento] [cidade]"), abrindo o site de cada resultado

Nunca usar:
- LinkedIn e outras plataformas que proíbem scraping nos termos de uso
- Áreas com login, grupos fechados, marketplaces que bloqueiam robôs
- Bases de dados pessoais compradas ou vazadas

Se um site bloquear o acesso, pular e registrar. Não insistir nem tentar burlar.

### Passo 3. Extração bruta

Para cada empresa encontrada, abrir o site dela e extrair:

| Campo | Regra |
|-------|-------|
| Empresa | Nome como aparece no site |
| Site | Domínio principal |
| País / cidade | Da página de contato ou rodapé |
| Contato corporativo | E-mail genérico (info@, comercial@, hola@) e telefone publicados pela empresa |
| Fonte | URL exata de onde o dado saiu |
| Data | Dia da coleta |

Puxar uma margem acima da meta (umas 3x a quantidade final), porque o filtro vai cortar bastante.

### Passo 4. Limpeza

1. Remover duplicadas pelo domínio
2. Remover quem não tem nenhum contato corporativo publicado
3. Remover sites fora do ar ou claramente abandonados (sem atualização há anos)

### Passo 5. Filtro de ICP

Se a skill `auditoria-icp` estiver disponível, usar os critérios dela em cada empresa.

Se não estiver, avaliar pelo site:

- **Porte:** tem equipe (página de equipe, vagas abertas, mais de uma unidade)? Empresa de uma pessoa só raramente é cliente da ED
- **Sinais de dor operacional:** vagas abertas pra cargos operacionais ou administrativos, atendimento só por formulário ou telefone, processos manuais visíveis (pedido por e-mail, PDF pra baixar e preencher), crescimento recente (nova unidade, investimento)
- **Maturidade digital:** site básico, sem automação visível, sem chat, sem agendamento online
- **Encaixe de mercado:** opera no mercado europeu e fala com clientes B2B

Classificar cada uma como **alta**, **média** ou **baixa**. Descartar as baixas.

Para listas de alunas do QE, trocar os critérios pelo ICP do negócio dela (definido no Passo 1).

### Passo 6. Enriquecer as melhores

Só para as empresas classificadas como alta (e médias, se faltar volume):

1. Pegar **dois detalhes reais e específicos** do site (um serviço, uma notícia, uma vaga, um cliente citado). Nada genérico
2. Escrever o **ângulo de entrada** em uma frase: qual gargalo provável e por que a ED resolve
3. Se o site mostrar o decisor (sócio, diretor) na página "sobre", registrar nome e cargo, sem buscar o contato pessoal dele

### Passo 7. Entregar

Salvar em `essencia-digital/prospeccao/` (ou `quinta-essencia/clientes/[aluna]/prospeccao/` para alunas):

- `leads-[segmento]-[cidade]-AAAA-MM-DD.csv` com colunas: empresa, site, pais, cidade, email_corporativo, telefone, decisor_publico, encaixe_icp, sinais_de_dor, detalhe_1, detalhe_2, angulo_de_entrada, fonte, data_coleta
- `leads-[segmento]-[cidade]-AAAA-MM-DD.md` com o resumo:
  - Quantas empresas foram puxadas, quantas sobraram depois do filtro e por quê
  - As 5 com mais encaixe, com o ângulo de cada uma
  - Fontes que bloquearam ou não renderam
  - Sugestão de próximo passo (ex: rodar `briefing-cliente` nas 5 primeiras)

**Checkpoint:** mostrar o resumo e perguntar se a Michelle quer ajustar o filtro antes de qualquer abordagem. Esta skill não envia mensagem nenhuma.

---

## Regras de RGPD

Regras de bolso pra operar com segurança. Não substituem parecer jurídico.

1. **Só dado corporativo publicado pela própria empresa.** E-mail genérico e telefone comercial do site, sim. E-mail pessoal de decisor, não.
2. **E-mail nominal é dado pessoal na UE.** Se a empresa publicar nome.sobrenome@empresa como contato comercial, pode entrar, mas marcar no CSV como `dado pessoal` e lembrar que abordagem fria precisa de base legal (interesse legítimo documentado).
3. **Nunca inventar.** Se não achou e-mail ou telefone, o campo fica vazio. Nunca deduzir padrão de e-mail (ex: chutar nome@empresa).
4. **Registrar a fonte e a data** de cada dado. É o que sustenta a origem se alguém perguntar.
5. **Abordagem é outra etapa.** Quando for contatar: identificar quem está falando, explicar por que aquela empresa, e oferecer uma forma simples de não receber mais nada.
6. **Respeitar os termos de cada site.** Se o site proíbe coleta automatizada ou bloqueia, pular.

---

## Regras gerais

- Padrão de 25 empresas qualificadas. Mais que isso só se a Michelle pedir.
- Qualidade antes de volume: melhor entregar 12 boas e explicar o motivo do que completar com empresas fracas.
- Não usar créditos do Firecrawl à toa: abrir só a home, a página de contato e a página "sobre" de cada empresa, a não ser que precise de mais.
- Tom do resumo: direto, sem enfeite, em português do Brasil.
- Terminologia: IA e automação são sempre "funcionários digitais".
