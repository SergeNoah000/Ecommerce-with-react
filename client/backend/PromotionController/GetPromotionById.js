const Product = require('../models/ProduitsModel');
const Promotion = require('../models/PromotionModel');

module.exports = (app) => {
  app.get('/promo/', async (req, res) => {
    try {
      const promotions = await Promotion.findAll({
        order: [['id_promotion', 'ASC']],
      });

      const promotionsWithProduct = [];

      for (const promotion of promotions) {
        const products = await promotion.getProduits({
          order: [['id', 'DESC']],
          limit: 1,
        });

        const product = products.length > 0 ? products[0] : null;

        if (product) {
          promotionsWithProduct.push({
            ...promotion.toJSON(),
            product: product.toJSON(),
          });
        }
      }

      res.json(promotionsWithProduct);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
};