const { Sequelize, DataTypes } = require('sequelize')
const Article = require('../models/article')
const articles = require('./mock-articles')
const clients = require("./mock-client")
// const Client= require('../models/client')
// const Historique = require ('../models/historique')

//connectio a la base de donnee
const sequelize = new Sequelize('pokedex', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Etc/GMT',
  },
  logging: false
})
      

     // synchronisez les définitions de modèle avec la base de données
    //  const Article = articleModel(sequelize, DataTypes)
   
  const initDb = () => {
    return sequelize.sync({ force: true  }).then(_ => {
      articles.map(article => {
        Article.create({
          titre: article.titre,
          contenu: article.contenu,
          picture: article.picture,
        }).then(article => console.log(article.toJSON()))
        
    })
    
      console.log('La base de données a bien été initialisée !')
    }).catch(err => console.error(err));
  }

 
  // export du modules
module.exports = { 
   initDb , Article,  sequelize
}