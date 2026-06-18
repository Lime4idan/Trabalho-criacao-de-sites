/**
 * @controller HomeController
 * @description Gerencia as requisições HTTP da página inicial da aplicação.
 */

/**
 * Renderiza a página inicial do sistema.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Renderiza a view da home com o título da página.
 */
exports.index = (req, res) => {
  res.render("home", { titulo: "Página Inicial" });
};
