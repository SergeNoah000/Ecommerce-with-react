const Product = require('../models/ProduitsModel');
module.exports = (app) => {
app.get('/productshome', (req, res) => {
Product.findAll({
attributes: [ 'id_produit', 'nom_produit', 'description_produit', 'prix_produit', 'url'],
limit: 3,
where: {
// Ajoutez ici des conditions supplémentaires si nécessaire
}
})
.then(product => {
const msg = 'Une erreur est survenue';
res.json({ msg, data: product });
})
.catch(error => {
res.status(500).json({ msg: error.message });
});
});
};