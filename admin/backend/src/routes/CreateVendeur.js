const { Vendeur } = require('../db/sequelize')
const bcrypt = require('bcryptjs');
// module.exports = (app) => {
//   app.post('/api/vendeur', (req, res) => {
//     Vendeur.create(req.body)
//       .then(vendeur => {
//         const message = `Le vendeur  ${req.body.nom} a bien été ajouter.`
//         res.json({ message, data: vendeur })
//       })
//       .catch(error => {
//         const message = 'Desoler Le vendeur n\'a pas pu etre '
//         res.status(500).json({message, data: error})
//       })
//   })
// }
module.exports = (app) => {
  app.post('/api/vendeur', (req, res) => {
    const { nom, information_vendeur, cathegorie_produit, profil, password } = req.body;
    console.log(profil);
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          const message = 'Erreur lors du hachage du mot de passe';
          res.status(500).json({ message });
        } else {
          Vendeur.create({
            nom,
            information_vendeur,
            cathegorie_produit,
            profil,
            password: hash, // Enregistrer le mot de passe haché dans la base de données
          })
            .then((vendeur) => {
              const message = `Le vendeur ${nom} a bien été ajouté.`;
              res.json({ message, data: vendeur });
            })
            .catch((error) => {
              const message = 'Désolé, le vendeur n\'a pas pu être ajouté.';
              res.status(500).json({ message, data: error });
            });
        }
      });
    });
  });
};
