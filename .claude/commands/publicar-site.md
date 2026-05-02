---
name: publicar-site
description: >
  Faz upload de um arquivo HTML para o Hostinger via FTP e retorna confirmação.
  Alternativa: instrução para publicar no Framer se o projeto usar Framer.
  Use quando pedir "publica", "coloca no ar", "quero um link", "sobe esse HTML",
  ou após criar uma proposta/landing page/slide que precisa de URL para compartilhar.
---

# /publicar-site — Deploy no Hostinger

## O que faz

Envia um arquivo HTML para o Hostinger via FTP e confirma que está no ar.
O link fica disponível no domínio configurado, acessível direto pelo cliente.

## Como usar

```
/publicar-site essencia-digital/propostas/proposta-cliente.html
```

Ou chamar sem argumento — vai perguntar qual arquivo publicar.

---

## Pré-requisitos

Configure as variáveis no arquivo `.env` na raiz do projeto:

```
HOSTINGER_FTP_HOST=ftp.seudominio.com
HOSTINGER_FTP_USER=seu_usuario_ftp
HOSTINGER_FTP_PASS=sua_senha_ftp
HOSTINGER_FTP_PATH=/public_html/propostas/
HOSTINGER_BASE_URL=https://seudominio.com/propostas
```

Se o `.env` não existir, a skill guia a configuração passo a passo.

---

## Workflow

### Passo 1 — Verificar o arquivo

Confirmar que o arquivo existe e é um HTML válido. Se houver imagens ou recursos externos, avisar que dependências externas (Google Fonts, etc.) precisam de conexão para funcionar.

### Passo 2 — Verificar configuração FTP

Verificar se `.env` tem as variáveis necessárias.
Se não tiver, perguntar:
- "Qual é o host FTP do Hostinger? (aparece no painel de Hosting > FTP)"
- "Usuário e senha FTP?"
- "Em qual pasta você quer publicar? (ex: /public_html/propostas/)"

### Passo 3 — Fazer upload

```bash
curl -T [arquivo] ftp://[host]/[caminho]/[nome-arquivo] \
  --user [usuario]:[senha] \
  --ftp-create-dirs
```

### Passo 4 — Confirmar

Retornar:
```
Publicado.
Link: https://[dominio]/[caminho]/[arquivo].html

Copiar o link para enviar ao cliente?
```

---

## Alternativa: Framer

Se o projeto usar Framer, publicar pelo painel do Framer (Share > Publish).
Nesse caso, chamar `/publicar-site framer` e a skill vai guiar o processo manual.

---

## Regras

- Nunca publicar arquivo sem confirmar o destino com a Michelle primeiro
- Se o arquivo contiver dados sensíveis de cliente, perguntar antes de publicar
- Confirmar URL final antes de enviar ao cliente
