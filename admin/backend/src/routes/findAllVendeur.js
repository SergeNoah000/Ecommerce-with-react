const { Vendeur } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/vendeur', (req, res) => {
    Vendeur.findAll()
      .then(vendeur => {
         //recuperer les donner du CkEditor sans les balise HTML
        const data = vendeur.map(vendeur => {
          
          const cleanedInformationVendeur = vendeur.information_vendeur.replace(/<\/?[^>]+>|&nbsp;/g, '');
          return {
            id: vendeur.id,
            nom: vendeur.nom,
            information_vendeur: cleanedInformationVendeur,
            cathegorie_produit: vendeur.cathegorie_produit,
            profil: vendeur.profil,
            password: vendeur.password
          };
        });
        const message = 'La liste d\'article a bien été récupérée.'
        res.json({ message, data })
      })
       
      
  })
}