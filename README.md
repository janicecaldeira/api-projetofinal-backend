# API Avalon Motors

## Se encontre

- [Sobre o projeto](#sobre-o-projeto)
- [Construído com](#construido-com)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Como testar o projeto](#como-testar-o-projeto)
- [Desenvolvimento futuro](#desenvolvimento-futuro)
- [Autoria](#autoria)

## Sobre o projeto

API backend construída com o objetivo de exibir carros de uma concessionária de carros de luxo, a Avalon Motors.
É possível incluir, editar, exibir, buscar e excluir qualquer carro que esteja disponível para venda.

## Construído com

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=mongodb&logoColor=4EA94B)

## Como rodar o projeto

- Essa API utiliza o MongoDB como banco de dados e o Mongoose como ODM, então antes de testar a API certifique se você possui o <a href="https://www.mongodb.com/try/download/community">MongoDB</a> instalado em seu computador.

- Além disso, você precisa criar o arquivo .env com a url do seu banco, utilize o arquivo _.env.example_ para criar o seu. Esse é um exemplo de string de conexão com o banco de dados: _mongodb://localhost:27017/db_carros_.

- É necessário o NodeJs e NPM instalado.

- Para executar o projeto com o nodemon, digite no terminal:
```
npm run dev
```

## Como testar o projeto

Você pode utilizar o Thunder Client (é um plugin no VSCode) ou qualquer ferramenta da sua escolha para testar o CRUD.

Exemplos de URLs:

- Essa é a URL de teste padrão: http://localhost:3000/carros

- Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/carros/ID

- Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/filterAll/?nome=

Essa é a estrutura JSON para fazer o POST e o PUT:

```
{
  "nome": "Range Rover Sport",
  "marca": "Land Rover",
  "imagem": "https://cdn.motor1.com/images/mgl/gp1Em/s1/land-rover-range-rover-sport-2021.jpg"
}
```

## Desenvolvimento futuro

Desenvolver a integração com o frontend em React, fiz um exemplo de como deveria ser a página da Avalon Motors.

https://avalon-app.netlify.app/

Ao clicar em *Carros* o usuário deveria ser direcionado para uma página com cards exibindo os carros cadastrados.

Também é possível implementar uma sessão de adminstrador para realizar as tarefas de CRUD, sem a necessidade de trabalhar diretamente com o banco de dados.

## Autoria

Me chamo Janice Caldeira, sou Dev Back-End em formação, atualmente cursando Ciência da Computação e fazendo um super curso de programação na Blue EdTech.

Se conecte comigo

<a href="https://www.linkedin.com/in/janicecaldeira/">![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)</a>
