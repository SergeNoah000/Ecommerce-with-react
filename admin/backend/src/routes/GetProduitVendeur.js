const jwt = require('jsonwebtoken');
const Produit = require ('../models/modelProduit')
const {authenticate} = require('../db/sequelize')
module.exports = (app) => {
    app.get('/getProductByVendeur/:vendeurId' , authenticate ,  async (req , res ) => {
        const {vendeurId} = req.params;

        try {
          // Récupérer les produits du vendeur
          const produits = await Produit.findOne({ vendeurId });
      
          res.json(produits);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Erreur de serveur' });
        }
    })
}