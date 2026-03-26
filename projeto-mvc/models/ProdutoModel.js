let produtos = [
  { id: 1, nome: "Nintendo Switch 2", preco: 5000, descricao: "Console Nintendo de última geração" },
  { id: 2, nome: "PS5 Pro", preco: 2000, descricao: "Console Sony" }
];

let nextId = 3;

const listarProdutos = () => produtos;

const buscarPorId = (id) => produtos.find((p) => p.id === id);

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

const atualizarProduto = (id, { nome, preco, descricao }) => {
  const index = produtos.findIndex((p) => p.id === id);
  if (index === -1) return null;
  produtos[index] = { id, nome, preco: Number(preco), descricao };
  return produtos[index];
};

const removerProduto = (id) => {
  const index = produtos.findIndex((p) => p.id === id);
  if (index === -1) return false;
  produtos.splice(index, 1);
  return true;
};

module.exports = {
  listarProdutos,
  buscarPorId,
  adicionarProduto,
  atualizarProduto,
  removerProduto
};

