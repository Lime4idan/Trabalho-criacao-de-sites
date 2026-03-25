const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homeController");
const sobreController = require("../controllers/sobreController");
const contatoController = require("../controllers/contatoController");
const produtosController = require("../controllers/produtosController");

router.get("/", homeController.index);
router.get("/sobre", sobreController.index);
router.get("/contato", contatoController.index);

router.get("/produtos", produtosController.listar);
router.get("/produtos/criar", produtosController.criarForm);
router.post("/produtos/salvar", produtosController.salvar);
router.get("/produtos/editar/:id", produtosController.editarForm);
router.post("/produtos/atualizar/:id", produtosController.atualizar);
router.post("/produtos/excluir/:id", produtosController.excluir);

module.exports = router;

