const{ DataTypes} = require('sequelize')
const {sequelize} = require('../config/Database')


 const Demand = sequelize.define('Demande' , {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantite:{
            type: DataTypes.INTEGER,
            allowNull: false,
            min:1
        },
    },
    {                                                                
        timestamps: true,
})

 




module.exports = Demand;
