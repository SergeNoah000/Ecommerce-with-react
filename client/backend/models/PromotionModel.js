
const {  DataTypes,  UUIDV4 } = require("sequelize");
const {sequelize} = require("../config/Database");
const Product = require("./ProduitsModel");;
// const { DataTypes } = Sequelize;

const Promotion = sequelize.define('Promotion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
    
  },
 
  pourcentage_reduction: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  
},{
  freezeTableName: true
});




module.exports = Promotion;