const express = require('express');
// const multer = require('multer');
const path = require('path');
const connection = require('./config/DataBase')

const router = express.Router();

// Route pour créer une nouvelle catégorie
router.post('/categories/create', async (req, res) => {
  try {
    const { nom_categorie, description_categorie } = req.body;

    const date = new Date();
    const dat = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
    // Insérer les données du produit dans la base de données
    const result = await connection.query(
      'INSERT INTO categorie ( nom_categorie, description_categorie, createdAt, updatedAt) VALUES (?, ?, ?, ?)',
      [ nom_categorie, description_categorie, dat.toString(), dat.toString()]
    );

   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de categorie  '+ error });
  }

  res.status(201).json({ message: 'categorie créé avec succès' });
});

module.exports = router;