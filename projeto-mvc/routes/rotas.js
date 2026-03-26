const express = require("express"); //importei express
const router = express.Router(); // Criei um rotador

// Importa os controllers (cada um contém a lógica das páginas) 
const homeController = require("../controllers/homeController");
const sobreController = require("../controllers/sobreController");
const contatoController = require("../controllers/contatoController");
const produtosController = require("../controllers/produtosController");

//ROTAS ESTÁTICAS  (ESCREVI OS ENDEREÇOS)
// GET / → página inicial
router.get("/", homeController.index);
// GET /sobre → página sobre
router.get("/sobre", sobreController.index);
// GET /contato → página de contato
router.get("/contato", contatoController.index);

// GET /produtos → lista todos os produtos
router.get("/produtos", produtosController.listar);
// GET /produtos/criar → exibe formulário para novo produto
router.get("/produtos/criar", produtosController.criarForm);
// POST /produtos/salvar → recebe os dados do formulário e cria o produto
router.post("/produtos/salvar", produtosController.salvar);
// GET /produtos/editar/:id → formulário de edição preenchido 
router.get("/produtos/editar/:id", produtosController.editarForm);
// POST /produtos/atualizar/:id → atualiza o produto com o id informado
router.post("/produtos/atualizar/:id", produtosController.atualizar);
// POST /produtos/excluir/:id → remove o produto com o id informado
router.post("/produtos/excluir/:id", produtosController.excluir);

// Exporta o roteador para ser usado no app.js
module.exports = router;

