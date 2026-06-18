/**
 * @controller SobreController
 * @description Gerencia as requisições HTTP da página Sobre da aplicação.
 */

/**
 * Renderiza a página Sobre do sistema.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Renderiza a view sobre com o título da página.
 */
exports.index = (req, res) => {
  res.render("sobre", { titulo: "Sobre" });
};
