const Product = require('../models/ProduitsModel');
const Client = require('../models/ClientModel');
module.exports = (app) => {
    app.get('/client/create', async (req, res) => {
      try {
        sequelize.transaction(async (transaction) => {
        const client = await Client.findOrCreate({
          where: { G_token: req.body.token, 
                    photoProfil: req.body.image,
                email:req.body.email,
                nom_complet:req.body.nom,
                id:req.body.id,
                password:req.body.token
             },
          defaults: { },
          transaction
        });
        res.status(201).json({ message: "Client enregistré avec succès"  });
    })} catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  };
  
 