/**
 * @controller ProdutosController
 * @description Gerencia as requisições HTTP relacionadas a produtos.
 */

const ProdutoModel = require("../models/ProdutoModel");

/**
 * Lista todos os produtos cadastrados e renderiza a view de listagem.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Renderiza a página com o array de produtos.
 */
exports.listar = (req, res) => {
  const produtos = ProdutoModel.listarProdutos(); // busca dados no model
  res.render("produtos/index", { titulo: "Lista de Produtos", produtos });
};

/**
 * Exibe o formulário de criação de um novo produto.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Renderiza a página do formulário de criação.
 */
exports.criarForm = (req, res) => {
  res.render("produtos/criar", { titulo: "Novo Produto" });
};

/**
 * Recebe os dados do formulário e cria um novo produto.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Redireciona para a listagem de produtos após salvar.
 */
exports.salvar = (req, res) => {
  const { nome, preco, descricao } = req.body;  // dados vindos do form
  ProdutoModel.adicionarProduto({ nome, preco, descricao }); 
  res.redirect("/produtos");  // volta para a lista
};

/**
 * Exibe o formulário de edição com os dados do produto preenchidos.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Renderiza a página de edição ou responde com status 404 se o produto não existir.
 */
exports.editarForm = (req, res) => {
  const id = parseInt(req.params.id, 10); // captura o id da URL
  const produto = ProdutoModel.buscarPorId(id);
  if (!produto) return res.status(404).send("Produto não encontrado");  // erro se não existir
  res.render("produtos/editar", { titulo: "Editar Produto", produto });
};

/**
 * Atualiza os dados de um produto existente.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Redireciona para a listagem ou responde com status 404 se o produto não existir.
 */
exports.atualizar = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { nome, preco, descricao } = req.body;
  const atualizado = ProdutoModel.atualizarProduto(id, { nome, preco, descricao });
  if (!atualizado) return res.status(404).send("Produto não encontrado");
  res.redirect("/produtos");
};

/**
 * Remove um produto do catálogo.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Redireciona para a listagem ou responde com status 404 se o produto não existir.
 */
exports.excluir = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const removido = ProdutoModel.removerProduto(id);
  if (!removido) return res.status(404).send("Produto não encontrado");
  res.redirect("/produtos");
};
