const Product = require('../models/ClientModel');
module.exports = (app) => {
  app.get('/clients', (req, res) => {
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