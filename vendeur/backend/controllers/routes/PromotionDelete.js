const express = require('express');
const suppression = express.Router();

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("pokedex", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Promotion = sequelize.define('Promotion', {
  id_promotion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code_promotion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description_promotion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  type_reduction: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valeur_reduction: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 99999,
    }
  },
  date_debut: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  date_fin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  montant_achat_min: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  freezeTableName: true
});

// Suppression d'une promotion spécifique
suppression.delete('/promotions/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Vérifier si la promotion existe avant de la supprimer
    const existingPromotion = await Promotion.findOne({ where: { id_promotion: id } });

    if (!existingPromotion) {
      return res.status(404).json({ message: 'Promotion non trouvée' });
    }

    // Supprimer la promotion de la base de données
    await existingPromotion.destroy();

    res.status(200).json({ message: 'Promotion supprimée avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de la promotion' });
  }
});

module.exports = suppression;