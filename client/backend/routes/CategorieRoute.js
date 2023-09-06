const express = require('express');
const app = express()
// const GetProduct = require('../produitcontroller/GetProduct');
require('../categoriecontroller/GetCategorieById');
require("../produitcontroller/SearchProducts");
const getCategorie = require('../categoriecontroller/GetCategories');

const router = express.Router();

// require('../produitcontroller/GetProduct')(app)
//('/products/:id', GetProductById.getProductById);

module.exports = router;