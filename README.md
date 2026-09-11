# Node.js Learning Project

Projeto criado para praticar os fundamentos do Node.js por meio de uma API HTTP simples, sem o uso de frameworks externos.

## Sobre o projeto

O projeto possui um servidor HTTP nativo que disponibiliza uma lista fixa de filmes em formato JSON. Os dados podem ser consumidos por uma aplicação frontend.

## Conceitos praticados

- CommonJS para importação de módulos
- Módulo nativo `node:http`
- Criação de servidores HTTP
- Tratamento de requisições e respostas
- Definição de cabeçalhos HTTP
- Configuração de CORS
- Respostas no formato JSON
- Código de status HTTP
- Inicialização do servidor com `server.listen`
- Criação de uma API simulada (*mock API*)

## Tecnologias

- Node.js
- JavaScript
- HTTP
- JSON

## Estrutura do projeto

```text
.
├── dist/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── webservice/
│   └── server.js
├── index.cjs
├── package.json
└── README.md
```

## Objetivo

Este repositório faz parte dos meus estudos de Node.js e demonstra, de forma prática, como criar uma API HTTP básica utilizando recursos nativos da plataforma.