  //Récupération des l'ensemble des produits
  const express = require('express');
const connection = require('./config/DataBase');
const getting = express.Router();

getting.get('/products', (req, res) => {
  try {
    // Récupérer tous les produits
    const getAllProductsQuery = 'SELECT * FROM produits';
    connection.query(getAllProductsQuery, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des produits' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des produits' });
  }
});

module.exports = getting;