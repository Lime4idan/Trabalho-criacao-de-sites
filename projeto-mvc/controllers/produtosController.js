const ProdutoModel = require("../models/ProdutoModel");

exports.listar = (req, res) => {
  const produtos = ProdutoModel.listarProdutos();
  res.render("produtos/index", { titulo: "Lista de Produtos", produtos });
};

exports.criarForm = (req, res) => {
  res.render("produtos/criar", { titulo: "Novo Produto" });
};

exports.salvar = (req, res) => {
  const { nome, preco, descricao } = req.body;
  ProdutoModel.adicionarProduto({ nome, preco, descricao });
  res.redirect("/produtos");
};

exports.editarForm = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const produto = ProdutoModel.buscarPorId(id);
  if (!produto) return res.status(404).send("Produto não encontrado");
  res.render("produtos/editar", { titulo: "Editar Produto", produto });
};

exports.atualizar = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { nome, preco, descricao } = req.body;
  const atualizado = ProdutoModel.atualizarProduto(id, { nome, preco, descricao });
  if (!atualizado) return res.status(404).send("Produto não encontrado");
  res.redirect("/produtos");
};

exports.excluir = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const removido = ProdutoModel.removerProduto(id);
  if (!removido) return res.status(404).send("Produto não encontrado");
  res.redirect("/produtos");
};

