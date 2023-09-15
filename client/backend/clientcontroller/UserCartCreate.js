const { sequelize } = require("../config/Database");
const Product = require('../models/ProduitsModel');
const Client = require('../models/ClientModel');
const Panier = require('../models/PanierModel');
const Demand = require('../models/DemandModel');
const Commande = require('../models/CommandeModel');

module.exports = (app) => {
  app.post('/client/panier', async (req, res) => {
    try {
      const { cartItems, totalPrice, email, deliveryAddress, numTel } = req.body;

      const clt = await Client.findOne({ where: { email: email } });
      if (clt) {
        const commande = await Commande.findOrCreate({ where: { adresse: deliveryAddress, telephone: numTel } });
        const panier = await Panier.create({ clientId: clt.id, prixTotal: totalPrice, CommandeId: commande[0].id });
        await Promise.all(cartItems.map(item => {
          return Demand.create({ PanierId: panier.id, produitId: item.id, quantite: item.quantity });
        }));

        const https = require('https')

        const params = JSON.stringify({
            "email": "customer@email.com",
            "amount": totalPrice,
            "currency": "XAF",
            "description": "Payment du panier numero:"+ panier.id,
            "reference": panier.id,
        })
    
        const options = {
            hostname: 'api.notchpay.co',
            port: 443,
            path: '/payments/initialize',
            method: 'POST',
            headers: {
                Authorization: 'sb.tGuhjaVbEkeEw8N6tFfqFKXjXsPPbig2WvoeCbIJc2b6CDRjI7B6W6slVhnuH8Gs70mitihTLStoqpCtJM0d5lfzSAAHn3WuOlsXKYtwlRl2Jz7k0iFDXExscpkMT',
                'Content-Type': 'application/json'
            }
        }
    
        const req = https.request(options, res => {
        let data = ''
    
        res.on('data', (chunk) => {
            data += chunk
        });
    
        res.on('end', () => {
            console.log(JSON.parse(data))
        })
        }).on('error', error => {
            console.error(error)
        })
    
        req.write(params)
        req.end()

        //verification du paiement

        const http = require("http");

        const options1 = {
          "method": "GET",
          "hostname": "api.notchpay.co",
          "port": null,
          "path": "/payments/bWpe7YBkjBZxUzRv60iDPTQJsiVUQLRt",
          "headers": {
            "Authorization": "sb.tGuhjaVbEkeEw8N6tFfqFKXjXsPPbig2WvoeCbIJc2b6CDRjI7B6W6slVhnuH8Gs70mitihTLStoqpCtJM0d5lfzSAAHn3WuOlsXKYtwlRl2Jz7k0iFDXExscpkMT"
          }
        };

        const req1 = http.request(options1, function (res) {
          const chunks = [];

          res.on("data", function (chunk) {
            chunks.push(chunk);
          });

          res.on("end", function () {
            const body = Buffer.concat(chunks);
            console.log(body.toString());
          });
        });

        req1.end();



        const axios = require('axios');

        const url = 'https://api.notchpay.co/payments/cTXHSX223NhUzjgxAJoRAzVFGwBIn0Kv';
        const headers = {
          'Authorization': 'PUBLIC_KEY',
          'Accept': 'application/json'
        };
        const data = {
          channel: 'cm.orange',
          data: {
            phone: '+237656019261'
          }
        };

        axios.put(url, data, { headers })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });


        res.status(201).json({ message: "Commande enregistre avec succes" });

    
      } else {
        res.status(404).json({ message: "Client:" + email + " inexistant" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
      console.error(error);
    }
  });
};
  
 