const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const connection = require('./config/DataBase');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'assets/images/';
    fs.mkdirSync(uploadPath, { recursive: true }); // Crée le dossier s'il n'existe pas
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension);
  }
});

const upload = multer({ storage: storage });
const router = express.Router();

// Route pour créer un nouveau produit pour un vendeur spécifique
router.post('/vendeurs/:id/produits', upload.single('image_produit'), (req, res) => {
  try {
    // Récupérer les données du formulaire
    const { nom_produit, categorieId, description_produit, prix_produit } = req.body;
    const image_produit = req.file;
      console.log("\n\n\n categorieId:"+ categorieId + "\n\n\n" );
    // Déplacer l'image vers un emplacement permanent
    const imageNouveauChemin = path.join('assets/images/', image_produit.filename);
    fs.renameSync(image_produit.path, imageNouveauChemin);
    const imagePath = 'assets/images/' + image_produit.filename;

    const vendeurId = req.params.id; // Récupérer l'ID du vendeur depuis les paramètres de la route
    const dat = Date()
    // Construction de la requête SQL pour insérer les données dans la base de données
    const query = 'INSERT INTO produits (nom_produit, description_produit, prix_produit, image_produit, vendeurId, categorieId, created) VALUES (?, ?, ?, ?, ?, ?, NOW())';
    const values = [nom_produit, description_produit, prix_produit, imagePath, vendeurId, categorieId, dat];

    // Exécution de la requête SQL
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la création du produit' });
      } else {
        res.status(201).json({ message: 'Produit créé avec succès', results });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création du produit' });
  }
});

module.exports = router;