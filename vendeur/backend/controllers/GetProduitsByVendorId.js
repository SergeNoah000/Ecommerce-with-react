const express = require('express');
const connection = require('./config/DataBase');

const router = express.Router();

// Route pour récupérer les produits d'un vendeur spécifique
router.get('/vendeurs/produitsByVendor/:vendeurId', (req, res) => {
  try {
    const vendeurId = req.params.vendeurId; // Récupérer l'ID du vendeur depuis les paramètres de la route

    // Construction de la requête SQL pour récupérer les produits du vendeur
    const query = 'SELECT * FROM produits INNER JOIN categorie ON produits.categorieId = categorie.id WHERE vendeurId = ?';
    const values = [vendeurId];

    // Exécution de la requête SQL
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des produits.', error });
      } else {
        res.status(200).json({ message: 'Produits récupérés avec succès', results });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des produits.', error });
  }
});

module.exports = router;