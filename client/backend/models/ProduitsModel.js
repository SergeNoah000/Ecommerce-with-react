const {  DataTypes,  UUIDV4 } = require("sequelize");
const {sequelize} = require("../config/Database");
const Vendeur = require ('./Vendeur');
const Categorie = require ('./CategoriesModel');
const Promotion = require ('./PromotionModel');
const Demand = require('./DemandModel'); 
const Panier = require('./cart');
const Client = require("./ClientModel");

// const { DataTypes } = Sequelize;

const Product = sequelize.define('produit', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
    
  },
  nom_produit: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  description_produit: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  prix_produit: {
    type: DataTypes.INTEGER,
    allowNull: false,
   
  },
 
  
  image_produit: {
    type: DataTypes.STRING,
    allowNull: true,
   
  },
 
},
{                                                                
  timestamps: true,
  createdAt: 'created',
  updatedAt: false
}                                                             
);

Product.belongsTo(Vendeur)
Vendeur.hasMany(Product)



Product.belongsTo(Categorie);
Categorie.hasMany(Product);


Product.belongsTo(Promotion);
Promotion.hasOne(Product);

Demand.hasOne(Product);
Demand.belongsTo(Product);

Panier.hasMany(Demand);
Demand.belongsTo(Panier);


Client.hasMany(Panier);
Panier.belongsTo(Client)




module.exports = Product;
(async () => {
  await sequelize.sync({alter:true})
})
