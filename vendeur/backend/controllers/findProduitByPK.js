const  Product = require('../controllers/config/Produit')
  
module.exports = (app) => {
  app.get('/api/produit/:id', (req, res) => {
    Product.findByPk(req.params.id)
      .then(produit => {
        const message = 'Un article a bien été trouvé.'
        res.json({ message, data: produit })
      })
  })
}