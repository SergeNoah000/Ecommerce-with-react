
const {  DataTypes,  UUIDV4 } = require("sequelize");
const {sequelize} = require("../config/Database");
const Product = require("./ProduitsModel");;
// const { DataTypes } = Sequelize;

const Promotion = sequelize.define('Promotion', {
  id_promotion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
    
  },
  code_promotion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description_promotion:{
    type: DataTypes.TEXT,
    allowNull: true,
  },
  type_reduction:{
    type: DataTypes.STRING,
    allowNull: false,
  },

  valeur_reduction: {
    type: DataTypes.INTEGER,
    allowNull: false,
    min:1,
    max:99.999,
  },
  date_debut:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  
  date_fin:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  montant_achat_min:{
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  

  
},{
  freezeTableName: true
});




module.exports = Promotion;