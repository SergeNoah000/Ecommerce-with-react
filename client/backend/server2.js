const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const ProduitRoute = require('./routes/ProduitRoute') ;
const CategoriesRoute = require('./routes/CategorieRoute') ;
const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(ProduitRoute);
app.use(CategoriesRoute);

require('../backend/clientcontroller/sign-in')(app)
require('../backend/clientcontroller/ClientCreate')(app)
require('../backend/clientcontroller/UserCartCreate')(app)
require('../backend/clientcontroller/GetAllClients')(app)
require('../backend/produitcontroller/GetProduct')(app)
require('../backend/categoriecontroller/GetCategories')(app)
require('../backend/produitcontroller/GetProductById') (app)
require('./categoriecontroller/GetCategories')(app)
require('./categoriecontroller/GetCategorieById')(app)
require('../backend/produitcontroller/SearchProducts')(app)
require('../backend/PromotionController/GetPromotionById')(app)
require('../backend/PromotionController/GetPromotionRandomly')(app)
app.use (({res}) => {
    const message = 'imposible de trouver la ressource'
    res.status(404).json({message})
} )
app.listen(7200,()=> console.info('serveur [ CLIENT-BACKEND ] en lecture sur le port 7200'));
