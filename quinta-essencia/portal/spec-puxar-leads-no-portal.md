# Puxar leads no portal: especificação

Para colar no chat do portal ("Refinar dashboard da Quinta Essência"). Tudo aqui foi conferido no banco do portal (Supabase, projeto `ljdiairdxcgxdxtenktr`) em 09/11/2026. Nada foi alterado no banco.

---

## 1. Onde encaixa

Não vira atividade nova. Entra como **ferramenta da atividade que já existe**:

- **Atividade 21**: "SEM audiência · Operação Secreta (Mapa de Acesso + Lista dos 20 + prospecção ativa)"
- Fase 1, semana 6, engrenagem Comercial, bloco 5, gate 3, sistema "Pilares de qualificação"
- A atividade pede 20 portas de entrada em três rotas: compradores diretos legítimos, conectores com contrapartida escrita e conversas de descoberta

A puxar-leads resolve a rota mais difícil, **compradores diretos legítimos**, que é onde a rede pessoal da aluna quase nunca tem ninguém. As outras duas rotas continuam como estão.

Motivo para não criar atividade nova: a Fase 1 já tem 19 atividades comerciais. Mais uma vira carga. Uma ferramenta dentro da atividade que já existe acelera sem somar tarefa.

---

## 2. O que construir

### 2.1. Um modelo novo na tabela `modelos`

| Campo | Valor |
|-------|-------|
| categoria | `Caixa em euro em 14 dias` (a categoria comercial que já existe) |
| ordem | `3` |
| titulo | `Lista de compradores com o Claude` |
| promessa | `Uma lista curta de empresas ou clientes europeus que encaixam no seu perfil de comprador, com contato publicado e um motivo real pra abrir a conversa.` |
| quando | `Na Operação Secreta, para a rota de compradores diretos. Depois de saber quem é o seu comprador, nunca antes.` |
| engrenagem | `comercial` |
| fase_min | `1` |
| sistema_id | `11` (Pilares de qualificação, o mesmo da atividade 21) |
| corpo | o texto da seção 3 abaixo |
| instrucoes | o texto da seção 4 abaixo |

### 2.2. Ligação com a atividade 21

Preencher `atividades.modelo` da atividade 21 com o modelo novo (seguir o padrão que o portal já usa para ligar atividade a modelo; hoje nenhuma atividade tem `modelo` preenchido, então confirmar no código como o campo é lido antes de gravar).

Acrescentar uma linha no fim do `por_que_agora` da atividade 21, sem mexer no resto:

> Para a rota de compradores diretos, use o modelo "Lista de compradores com o Claude". Ele monta a lista com você e já te dá o motivo de cada conversa.

### 2.3. Importar a lista no Comercial do portal

A lista que o Claude gera tem que virar contato na tabela `leads`, que é o Comercial da aluna. Nada de planilha solta.

| Coluna em `leads` | Valor |
|-------------------|-------|
| aluna_id | a aluna logada |
| nome | nome da empresa (ou da pessoa, quando for comprador individual) |
| origem | `prospecção` (valor que já existe no banco) |
| etapa | `novo` (valor que já existe no banco) |
| proximo_passo | o motivo da conversa que o Claude escreveu |
| nota | site, cidade, contato publicado e fonte de onde o dado saiu |
| data_contato | vazio até ela mandar a primeira mensagem |

Construir no portal uma das duas opções (a primeira é a mais simples):

1. **Colar e importar:** caixa onde a aluna cola a tabela que o Claude devolveu (formato CSV) e um botão "Levar para o Comercial", que cria as linhas em `leads`. Mostrar uma prévia antes de gravar e recusar mais de 25 linhas de uma vez.
2. **Upload de CSV:** mesmo fluxo, com arquivo.

Respeitar as RLS que já existem (a aluna só grava os próprios leads).

---

## 3. Corpo do modelo (o que a aluna copia)

