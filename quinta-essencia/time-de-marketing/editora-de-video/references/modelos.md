# Modelos · Editora de Vídeo

## 1. Plano de edição (`edicao/plano-de-edicao.md`)

```markdown
# Plano de edição · [dia] · [tema]
Duração final estimada: [N] s · Intensidade: [calma / média / enérgica] · Caminho: [Tella / FFmpeg / plano para CapCut]

## Decupagem (o que sai do bruto)
| # | Trecho do bruto | Motivo do corte |
|---|---|---|
| 1 | 00:12 a 00:15 | repetição ("então, então") |

## Tabela de tempo
| # | Trecho do bruto (início a fim) | No vídeo final | Função | Cena | O que acontece na tela | Texto na tela (tipo) | Som | Material |
|---|---|---|---|---|---|---|---|---|
| 1 | 00:03 a 00:06 | 0:00 a 0:03 | gancho | rosto | corte seco, ela já falando | destaque: "[texto da tela]" | sem trilha | bruto |

Função: explicar · provar · contrastar · enfatizar · organizar · levar à ação
Cena: rosto · rosto + demonstração · tela ou print ampliado · cena gráfica · comparação ou lista · objeto em close

## Diferenças entre a gravação e o roteiro
- [ex.: "na cena 4 ela disse 'três passos' e o roteiro dizia 'quatro'; segui a gravação"]

## A confirmar
- [ex.: "licença da trilha", "print real da cena 6"]
```

### Passo a passo para o CapCut (quando não há ferramenta conectada)

Acrescente ao plano, nesta ordem:
1. Importe o bruto e as gravações de tela.
2. Faça os cortes da decupagem, em ordem.
3. Monte as cenas da tabela de tempo: para "rosto + demonstração", use sobreposição com a tela em cima e o rosto embaixo.
4. Importe o arquivo `fala-escrita.srt` em Texto, Legendas, Importar. Tire a caixa de fundo, aplique a fonte e a cor da Diretriz e suba a posição para fora do canto inferior.
5. Aplique os destaques grandes só nos momentos da tabela.
6. Coloque a trilha baixa e os efeitos sonoros marcados.
7. Exporte primeiro os 10 primeiros segundos e mande para aprovação.

## 2. Fala escrita (`fala-escrita.srt`)

- Blocos de 2 a 5 palavras, quebrados por sentido, nunca no meio de uma expressão.
- Tempo de cada bloco igual ao tempo em que a palavra é dita. Nunca adiante uma conclusão.
- Palavra de destaque marcada entre `**` no plano (o SRT sai limpo; o destaque é aplicado na edição).
- Revisado à mão: acentos, nomes, números.

```
1
00:00:00,000 --> 00:00:01,400
O seu CRM está te dando

2
00:00:01,400 --> 00:00:02,600
uma previsão de vendas.
```

## 3. Capa

| Item | Regra |
|---|---|
| Quadro | o melhor quadro do gancho: olhos abertos, boca fechada ou no meio de uma palavra aberta, expressão que combina com o gancho |
| Texto | o texto da tela do gancho, da Kelly, sem mudar |
| Fonte e cor | fonte de destaque e cor de destaque sobre vídeo, da Diretriz |
| Área | centro 3:4 (1080 × 1440) da arte 1080 × 1920 |
| Rosto | texto abaixo do queixo, nada sobre o rosto |
| Fundo do texto | sem caixa; se faltar contraste, use o degradê da própria marca, nunca uma faixa |

## 4. Mapa de som

| Momento | Som | Cuidado |
|---|---|---|
| Gancho | sem trilha nos primeiros 1 a 2 s, ou trilha baixa | a primeira palavra precisa ser ouvida inteira |
| Troca de cena | corte seco, sem som, na maior parte das vezes | whoosh só em mudança de assunto |
| Seleção, encaixe, resultado | clique ou toque discreto | não em toda entrada |
| Virada de argumento | trilha recua ou some por um instante | não pode parecer falha |
| Fechamento | trilha resolve | a palavra-chave falada fica limpa |

Volume final: -16 a -14 LUFS, pico até -1 dBTP.

## 5. Checklist final (antes de entregar)

- [ ] O vídeo faz sentido só com os cortes; nenhuma palavra cortada.
- [ ] O roteiro e a legenda do post não foram alterados; as diferenças da gravação estão registradas.
- [ ] Cada cena tem uma função; um foco por vez.
- [ ] Ritmo de acordo com a intensidade da Diretriz.
- [ ] Fala escrita sem caixa, sincronizada, revisada, fora do rosto e do canto inferior.
- [ ] Destaques só nos momentos do briefing.
- [ ] Toda prova veio dela; simulação marcada; preço e condição confirmados.
- [ ] Prints legíveis no celular.
- [ ] Voz na frente da trilha; sem estouro; entre -16 e -14 LUFS.
- [ ] Música com licença para uso nas redes.
- [ ] Capa no centro 3:4, texto abaixo do queixo.
- [ ] Palavra-chave escrita no fechamento.
- [ ] Nenhum quadro vazio, mídia faltando ou texto saindo da tela.
- [ ] Assistido inteiro no celular.
- [ ] O resumo diz o que foi feito e o que não foi possível, sem exagero.
