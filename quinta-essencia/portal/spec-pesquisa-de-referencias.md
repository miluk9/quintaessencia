# Pesquisa de referências no portal: especificação

Para colar no chat do portal ("Refinar dashboard da Quinta Essência"). Nada foi alterado no banco.

## O que é

Uma área nova no portal da aluna, **Pesquisa de referências**, que faz parte do Time de Marketing. A aluna pede a pesquisa dos 3 a 5 perfis de referência dela, a equipe da Michelle roda esses perfis no Creator Lab e devolve os arquivos em até 5 dias úteis. A aluna baixa os arquivos e entrega para a Kelly.

## O fluxo

1. **A aluna pede.** Preenche:
   - de 3 a 5 perfis de referência (só o usuário, sem @)
   - o próprio perfil (opcional)
   - até 5 links de Reels que ela salvou (opcional)
   - uma observação curta (opcional)
   Ao enviar, o pedido fica com o status `pedido` e a data. O portal mostra: "A equipe devolve em até 5 dias úteis."
2. **A Michelle vê o pedido no admin**, com o prazo calculado (data do pedido + 5 dias úteis) e um alerta quando faltar 1 dia.
3. **A Michelle muda o status** para `em andamento` quando começar.
4. **A Michelle sobe os arquivos**: um `.json` por perfil (exportado do Creator Lab) e, se quiser, a versão de leitura `.md`. Muda o status para `pronto`.
5. **A aluna recebe** uma notificação (usar o sistema de notificações que o portal já tem), baixa os arquivos e leva para a Kelly.

## O que construir

- **Tabela de pedidos** ligada à aluna, com: perfis, perfil próprio, links salvos, observação, status (`pedido`, `em andamento`, `pronto`), data do pedido, prazo, data de entrega.
- **Arquivos** no armazenamento do Supabase, numa pasta por aluna e por pedido. Acesso só da aluna dona do pedido e do admin.
- **Tela da aluna:** formulário do pedido, lista dos pedidos com status e prazo, botão de baixar quando estiver pronto, e o texto: "Baixe os arquivos e chame a Kelly: 'Kelly, a pesquisa chegou', com os arquivos anexados."
- **Tela do admin:** lista de pedidos de todas as alunas, ordenada pelo prazo, com os perfis prontos para copiar, upload dos arquivos e mudança de status.

## Regras

1. **Antes de criar tabela nova, confira o banco.** Já existem `painel_pesquisas` e `painel_pesquisa_entrada`. Veja para que servem. Se nenhuma servir, crie uma tabela nova com nome claro (ex.: `pesquisa_referencias`), sem mexer nas existentes.
2. **RLS:** a aluna vê e cria só os pedidos dela, e baixa só os arquivos dela. Só o admin sobe arquivo e muda status.
3. **Limite:** no máximo 5 perfis por pedido e 1 pedido aberto por aluna por vez.
4. **Os arquivos do Creator Lab têm links temporários do Instagram e do Apify.** Eles ficam só no armazenamento com acesso restrito. Nunca em página pública.
5. Testar com uma aluna de teste antes de liberar.
6. Português do Brasil, frases curtas, sem travessão.

## Prompt para colar no chat do portal

```
Quero uma área nova no portal: Pesquisa de referências. A especificação está abaixo. Antes de mexer:
1. Confira no banco para que servem painel_pesquisas e painel_pesquisa_entrada.
2. Me mostre o plano (banco, armazenamento, tela da aluna, tela do admin) e espere eu aprovar.
Depois de aprovado, construa, teste com uma aluna de teste e me mande print das duas telas.

[colar aqui o resto deste arquivo]
```
