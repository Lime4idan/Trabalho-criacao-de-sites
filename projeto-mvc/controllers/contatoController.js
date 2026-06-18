/**
 * @controller ContatoController
 * @description Gerencia as requisições HTTP da página de Contato da aplicação.
 */

/**
 * Renderiza a página de Contato do sistema.
 * @param {import('express').Request} req - Objeto de requisição do Express.
 * @param {import('express').Response} res - Objeto de resposta do Express.
 * @returns {void} Renderiza a view de contato com o título da página.
 */
exports.index = (req, res) => {
  res.render("contato", { titulo: "Contato" });
};
