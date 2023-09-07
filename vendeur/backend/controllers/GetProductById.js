const express = require('express');
const connection = require('./config/DataBase');
const unique = express.Router();

// Route pour obtenir un produit spécifique
unique.get('/products/:id', (req, res) => {
  try {
    const { id } = req.params;

    // Récupérer les données du produit spécifique
    const getProductQuery = 'SELECT * FROM produits WHERE id_produit = ?';
    connection.query(getProductQuery, [id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération du produit' });
      } else if (results.length === 0) {
        res.status(404).json({ message: 'Produit non trouvé' });
      } else {
        const product = results[0];
        res.status(200).json(product);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération du produit' });
  }
});

module.exports = unique;