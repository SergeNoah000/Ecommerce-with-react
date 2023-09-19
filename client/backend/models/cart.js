const{ DataTypes} = require('sequelize')
const {sequelize} = require('../config/Database')

 const Panier =    sequelize.define('Panier' , {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        prix_total:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {                                                                
        timestamps: true,
    

})

module.exports = Panier

 