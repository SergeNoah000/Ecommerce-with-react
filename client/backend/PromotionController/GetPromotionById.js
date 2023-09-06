


const Product = require('../models/ProduitsModel');
const Promotion = require('../models/PromotionModel');

module.exports = (app) => {
  app.get('/promo/', async (req, res) => {

    
    try {
      const categories = await Promotion.findAll(
        {
          order: [['id', 'ASC']]
        }
      );
      const categoriesWithProduct = await Promise.all(
        categories.map(async (categorie) => {
          
          const product = await Product.findOne({
            where: {
              promotionId: categorie.id
            },
            order: [['id', 'ASC']]
          });
          return {
           ...categorie.toJSON(),
            product : product
          };
        })
      );
      res.json(categoriesWithProduct);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
};
