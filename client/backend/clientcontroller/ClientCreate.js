const { sequelize } = require('../config/Database');
const Client = require('../models/ClientModel');

module.exports = (app) => {
  app.post('/client/create', async (req, res) => {
    try {
      sequelize.transaction(async (transaction) => {
        let client = await Client.findOne({ where: { email: req.body.email } });

        if (client) {
          // Le client existe déjà, met à jour le G_token
          client.G_token = req.body.token;
          await client.save({ transaction });
          res.status(200).json({ message: 'Client mis à jour avec succès', client });
        } else {
          // Le client n'existe pas, crée un nouveau client
          client = await Client.create({
            G_token: req.body.token,
            img_url: req.body.image,
            email: req.body.email,
            nom_complet: req.body.nom,
            password: req.body.token
          }, { transaction });
          res.status(201).json({ message: 'Client enregistré avec succès', client });
        }
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};