/**
 * @class User
 * @classdesc Representa a entidade Usuário no domínio da aplicação.
 * Gerencia a estrutura de dados e autenticação de usuários em memória.
 */

const usuarios = [
  {
    id: 1,
    nome: "Administrador",
    email: "admin@email.com",
    senha: "123456",
  },
];

/**
 * Autentica um usuário com base no email e na senha informados.
 * @param {string} email - Endereço de email do usuário.
 * @param {string} senha - Senha de acesso do usuário.
 * @returns {{id: number, nome: string, email: string, senha: string}|null} Usuário autenticado ou `null` se as credenciais forem inválidas.
 */
exports.autenticar = (email, senha) => {
  return usuarios.find((usuario) => usuario.email === email && usuario.senha === senha) || null;
};
