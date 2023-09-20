const connection=require('../config/DataBase')

const express = require('express');
const suppression = express.Router();


//suppression d'un promotion spécifique
suppression.delete('/promotions/:id', async (req, res) => {
  try {
    const { id_promotion} = req.params;

    // Vérifier si le promotion  existe avant de le supprimer
    const getPromotionQuery = 'SELECT * FROM promotion  WHERE id_promotion  = ?';
    const [existingPromotion] = await connection.query(getPromotionQuery, [id_promotion]);

    if (![existingPromotion]  || existingPromotion.length === 0) {
      return res.status(404).json({ message: 'promotion non trouvé' });
    }

    // Supprimer DE LA promotion  de la base de données
    const deletePromotionQuery = 'DELETE FROM promotion  WHERE id_promotion = ?';
    await connection.query(deletePromotionQuery, [id_promotion]);

    res.status(200).json({ message: 'promotion  supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de la promotion ' });
  }
});


module.exports=suppression;