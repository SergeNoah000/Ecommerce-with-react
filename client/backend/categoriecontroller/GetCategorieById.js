


const Product = require('../models/ProduitsModel');
const Categorie = require('../models/CategoriesModel');

module.exports = (app) => {
  app.get('/categorie/:id', async (req, res) => {
    try {
      const categories = await Categorie.findAll(
        {
          where: {
            id: req.params.id
          },
          order: [['id', 'ASC']]
        }
      );
      const categoriesWithProduct = await Promise.all(
        categories.map(async (categorie) => {
          const products = await Product.findAll({
            where: {
              categorieId: categorie.id
            },
            order: [['id', 'ASC']]
          });
          const product = await Product.findOne({
            where: {
              categorieId: categorie.id
            },
            order: [['id', 'ASC']]
          });
          return {
           categories:categorie.toJSON(),
            products: products,
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
