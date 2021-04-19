# Avaliação Code and Soul

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)

## Projeto

Esse projeto foi criado seguindo as instruções passadas, com objetivo de 
avaliação para vaga de Desenvolvedor Front-end na Code and Soul.

Se trata de um vizualizador de posts que puxa os dados dos posts de uma API. 
A aplicação tem duas views, uma para vizualizar todos os títulos e outra para 
vizualizar um post com seu título e conteúdo.

## Como executar

- Clone o repositório
`git clone git@github.com:lianaraujo/code-and-soul-app.git`
- Instale as dependências
`yarn` ou `npm install`
- Inicie o servidor 
`yarn start` ou `npm start`

Agora você pode acessar [`localhost:3000`](http://localhost:3000) do seu navegador.

## Questionário da avaliação

1. Descreva possiveis otimizações de performance que você poderia fazer no seu
próprio código.

Para melhorar a performace acredito que usar um SSG faz sentido para esse formato
de aplicação. Optei por não usar só porque é uma aplicação simples e eu estaria 
complicando demais as coisas pra nenhum ganho real. 

2. O que você poderia ter melhorado?

Eu poderia ter componentizado mais e usado uma context API ao inves de ter botado
a lista de posts no App.tsx e passado o array inteiro dos posts pro componente Post.tsx.
