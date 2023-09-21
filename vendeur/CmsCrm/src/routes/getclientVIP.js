const moment = require("moment");
const  Client  = require('../models/client');
const { Op } = require("sequelize");
const sequelize = require('sequelize')
const Historique = require ('../models/historique')

// filtrage des clients
module.exports = (app) => {
  app.get('/clients', async (req, res) => {
    try {
      const clients = await Client.findAll({
        attributes: [
          'id_client', 
          'nom_client', 
          'email', 
          [sequelize.fn('SUM', sequelize.col('historiques.montant_total')), 'montant_total'], 
          [
            sequelize.fn('COUNT', sequelize.col('historiques.id')), 
            'id'
          ],
          [
            sequelize.literal(`
              CASE 
                WHEN SUM(historiques.montant_total) >= 20000 THEN 'VIP'
                WHEN SUM(historiques.montant_total) >= 3000 AND SUM(historiques.montant_total) < 20000 THEN 'REGULIER'
                ELSE ''
              END
            `),
            'categorie'
          ]
        ],
        include: {
          model: Historique,
          attributes: []
        },
        where: {
          created: {
            [Op.gte]: moment().subtract(1, 'month').toDate(),
          },
        },
        group: ['id_client', 'nom_client', 'email'],
        having: {
          [Op.or]: [
            {
              [Op.and]: [
                sequelize.where(
                  sequelize.fn('SUM', sequelize.col('historiques.montant_total')),
                  '>=',
                  10000
                ),
                sequelize.where(
                  sequelize.fn('COUNT', sequelize.col('historiques.clientIdClient')),
                  '>=',
                  2
                ),
              ],
            },
            sequelize.where(
              sequelize.fn('SUM', sequelize.col('historiques.montant_total')),
              '>=',
              3000
            ),
          ],
        },
      });

      res.json( clients)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur est survenue' });
    }
  });
};