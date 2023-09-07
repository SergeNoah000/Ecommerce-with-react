const Produit = require('../models/modelProduit');

// Récupérer les produits d'un vendeur spécifique
exports.getProduitsByVendeur = async (req, res) => {
  const vendeurId = req.vendeurId;

  try {
    // Récupérer les produits du vendeur
    const produits = await Produit.find({ vendeurId });

    res.json(produits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur de serveur' });
  }
};