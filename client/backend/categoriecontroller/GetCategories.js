const Product = require('../models/ProduitsModel');
const Categorie = require('../models/CategoriesModel');

module.exports = (app) => {
  app.get('/categories', async (req, res) => {
    try {
      const categories = await Categorie.findAll({order: [['id', 'desc']]
    });
      console.log("\n\n Categories trouvees: "+ categories);
      const categoriesWithProduct = await Promise.all(
        categories.map(async (categorie) => {
          const product = await Product.findOne({
            where: {
              categorieId: categorie.id
            },
            order: [['id', 'asc']]
          });
          return {
            ...categorie.toJSON(),
            un: product
          };
        })
      );
      res.json(categoriesWithProduct);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });
};
