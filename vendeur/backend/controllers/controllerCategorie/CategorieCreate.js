const express = require('express');
// const multer = require('multer');
// const path = require('path');
const connection = require('../config/')

const router = express.Router();

// Route pour créer une nouvelle catégorie
router.post('/categories', async (req, res) => {
  try {
    const { nom_categorie, description_categorie } = req.body;

    


    // Insérer les données du produit dans la base de données
    const result = await connection.query(
      'INSERT INTO categorie ( nom_categorie, description_categorie) VALUES (?, ?)',
      [ nom_categorie, description_categorie]
    );

    res.status(201).json({ message: 'categorie créé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de categorie' });
  }
});

module.exports = router;