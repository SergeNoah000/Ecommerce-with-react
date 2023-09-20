const express = require('express');
// const connection= require('./controllers/config/DataBase')
// const fileUpload = require('express-fileupload');
const getting=require('./controllers/GetProducts')
const cors = require('cors');
const router=require('./controllers/ProductCreate')
const unique=require('./controllers/GetProductById')
const GetCategorie=require('./controllers/GetCategorie')
const CategorieCreate =require('./controllers/CategorieCreate')
const ProductByVendor =require('./controllers/GetProduitsByVendorId')


const CreatePromo = require('./controllers/routes/CreatePromo');
const gettings = require('./controllers/routes/GetPromoById');
const uniques = require('./controllers/routes/GetPromotion');
const suppression = require('./controllers/routes/PromotionDelete');


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
app.use(ProductByVendor)
app.use(suppression);
app.use(CreatePromo)
app.use(gettings);
app.use(uniques);

// require('./contr?ollers/findProduitByPK')(app)
// Démarrer le serveur
app.listen(5000, () => {
  console.log('Le serveur est en cours d\'exécution sur le port 5000, \n Profitez de la vie🙃');
});

