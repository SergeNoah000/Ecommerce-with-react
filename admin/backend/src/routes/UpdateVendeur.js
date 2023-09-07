const express = require('express');
const router = express.Router();

// Importez les fonctions nécessaires depuis votre fichier Sequelize
const { Vendeur } = require('../db/sequelize');

// Définissez la route pour la modification d'un vendeur
module.exports = (app) => { 
app.put('/vendeurs/:id', async (req, res) => {
  const { id } = req.params; // Récupérez l'ID du vendeur à modifier depuis les paramètres de la requête
  const updatedVendeur = req.body; // Récupérez les nouvelles informations du vendeur depuis le corps de la requête

  try {
    // Recherchez le vendeur à mettre à jour dans la base de données
    const vendeur = await Vendeur.findByPk(id);

    if (!vendeur) {
      return res.status(404).json({ error: 'Vendeur non trouvé' });
    }

    // Mettez à jour les informations du vendeur avec les nouvelles valeurs
    await vendeur.update(updatedVendeur);

    // Répondez avec le vendeur mis à jour
    return res.json(vendeur);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erreur lors de la modification du vendeur' });
  }
})};

