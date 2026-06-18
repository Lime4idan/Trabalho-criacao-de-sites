/**
 * @class ProdutoModel
 * @classdesc Representa a entidade Produto no domínio da aplicação.
 * Gerencia a estrutura de dados e operações CRUD em memória.
 */

// Dados iniciais (simulando um banco de dados)
let produtos = [
  { id: 1, nome: "Nintendo Switch 2", preco: 5000, descricao: "Console Nintendo de última geração" },
  { id: 2, nome: "PS5 Pro", preco: 2000, descricao: "Console Sony" }
];

let nextId = 3;  // próximo id a ser usado quando um novo produto for criado

/**
 * Retorna a lista completa de produtos cadastrados.
 * @returns {Array<{id: number, nome: string, preco: number, descricao: string}>} Array com todos os produtos.
 */
const listarProdutos = () => produtos;

/**
 * Busca um produto pelo identificador único.
 * @param {number} id - Identificador único do produto.
 * @returns {{id: number, nome: string, preco: number, descricao: string}|undefined} Produto encontrado ou `undefined` se não existir.
 */
const buscarPorId = (id) => produtos.find((p) => p.id === id);

/**
 * Adiciona um novo produto ao catálogo em memória.
 * @param {Object} dados - Dados do produto a ser criado.
 * @param {string} dados.nome - Nome do produto.
 * @param {number|string} dados.preco - Preço unitário em reais.
 * @param {string} dados.descricao - Descrição do produto.
 * @returns {{id: number, nome: string, preco: number, descricao: string}} Produto recém-criado com id gerado automaticamente.
 */
const adicionarProduto = ({ nome, preco, descricao }) => {
  const novo = {
    id: nextId++,
    nome,
    preco: Number(preco),
    descricao
  };
  produtos.push(novo);
  return novo;
};

/**
 * Atualiza os dados de um produto existente.
 * @param {number} id - Identificador único do produto.
 * @param {Object} dados - Novos dados do produto.
 * @param {string} dados.nome - Nome atualizado do produto.
 * @param {number|string} dados.preco - Preço atualizado em reais.
 * @param {string} dados.descricao - Descrição atualizada do produto.
 * @returns {{id: number, nome: string, preco: number, descricao: string}|null} Produto atualizado ou `null` se não for encontrado.
 */
const atualizarProduto = (id, { nome, preco, descricao }) => {
  const index = produtos.findIndex((p) => p.id === id);
  if (index === -1) return null;
  produtos[index] = { id, nome, preco: Number(preco), descricao };
  return produtos[index];
};

/**
 * Remove um produto do catálogo em memória.
 * @param {number} id - Identificador único do produto a ser removido.
 * @returns {boolean} `true` se o produto foi removido, `false` se não foi encontrado.
 */
const removerProduto = (id) => {
  const index = produtos.findIndex((p) => p.id === id);
  if (index === -1) return false;
  produtos.splice(index, 1);
  return true;
};

// Exporta as funções para serem usadas pelos controllers
module.exports = {
  listarProdutos,
  buscarPorId,
  adicionarProduto,
  atualizarProduto,
  removerProduto
};
