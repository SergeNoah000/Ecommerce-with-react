

const Produit = require('../models/modelAdmin')
const {authenticate}  = require('../db/sequelize')
// GET /produits : Récupérer les produits d'un vendeur spécifique (authentification requise)
module.exports = (app) => {

    app.get('/vendeurs/:vendeurId/produits', authenticate ,   (req, res) => {
        const { vendeurId } = req.params;
        
        try {
          const produits =  Produit.findAll({ where: { vendeurId } });
          res.json(produits);
        } catch (error) {
          res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des produits.' });
        }
        console.log(vendeurId)
      });

    
  
   
  
;

}

