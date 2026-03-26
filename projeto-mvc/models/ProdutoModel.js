// Dados iniciais (simulando um banco de dados)
let produtos = [
  { id: 1, nome: "Nintendo Switch 2", preco: 5000, descricao: "Console Nintendo de última geração" },
  { id: 2, nome: "PS5 Pro", preco: 2000, descricao: "Console Sony" }
];

let nextId = 3;  // próximo id a ser usado quando um novo produto for criado

// Retorna a lista completa de produtos
const listarProdutos = () => produtos;

// Busca um produto pelo id (retorna undefined se não existir)
const buscarPorId = (id) => produtos.find((p) => p.id === id);

// Adiciona um novo produto: gera id sequencial, converte preço para número
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

// Atualiza um produto existente (substitui os dados)
const atualizarProduto = (id, { nome, preco, descricao }) => {
  const index = produtos.findIndex((p) => p.id === id);
  if (index === -1) return null;
  produtos[index] = { id, nome, preco: Number(preco), descricao };
  return produtos[index];
};

// Remove um produto do array
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

