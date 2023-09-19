const{ DataTypes} = require('sequelize')
const {sequelize} = require('../config/Database')

 const Client =    sequelize.define('client' , {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom_complet:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        G_token:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        img_url:{
            type: DataTypes.STRING,
            allowNull:false
        },
       password:{
        type: DataTypes.TEXT,
        allowNull: false,
        require: true
       }
    },
    {                                                                
        timestamps: true,
    

})

module.exports = Client

 