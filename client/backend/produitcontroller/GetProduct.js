const Product = require('../models/ProduitsModel');
module.exports = (app) => {
  app.get('/products', (req, res) => {
    Product.findAll()
      .then(product => {
        const msg = 'Liste disponible';
        res.json({ msg, data: product });
      })
      .catch(error => {
        res.status(500).json({ msg: error.message });
      });
  });
};