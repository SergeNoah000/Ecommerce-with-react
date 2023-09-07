const { Sequelize , DataTypes } = require("sequelize");
const Product = require('../models/ProduitsModel');
const produits = require('./mock-produit')

const sequelize = new Sequelize("pokedex", "root", "", {
  host: "localhost",
  dialect: "mysql",
});


const initDb = () => {
  return sequelize.sync().then(() => {
    produits.map(produit => {
      Product.create({
        id_produit: produit.id_produit,
        nom_produit: produit.nom_produit,
        description_produit: produit.description_produit,
        prix_produit: produit.prix_produit,
        image_produit: produit.image_produit,
        url: produit.url
      }).then(produit => console.log(produit.toJSON()));
    });
    console.log('Base de données initialisée avec succès');
  }).catch(error => {
    console.error("Erreur lors de l'initialisation de la base de données:", error);
  });
};



// Définir le modèle pour la table "CartItem"
const CartItem = sequelize.define("CartItem", {
  id_prod: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Définir le modèle pour la table "Commande"
const Commande = sequelize.define("Commande", {
  ville: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quartier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
const Client = sequelize.define('client', {
  id_client:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom_client: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  statut: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  createdAt: 'created',
  updatedAt: false
});

// Définir la relation entre les tables "CartItem" et "Commande"
CartItem.belongsTo(Commande);
Commande.hasMany(CartItem);
sequelize.sync();


module.exports = { initDb, sequelize , Commande , CartItem , Client};