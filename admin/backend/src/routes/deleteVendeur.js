const { Vendeur } = require('../db/sequelize');

module.exports = (app) => {
  app.delete('/api/vendeur/:id', (req, res) => {
    Vendeur.findByPk(req.params.id)
      .then((vendeur) => {
        if (!vendeur) {
          const message = "Le vendeur que vous essayez de supprimer n'existe pas";
          return res.status(404).json({ message });
        }

        const articleDeleted = vendeur;

        return Vendeur.destroy({
          where: { id: vendeur.id },
        })
          .then((_) => {
            const message = `Le vendeur avec l'identifiant n°${req.params.id} a bien été supprimé.`;
            res.json({ message, data: articleDeleted });
          })
          .catch((error) => {
            console.error(error);
            const message = "Une erreur s'est produite lors de la suppression du vendeur.";
            res.status(500).json({ message });
          });
      })
      .catch((error) => {
        console.error(error);
        const message = "Une erreur s'est produite lors de la recherche du vendeur.";
        res.status(500).json({ message });
      });
  });
};