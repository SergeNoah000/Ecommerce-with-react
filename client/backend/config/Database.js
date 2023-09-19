const { Sequelize , DataTypes } = require("sequelize");
const Product = require('../models/ProduitsModel');
const produits = require('./mock-produit');

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





// Définir le modèle pour la table "Commande"
const Commande = sequelize.define("Commande", {
  addresse: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue : "Non Livre"
  },
});





const Panier = sequelize.define("Panier", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  prixTotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{
  freezeTableName: true
}, 
{                                                                
  timestamps: true,
}  );




sequelize.sync();


module.exports = { initDb, sequelize , Commande };