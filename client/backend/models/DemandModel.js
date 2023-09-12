const {  DataTypes,  UUIDV4 } = require("sequelize");
const {sequelize} = require("../config/Database");
const Produit = require("./ProduitsModel");
const Panier = require("./cart");

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
      len: [3, 100],
    },
  },

},{
  freezeTableName: true
}, 
);

Panier.hasMany(Demand);
Demand.belongsTo(Panier);


Demand.belongsTo(Produit);
Demand.hasOne(Produit);


(async () => {
  await sequelize.sync({alter:true})
})
module.exports = Demand;
