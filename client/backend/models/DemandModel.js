const {  DataTypes,  UUIDV4 } = require("sequelize");
const {sequelize} = require("../config/Database");
const Produit = require("./ProduitsModel");


(async () => {
  await sequelize.sync({alter:true})
})
module.exports = Demand;
