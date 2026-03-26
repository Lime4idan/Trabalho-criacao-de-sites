App MVC 

Projetinho pra praticar **Node.js + Express + EJS** usando o padrão **MVC** e um CRUD de produtos em memória.

O que o projeto faz

- Tem 4 páginas principais:
  - Início 
  - Sobre (`/sobre`)
  - Contato (`/contato) – formulário só visual
  - Produtos (/produtos) – lista, cria, edita e exclui produtos
- Os produtos ficam em um **array em memória** (se reiniciar o servidor, ele volta pro início).

- Como rodar - 

No terminal:

cd projeto-mvc
npm install
npm start


Depois abre no navegador:

- `http://localhost:3000`

Como está organizado (MVC)

- models/ProdutoModel.js
  - guarda o array de produtos
  - tem funções pra listar, buscar por id, adicionar, atualizar e remover
- controllers/
  - homeController.js → página inicial
  - sobreController.js → página sobre
  - contatoController.js → página de contato
  - produtosController.js → regras do CRUD de produtos (usa o model)
- routes/rotas.js
  - define as URLs e chama o controller certo
- views/
  - arquivos EJS (HTML com "<%= %>" pra mostrar dados)
  - usa partials partials/header.ejs e partials/footer.ejs pra não repetir código
- public/css/style.css
  - CSS simples pra dar uma cor de fundo na página

