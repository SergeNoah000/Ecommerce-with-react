const {  DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pokedex', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT',
  },
  logging: false
})
const Vendeur = require('./Vendeur');

    const Article = sequelize.define('article', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contenu: {
        type: DataTypes.STRING,
        allowNull: false
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false
      },
 }, {                                                                
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  
  Article.belongsTo(Vendeur);
   Vendeur.hasMany(Article);

   
   (async() => {
    await Article.sync({alter: true})
    } )()

    
   module.exports = Article