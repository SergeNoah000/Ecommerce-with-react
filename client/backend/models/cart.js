
const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/Database');


const CartItem = sequelize.define("CartItem", {
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

module.exports = CartItem;