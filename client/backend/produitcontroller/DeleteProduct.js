const Product = require('../models/ProduitsModel');
const deleteProduct = async (req, res) => {
    const produit = await Product.findOne({
      where: {
        id_produit: req.params.id_produit,
      },
    });
    if (!produit) return res.status(404).json({ msg: "Ce produit n'existe pas" });
    try {
      const filepath = `public/images/${produit.image_produit}`;
      fs.unlinkSync(filepath);
      await Product.destroy({
        where: {
           id_produit: produit.id_produit 
        },
      });
      res.status(200).json({ msg: "Produit supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  

  module.exports = {
    deleteProduct
 };  