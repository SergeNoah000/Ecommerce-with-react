const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/Database');
const Panier = require('./../models/cart');





const Client = sequelize.define('client', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
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
    type: DataTypes.STRING
  },
  numeroTelephone: {
    type: DataTypes.STRING
  },
  adresse: {
    type: DataTypes.STRING
  },
  numeroAppartement: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});


Panier.belongsTo(Client)
Client.hasOne(Panier)




module.exports = Client;
