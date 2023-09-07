const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const app = express()
const port = 3001
const cors = require('cors')
const authMiddleware = require('./src/db/authMiddleware')
const ProduitController = require('./src/routes/ProduitController')
  //midleward
app
   .use(express.json())
   .use(morgan('dev'))
   
   .use(bodyParser.json()) 
   .use(cors()) 
   .use(session({
      secret: 'MaCléSecrèteSuperSecrète123!', // Clé secrète pour signer les cookies de session
      resave: false, // Ne pas enregistrer la session si elle n'a pas été modifiée
      saveUninitialized: false // Ne pas sauvegarder les sessions non initialisées
    }));

// initialisation de la base de donner et ajout des articles par defaut

sequelize.initDb()

//ici nous ajoutrons nos future point de terminaison(routes)

require('./src/routes/findAllVendeur')(app)
 require('./src/routes/CreateVendeur')(app)
 require('./src/routes/deleteVendeur')(app)
 require('./src/routes/AuthAdmin')(app)
 require('./src/routes/AuthVendeur')(app)
 require('./src/routes/UpdateVendeur')(app)
 require('./src/routes/GetProduitVendeur')(app)
 require('./src/routes/ProduitRoute')(app)
// require('./src/routes/ProduitRoute')(app)

// on ajouter la gestio des erreur 494

app.use( ({res})=>{
   const message = 'impossible de trouver le ressource essayer un autre URL'
   res.status(404).json({message})
})



app.listen(port, () => console.log(`Notre application Node a bien demarer sur : http://localhost:${port}`))