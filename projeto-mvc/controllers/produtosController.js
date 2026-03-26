const ProdutoModel = require("../models/ProdutoModel");

// Lista todos os produtos e renderiza a view index.ejs
exports.listar = (req, res) => {
  const produtos = ProdutoModel.listarProdutos(); // busca dados no model
  res.render("produtos/index", { titulo: "Lista de Produtos", produtos });
};
// Exibe o formulário de criação (apenas renderiza a view)
exports.criarForm = (req, res) => {
  res.render("produtos/criar", { titulo: "Novo Produto" });
};
// Recebe os dados do formulário, chama o model para adicionar e redireciona
exports.salvar = (req, res) => {
  const { nome, preco, descricao } = req.body;  // dados vindos do form
  ProdutoModel.adicionarProduto({ nome, preco, descricao }); 
  res.redirect("/produtos");  // volta para a lista
};
//Exibe o formulário de edição com os dados do produto já preenchidos
exports.editarForm = (req, res) => {
  const id = parseInt(req.params.id, 10); // captura o id da URL
  const produto = ProdutoModel.buscarPorId(id);
  if (!produto) return res.status(404).send("Produto não encontrado");  // erro se não existir
  res.render("produtos/editar", { titulo: "Editar Produto", produto });
};
// Atualiza os dados do produto e redireciona
exports.atualizar = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { nome, preco, descricao } = req.body;
  const atualizado = ProdutoModel.atualizarProduto(id, { nome, preco, descricao });
  if (!atualizado) return res.status(404).send("Produto não encontrado");
  res.redirect("/produtos");
};
// Remove o produto e redireciona
exports.excluir = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const removido = ProdutoModel.removerProduto(id);
  if (!removido) return res.status(404).send("Produto não encontrado");
  res.redirect("/produtos");
};

