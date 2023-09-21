const { Article } = require('../db/sequelize');

module.exports = (app) => {
  app.get('/api/articles', (req, res) => {
    Article.findAll({ order: [['id', 'DESC']] })
      .then((articles) => {
        const message = "La liste d'articles a bien été récupérée.";
        res.json({ message, data: articles });
      })
      .catch((error) => {
        const message = "Une erreur s'est produite lors de la récupération de la liste d'articles.";
        res.status(500).json({ message, error });
      });
  });
};