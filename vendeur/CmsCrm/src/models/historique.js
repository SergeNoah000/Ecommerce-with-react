const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('pokedex', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT',
  },
  logging: false
})
const Client = require('./client');

  const Historique = sequelize.define('historique', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
      montant_total: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      qte_cmd: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    });
    Historique.belongsTo(  Client);
   
   Client.hasMany(Historique);
module.exports =  Historique;
(async() => {
await Historique.sync({alter: true})
} )();


























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































