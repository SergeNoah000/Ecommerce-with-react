const {  DataTypes,  UUIDV4 } = require("sequelize");
const {sequelize} = require("../config/Database");
const Produit = require("./ProduitsModel");
// const { DataTypes } = Sequelize;

const Categorie = sequelize.define('categorie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
    
  },
  nom_categorie: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 100],
    },
  },
  description_categorie: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
      len: [3, 500],
    },
  },
},{
  freezeTableName: true
}, 
);




module.exports = Categorie;
