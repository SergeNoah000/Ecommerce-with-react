  //Récupération des l'ensemble des produits
  const express = require('express');
  const connection =require('../config/DataBase')
const unique = express.Router();


unique.get('/promotion', (req, res) => {
  try {
    // Récupérer tous les promotions
    const getAllPromotionQuery = 'SELECT * FROM promotion';
    connection.query(getAllPromotionQuery, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des promotions' });
      } else {
        res.status(200).json(results);
        console.log(results);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des promotion' });
  }
});

module.exports = unique;