```
ANTES DE COMEÇAR
Você precisa ter respondido quem é o seu comprador. Se ainda não tem isso claro, volte para a atividade de posicionamento e faça primeiro.

VERSÃO SIMPLES (qualquer Claude com busca na web)
Cole o prompt abaixo no Claude, trocando o que está entre colchetes.

---
Quero montar uma lista de compradores para o meu negócio no mercado europeu.

O que eu vendo: [sua oferta em uma frase]
Para quem: [seu comprador: tipo de empresa ou perfil de cliente]
Onde: [país e cidade]
Sinal de que é um bom comprador: [o que mostra que essa empresa ou pessoa precisa do que você vende]

Faça assim:
1. Procure na web empresas ou negócios que encaixem nesse perfil, priorizando diretórios públicos, associações do setor, câmaras de comércio e listas de expositores de feiras.
2. Abra o site de cada um e confira se encaixa mesmo. Descarte quem não encaixa.
3. Para cada um que ficar, traga: nome, site, cidade, contato publicado no próprio site (e-mail comercial ou telefone), um detalhe real e específico do site, e o motivo para eu abrir a conversa em uma frase.
4. Nunca invente contato. Se não achou, deixe vazio.
5. Não use LinkedIn nem dados pessoais. Só o que o próprio negócio publica.
6. Me entregue no máximo 15 nomes, os que mais encaixam, em formato CSV com as colunas: nome, site, cidade, contato, detalhe, motivo, fonte.
---

VERSÃO COMPLETA (Claude Code com Firecrawl)
Para quem já usa o Claude Code. O Firecrawl lê sites inteiros e diretórios que a busca comum não alcança.
1. Crie uma chave gratuita em firecrawl.dev/app (dá 500 créditos, sobra para testar)
2. No Claude Code, digite /plugin, procure firecrawl e instale
3. Use o mesmo prompt acima, começando com "Use o Firecrawl para..."

DEPOIS
Cole a tabela que o Claude devolveu no Comercial do portal, em "Levar para o Comercial". Cada linha vira um contato com o próximo passo já escrito.
```

---

## 4. Instruções do modelo (dicas que aparecem junto)

```
Quinze nomes que encaixam valem mais que quinhentos soltos. Lista grande dá sensação de progresso e não abre conversa nenhuma.
O detalhe real do site é o que faz a sua mensagem não parecer disparo. Se o Claude trouxer detalhe genérico, peça de novo.
Na Europa, dado pessoal tem regra (RGPD). E-mail genérico e telefone que a empresa publica no próprio site, pode. E-mail pessoal de alguém, não. Na dúvida, deixe de fora.
Quando for mandar a mensagem: diga quem você é, por que escolheu aquele negócio, e deixe claro que a pessoa pode dizer que não tem interesse.
A lista entra no Mapa de Acesso como rota de compradores diretos. As outras duas rotas (conectores e conversas de descoberta) continuam sendo suas.
Leve a lista para a CIA. A gente olha junto quem fica antes de você mandar qualquer mensagem.
```

---

## 5. Regras para quem for construir

1. Não alterar título, descrição, critério de pronto nem entregável da atividade 21. Só acrescentar a linha do item 2.2.
2. Não criar atividade nova.
3. Usar os valores de `origem` e `etapa` que já existem em `leads` (`prospecção`, `novo`). Não inventar valores novos.
4. Limite de 25 linhas por importação.
5. Testar com uma aluna de teste antes de liberar para todas.
6. Português do Brasil, frases curtas, sem travessão. IA e automação são sempre "funcionários digitais" nos textos da marca (no corpo do modelo, "Claude" pode aparecer pelo nome porque é instrução de uso).

---

## 6. Prompt pronto para colar no chat do portal

```
Quero encaixar uma ferramenta de prospecção no portal. A especificação completa está abaixo. Antes de mexer em qualquer coisa:
1. Confirme no código como atividades.modelo é lido e como os modelos aparecem para a aluna.
2. Me mostre o plano (o que vai mudar no banco e no front) e espere eu aprovar.
Depois de aprovado, construa, teste com uma aluna de teste e me mande print da atividade 21, do modelo novo e do fluxo "Levar para o Comercial".

[colar aqui as seções 1 a 5]
```
