const usuarios = [
  {
    id: 1,
    nome: "Administrador",
    email: "admin@email.com",
    senha: "123456",
  },
];

exports.autenticar = (email, senha) => {
  return usuarios.find((usuario) => usuario.email === email && usuario.senha === senha) || null;
};
