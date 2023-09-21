const mysql = require('mysql');
const multer = require('multer');
const express = require('express');
const fs = require('fs');
const path = require('path');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pokedex'
});
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'temps';
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
module.exports = (app) => {
  
  app.post('/article/:vendeurId', upload.single('picture'),  (req, res) => {
    try {
      // Récupérer les données du formulaire
      const { titre, contenu } = req.body;
      const picture = req.file  
  
      if (picture) {
        // Déplacer le fichier vers le dossier de destination
        const destinationPath = path.join(__dirname, './../../../../images/uploaded', picture.filename);
        fs.renameSync(picture.path, destinationPath);
      }
  
      const vendeurId = req.params.vendeurId; // Récupérer l'ID du vendeur depuis les paramètres de la route
      console.log("vendeurId"  , vendeurId);
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      // Construction de la requête SQL pour insérer les données dans la base de données
      const query = 'INSERT INTO articles (titre, contenu, picture, created , vendeurId) VALUES (?, ?, ?, ? , ?)';
      const values = [titre, contenu, picture.filename, formattedDate ,  vendeurId];
  
      // Exécution de la requête SQL
      connection.query(query, values, (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Une erreur est survenue lors de la création du l\'article' });
        } else {
          res.status(201).json({ message: `  l\'article ${req.params.titre}  créé avec succès`, results });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur est survenue lors de la création du produit' });
    }
  });
};