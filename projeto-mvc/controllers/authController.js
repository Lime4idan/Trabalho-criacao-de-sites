const User = require("../models/User");

exports.loginForm = (req, res) => {
  if (req.session.user) {
    return res.redirect("/");
  }

  res.render("login", {
    titulo: "Login",
    erro: null,
  });
};

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

exports.logout = (req, res) => {
  req.session.destroy((erro) => {
    if (erro) {
      return res.status(500).send("Erro ao encerrar sessão.");
    }

    res.clearCookie("connect.sid");
    return res.redirect("/login");
  });
};
