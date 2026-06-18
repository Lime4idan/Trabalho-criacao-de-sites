/**
 * @controller AuthController
 * @description Gerencia as requisições HTTP relacionadas à autenticação de usuários.
 */

const User = require("../models/User");

/**
 * Exibe a tela de login para usuários não autenticados.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Renderiza a página de login ou redireciona para a home se já estiver autenticado.
 */
exports.loginForm = (req, res) => {
  if (req.session.user) {
    return res.redirect("/");
  }

  res.render("login", {
    titulo: "Login",
    erro: null,
  });
};

/**
 * Valida as credenciais do usuário e cria a sessão de autenticação.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Redireciona para a home se autenticado ou renderiza login com status 401 em caso de erro.
 */
exports.login = (req, res) => {
  const { email, senha } = req.body;
  const usuario = User.autenticar(email, senha);

  if (!usuario) {
    return res.status(401).render("login", {
      titulo: "Login",
      erro: "Email ou senha inválidos.",
    });
  }

  req.session.user = {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
  };

  return res.redirect("/");
};

/**
 * Encerra a sessão do usuário autenticado e remove o cookie de sessão.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Redireciona para a página de login após destruir a sessão.
 */
exports.logout = (req, res) => {
  req.session.destroy((erro) => {
    if (erro) {
      return res.status(500).send("Erro ao encerrar sessão.");
    }

    res.clearCookie("connect.sid");
    return res.redirect("/login");
  }); 
};
