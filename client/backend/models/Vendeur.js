const{ DataTypes} = require('sequelize')
const {sequelize} = require('../config/Database')
const Product  = require('./ProduitsModel')

 const Vendeur =    sequelize.define('vendeur' , {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom:{
            type: DataTypes.STRING,
            allowNull: false
        },
        information_vendeur:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cathegorie_produit:{
            type: DataTypes.STRING,
            allowNull: false
        },
        profil:{
            type: DataTypes.STRING,
            allowNull:false
        },
       password:{
        type: DataTypes.STRING,
        allowNull: false,
        require: true
       }
    },
    {                                                                
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    

})

module.exports = Vendeur

 