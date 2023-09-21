  //Récupération des l'ensemble des produits
  const express = require('express');
const { Sequelize , DataTypes } = require("sequelize");
const connection =require('../config/DataBase')
const unique = express.Router();


unique.post('/promotion', (req, res) => {
  try {
    const { vendeurId } = req.body;
    // Récupérer tous les promotions
    const getAllPromotionQuery = 'SELECT * FROM Promotion WHERE vendeurId = ? ORDER BY id_promotion DESC';
    connection.query(getAllPromotionQuery, [vendeurId], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des promotions' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des promotions' });
  }
});

module.exports = unique;