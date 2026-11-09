# Processo · Pesquisa de referências das alunas (Creator Lab)

Serviço do Time de Marketing. A aluna pede no portal, a equipe roda no Creator Lab e devolve em **até 5 dias úteis**.

## Quando chega um pedido

1. **Abra o pedido no admin do portal** e mude o status para `em andamento`.
2. **Confira os perfis.** Têm que ser públicos e falar com o mesmo público da aluna. Perfil privado ou com menos de 8 Reels nos últimos 60 dias: avise a aluna pelo portal e peça outro.
3. **Abra o Creator Lab** no Terminal:

   ```bash
   cd ~/creator-lab && npm start
   ```

   Abra `http://127.0.0.1:5190` e deixe o Terminal aberto.
4. **Rode cada perfil:** New analysis, usuário sem @, **80 Reels**, 2 a 4 paralelas, teto de **US$ 1**, idioma `pt` (ou `en` para perfil estrangeiro). Se a aluna mandou o próprio perfil, rode também.
5. **Travou? Use Start / resume.** Nunca crie análise nova para tentar de novo.
6. **Exporte o JSON** de cada perfil e renomeie: `[aluna]-[perfil]-[aaaa-mm-dd].json`.
7. **Opcional:** gere a versão de leitura `.md` (o Claude converte o JSON).
8. **Suba os arquivos no pedido** e mude o status para `pronto`. O portal avisa a aluna.
9. **Feche o app** com `Ctrl + C` no Terminal.

## Conferência rápida antes de entregar (2 minutos)

- Abra 2 ou 3 transcrições. Se vierem estranhas (ex.: "Thank you." num perfil brasileiro), é Reel só com música. Tudo bem, a Kelly marca como "sem fala".
- Se um perfil veio com menos de 8 Reels nos últimos 60 dias, escreva na observação do pedido: "amostra pequena".

## Custo de referência

Cerca de US$ 0,30 por perfil de 80 Reels (pelo piloto: 20 Reels custaram US$ 0,07). Uma aluna com 4 perfis fica em torno de US$ 1,20.

## Segurança

- As chaves (Apify, TypeSafe, Groq) ficam só no `.env` do seu Mac. Nunca no portal, no chat ou com a aluna.
- Os arquivos têm links temporários. Só sobem no pedido da aluna, nunca em lugar público.
- Revise as chaves a cada 3 meses nos painéis de cada serviço.
