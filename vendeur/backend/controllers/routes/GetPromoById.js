 //Récupération des l'ensemble des promotion
 const express = require('express');
 const getting = express.Router();
 const connection = require('../config/DataBase');

 // Route pour obtenir un promotion spécifique
 getting.get('/promotion/:id', (req, res) => {
  try {
    const { id } = req.params;

    // Récupérer les données du promotion spécifique
    const getPromotionQuery = 'SELECT * FROM promotion WHERE id_promotion = ?';
    connection.query(getPromotionQuery, [id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de la promotion' });
      } else if (results.length === 0) {
        res.status(404).json({ message: 'promotion non trouvé' });
      } else {
        const promotion = results[0];
        res.status(200).json(promotion);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de la promotion' });
  }
});
 
 module.exports = getting;