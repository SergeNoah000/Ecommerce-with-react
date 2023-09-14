const { Sequelize , DataTypes } = require("sequelize");
const Product = require('../models/ProduitsModel');
const produits = require('./mock-produit');
CartItem = require('../models/cart');

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



const Demand = sequelize.define('Demande', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
    
  },
  quantite: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100],
    },
  },

},{
  freezeTableName: true
}, 
);


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







const Client = sequelize.define('client', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  G_token: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
    nom_complet: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photoProfil: {
    type: DataTypes.STRING,
    allowNull: true
  },
  numeroTelephone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  adresse: {
    type: DataTypes.STRING,
    allowNull: true
  },
  numeroAppartement: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});


Client.hasOne(Panier)
Panier.belongsTo(Client)



Panier.hasMany(Demand);
Demand.belongsTo(Panier);


Demand.belongsTo(Product);
Demand.hasOne(Product);



Demand.belongsTo(Commande);
Commande.hasMany(Panier);
sequelize.sync();


module.exports = { initDb, sequelize , Commande , CartItem , Client};