const {CartItem} = require('../config/Database')
module.exports = (app) => {
    app.delete("/cart/:productId", async (req, res) => {
        try {
          const { productId } = req.params;
          await CartItem.destroy({ where: { id_prod: productId } });
          res.sendStatus(204);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Une erreur est survenue lors de la suppression de l'article du panier." });
        }
      })
}
