# App MVC – Sistema Web com Autenticação e CRUD de Produtos

![Node.js Version](https://img.shields.io/badge/Node.js-18.x-green)
![GitHub repo size](https://img.shields.io/github/repo-size/Lime4idan/Trabalho-criacao-de-sites)
![License](https://img.shields.io/badge/license-MIT-blue)

Aplicação web desenvolvida em Node.js com Express seguindo o padrão **MVC**. O sistema possui páginas estáticas (Home, Sobre e Contato), autenticação com sessão (`express-session`) e um CRUD completo de produtos com dados armazenados em memória. A interface utiliza **EJS** como template engine e **Bootstrap** para o layout. O código dos models e controllers está documentado com **JSDoc**.

---

## Stack Tecnológica

- **Runtime:** Node.js (v18+)
- **Framework Web:** Express
- **Template Engine:** EJS
- **Autenticação:** express-session + cookie-parser
- **Estilo:** Bootstrap 5 (CDN)
- **Armazenamento:** dados em memória (sem banco de dados)
- **Gerenciador de Pacotes:** npm
- **Documentação de Código:** JSDoc

---

## Funcionalidades Principais

- [x] Tela de login com validação de credenciais
- [x] Sessão de usuário autenticado (`req.session.user`)
- [x] Middleware que bloqueia rotas sem login
- [x] Logout com destruição de sessão e limpeza de cookie
- [x] Página inicial (Home)
- [x] Página Sobre
- [x] Página Contato
- [x] Listar produtos
- [x] Criar produto
- [x] Editar produto
- [x] Excluir produto
- [x] Documentação JSDoc em models e controllers

---

## Estrutura do Projeto

```
projeto-mvc/
├── app.js                  # Configuração do servidor Express e sessão
├── controllers/            # Lógica das requisições HTTP
│   ├── authController.js
│   ├── contatoController.js
│   ├── homeController.js
│   ├── produtosController.js
│   └── sobreController.js
├── middlewares/
│   └── auth.js             # Proteção de rotas autenticadas
├── models/                 # Regras de dados em memória
│   ├── ProdutoModel.js
│   └── User.js
├── routes/
│   ├── authRoutes.js       # Rotas de login e logout
│   └── rotas.js            # Rotas das páginas e CRUD
├── views/                  # Templates EJS
│   ├── login.ejs
│   ├── home.ejs
│   ├── sobre.ejs
│   ├── contato.ejs
│   ├── produtos/
│   └── partials/
└── public/                 # Arquivos estáticos (CSS)
```

---

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) (versão 18 ou superior)

### Passo a Passo

1. **Clone o repositório**

```bash
git clone https://github.com/Lime4idan/Trabalho-criacao-de-sites.git
```

2. **Acesse o diretório do projeto MVC**

```bash
cd Trabalho-criacao-de-sites/projeto-mvc
```

3. **Instale as dependências**

```bash
npm install
```

4. **Inicie o servidor**

```bash
npm start
```

Para desenvolvimento com reinício automático:

```bash
npm run dev
```

5. **Acesse no navegador**

```
http://localhost:3000
```

---

## Credenciais de Acesso

| Campo | Valor |
|-------|-------|
| Email | `admin@email.com` |
| Senha | `123456` |

Sem login, o sistema redireciona automaticamente para `/login`.

---

## Padrão MVC

- **Model:** `ProdutoModel.js` e `User.js` — gerenciam dados e regras de negócio em memória.
- **View:** arquivos `.ejs` em `views/` — renderizam as páginas no navegador.
- **Controller:** arquivos em `controllers/` — recebem requisições HTTP, chamam o model e retornam a view.

---

## Autor

**Alicia** — [Lime4idan](https://github.com/Lime4idan)
