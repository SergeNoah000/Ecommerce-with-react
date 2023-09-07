const {CartItem} = require('../config/Database')
module.exports = (app) => {
    app.patch("/cart/:productId", async (req, res) => {
        try {
          const { productId } = req.params;
          const { quantity } = req.body;
          await CartItem.update({ quantity }, { where: { id_prod: productId } });
          res.sendStatus(200);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Une erreur est survenue lors de la mise à jour de la quantité de l'article." });
        }
      });
}
