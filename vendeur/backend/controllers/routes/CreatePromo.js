const express = require('express');
// const bodyParser = require('body-parser');

const path = require('path');
const connection=require('../config/DataBase')
const router = express.Router();



// // Configurer le middleware body-parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Route pour créer une nouvelle promotion pour un vendeur spécifique
router.post('/promotion', (req, res) => {
  try {
    const { id_promtion, code_promotion, titre_promotion, description_promotion, type_reduction, valeur_reduction, date_debut, date_fin, montant_achat_min, produits_applicables, client_applicables } = req.body;

    // Vérifier si la valeur de code_promotion est nulle
    if (!code_promotion) {
      return res.status(500).json({ message: "La valeur de 'code_promotion' ne peut pas être nulle" });
    }
    

    // Construction de la requête SQL
    const query = 'INSERT INTO promotion (id_promotion, code_promotion, titre_promotion, description_promotion, type_reduction, valeur_reduction, date_debut, date_fin, montant_achat_min, produits_applicables, client_applicables) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [ id_promtion, code_promotion, titre_promotion, description_promotion, type_reduction, valeur_reduction, date_debut, date_fin, montant_achat_min, produits_applicables, client_applicables];

    // Exécution de la requête SQL
    connection.query(query, values, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Une erreur est survenue lors de la création de la promotion' });
      } else {
        res.status(201).json({ message: 'Promotion créée avec succès' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de la promotion' });
  }
});







// router.post('/promotion', (req, res) => {
//   try {
//     const {id_promotion,  code_promotion, titre_promotion, description_promotion, type_reduction, valeur_reduction , date_debut, date_fin, montant_achat_min, produits_applicables , client_applicables
//     } = req.body;

//     // Construction de la requête SQL
//     const query = 'INSERT INTO promotion (id_promotion, code_promotion, titre_promotion, description_promotion, type_reduction, valeur_reduction , date_debut, date_fin, montant_achat_min, produits_applicables , client_applicables) VALUES (?, ?, ?, ?, ?, ?,?,?,?,?, NOW())';
//     const values = [id_promotion, code_promotion, titre_promotion, description_promotion, type_reduction, valeur_reduction , date_debut, date_fin, montant_achat_min, produits_applicables , client_applicables];
    
//     // Exécution de la requête SQL
//     connection.query(query, values, (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Une erreur est survenue lors de la création de la promtion' });
//       } else {
//         res.status(201).json({ message: 'Promotion créé avec succès' });
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Une erreur est survenue lors de la création du promotion' });
//   }
// });

module.exports = router;