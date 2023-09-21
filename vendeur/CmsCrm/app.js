const express = require('express')
const morgan = require('morgan')
const favicon  = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const app = express()
const port = 8080
const cors = require('cors')

  //midleward
app
   .use(favicon(__dirname + '/favicon.ico'))
   .use(morgan('dev'))
   .use(bodyParser.json()) 
   .use(cors()) 
// initialisation de la base de donner et ajout des articles par defaut

sequelize.initDb()

//ici nous ajoutons nos future point de terminaison(routes)
 require('./src/routes/findAllArticles')(app)
 require('./src/routes/findArticleByPk')(app)
 require('./src/routes/createArticle')(app)
 require('./src/routes/updateArticle')(app)
 require('./src/routes/deleteArticle')(app)
 require('./src/routes/getArticlesByVendorId')(app)
 require('./src/routes/getclientVIP')(app)
// on ajouter la gestio des erreur 494

app.use( ({res})=>{
   const message = 'impossible de trouver le ressource essayer un autre URL'
   res.status(404).json({message})
})


// conection a la base de donnée
//  const sequelize = new Sequelize( 
//     'pokedex',
//     'root',
//     '',
//     {
//         host:'localhost',
//         dialect:'mariadb',
//         dialectOptions:{
//             timezone:'Etc/GMT-2'
//         },
//         logging: false 
//     }
// )
// sequelize.authenticate()
//  .then(_ => console.log('la connexion a la base de done a bien ete reussi'))
//  .catch(error => console.error(`impossible de ce connecter la base de donnee ${error}`))

// const articleAjouterAlaBaseDD = artclesModel (sequelize , DataTypes)
// sequelize.sync({force: true})
//    .then(_ =>{   console.log('la base de donnee a bien ete synchrniser')
//    articles.map(article => {
//     articleAjouterAlaBaseDD.create({
//         name:article.name,
//         hp:article.hp,
//         cp:article.cp,
//         picture:article.picture,
//         types:article.types.join()
//     }).then(name => console.log(name.toJSON()))
//    })
// })
  

  

 
//routes
// app.get('/', (req,res)=> res.send('Hello again, express'))

// app.get('/api/articles/:id', (req,res)=> {
//     const id = parseInt(req.params.id)

//     const article = articles.find(article => article.id === id)
//     const message = 'article a ete bien recu'
//     res.json(success(message, article))
// })
// app.post('/api/articles', (req, res) => {
//     const id = getUniqueId(articles)
//     const articleCreated = { ...req.body, ...{id: id, created: new Date()}}
//     articles.push(articleCreated)
//     const message = ` article ${articleCreated.name} a bien été crée.`
//     res.json(success(message, articleCreated))
//   })
//   app.put('/api/articles/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const articleUpdated = { ...req.body, id: id }
//     articles = article.map(article => {
//      return article.id === id ? articleUpdated : article
//     })
     
//     const message = `article ${articleUpdated.name} a bien été modifié.`
//     res.json(success(message, articleUpdated))
//    });
// app.delete('/api/articles/:id' , (req , res)=>{
//     const id  = parseInt(req.params.id)
//     const articleDelete = articles.find(article=>article.id === id)
//     articles = articles.filter(article => article.id !== id)
//     const message  = `article ${articleDelete.name} a bien ete supprimer `
//     res.json(success(message , articleDelete))
// })
  
// app.get('/api/articles' , (req,res)=>{
//      const message = 'la liste de pokemon a bien ete recu '
//     res.json(success( message , articles))
// })

app.listen(port, () => console.log(`Notre application Node a bien demarer sur : http://localhost:${port}`))