const { Produit } = require('../models/ProduitsModel');
const { Client } = require('../config/Database');

module.exports = (app) => {
  app.post('/cart', addItemCart);

  async function addItemCart(req, res) {
    const { id_produit } = req.body; // Accéder à la propriété spécifique 'id_produit' du corps de la requête
    let newQuantite = 1;
    let fetchedCart;
    try {
      const client = await Client.findOne({ where: { id_client: req.id_client } }); // Assurez-vous d'utiliser la propriété correcte pour l'ID du client

      const cart = await client.getCart().then((cart) => {
        if (!cart) {
          return client.createCart();
        }
        return cart;
      });

      fetchedCart = cart;

      const products = await cart.getProducts({ where: { id_produit: id_produit } });

      if (products.length) {
        newQuantite = products[0].CartItem.quantite + 1;
        await products[0].CartItem.update({ quantite: newQuantite });
      } else {
        const product = await Produit.findByPk(id_produit);
        await fetchedCart.addProduct(product, { through: { quantite: newQuantite } });
      }

      res.json({ message: 'Produit ajouté au panier avec succès.' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  }
};