const express = require('express');
const app = express()
// const GetProduct = require('../produitcontroller/GetProduct');
const GetProductById = require('../produitcontroller/GetProductById');
const DeleteProduct = require('../produitcontroller/DeleteProduct');
const SaveProduct = require('../produitcontroller/SaveProduct');
const UpdateProduct = require('../produitcontroller/UpdateProduct');

const router = express.Router();

// router.get('/products', GetProduct.getProducts);
// require('../produitcontroller/GetProduct')(app)
//t('/products/:id', GetProductById.getProductById);
router.post('/products', SaveProduct.saveProduct);
router.patch('/products/:id', UpdateProduct.updateProduct);
router.delete('/products/:id', DeleteProduct.deleteProduct);

module.exports = router;