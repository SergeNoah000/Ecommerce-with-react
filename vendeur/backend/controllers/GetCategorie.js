  //Récupération des l'ensemble des categorie
  const express = require('express');
const connection = require('./config/DataBase');
const getting = express.Router();

getting.get('/categories', (req, res) => {
  try {
    // Récupérer tous les categories
    const getAllcategorieQuery = 'SELECT * FROM categorie';
    connection.query(getAllcategorieQuery, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des categories' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des categorie' });
  }
});

module.exports = getting;