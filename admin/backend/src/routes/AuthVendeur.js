// const {loginVendeur} = require('../db/sequelize')
// // module.exports = (app) => { 
// // app.post('/api/logvendeur', async (req, res) => {
// //     const { nom, password } = req.body;
  
   
// //     loginVendeur(nom, password)
// //     .then((result) => {
// //       const { success, message } = result;
// //       if (success) {
// //         // Connexion réussie
// //         res.json({ success, message });
// //       } else {
// //         // Connexion échouée
// //         res.status(401).json({ success, message });
// //       }
// //     })
// //     .catch((error) => {
// //       // Erreur lors de la connexion
// //       res.status(500).json({ success: false, message: error.message });
// //     });
// // });
// // };
// const express = require('express');
// const router = express.Router();
// const authController = require('../db/authController');

// router.post('/login', authController.loginVendeur);

// module.exports = router;
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const vendeur = require('../models/modelVendeur');
const { sequelize } = require('../db/sequelize');
const { DataTypes } = require('sequelize');
const Vendeur = vendeur(sequelize , DataTypes)
module.exports = (app) => {
    app.post('/login' ,  async (req , res) => {
        const { nom, password } = req.body;

  try {
    // Vérifier si le vendeur existe dans la base de données
    const vendeurExistant = await Vendeur.findOne({ where: { nom } });
    if (!vendeurExistant) {
      return res.status(401).json({ message: "Nom de vendeur invalide" });
    }

    // Vérifier si le mot de passe correspond
    const passwordValide = await bcrypt.compare(password, vendeurExistant.password);
    if (!passwordValide) {
      return res.status(401).json({ message: "Mot de passe invalide" });
    }

    // Générer un token JWT
    const token = jwt.sign({ vendeurId: vendeurExistant.id }, '1234'); // Remplacez 'votreSecretJWT' par votre propre clé secrète JWT

    // Renvoyer le token JWT au client
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur de serveur" });
  }
    })
}