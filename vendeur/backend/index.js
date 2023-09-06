const express = require('express');
// const connection= require('./controllers/config/DataBase')
// const fileUpload = require('express-fileupload');
const getting=require('./controllers/GetProducts')
const cors = require('cors');
const router=require('./controllers/ProductCreate')
const unique=require('./controllers/GetProductById')
const GetCategorie=require('./controllers/GetCategorie')
const CategorieCreate =require('./controllers/CategorieCreate')
const app = express();

// Votre code Express.js ici...
app.use(cors());
app.use(express.json());
app.use('./img' , express.static('public'))
app.use(router)

app.use(getting);
app.use(unique)
app.use(CategorieCreate)
app.use(GetCategorie)

// require('./contr?ollers/findProduitByPK')(app)
// Démarrer le serveur
app.listen(5000, () => {
  console.log('Le serveur est en cours d\'exécution sur le port 5000, \n Profitez de la vie🙃');
});