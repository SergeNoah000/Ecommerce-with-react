const { Op } = require('sequelize');
const Product = require('../models/ProduitsModel');

module.exports = (app) => {
  app.get('/products/search', (req, res) => {
    const searchTerm = req.query.q; // Récupère la chaîne de recherche de l'URL

    // Utilise la chaîne de recherche pour effectuer la recherche dans la base de données
    Product.findAll({
      where: {

        [Op.or]: [
            { nom_produit: { [Op.like]: `%${searchTerm}%` } },
            { description_produit: { [Op.like]: `%${searchTerm}%` } },
            // Ajoute d'autres champs ici selon tes besoins
          ],
        
      }
    })
      .then(products => {
        res.json({ data: products });
      })
      .catch(error => {
        res.status(500).json({ msg: error.message });
      });
  });
};