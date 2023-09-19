  const { sequelize , Commande } = require("../config/Database");
  const Product = require('../models/ProduitsModel');
  const Client = require('../models/ClientModel');
  const Panier = require('../models/cart');
  const Demand = require('../models/DemandModel');
const { waitForDebugger } = require("inspector");

  module.exports = (app) => {
    app.post('/client/panier', async (req, res) => {
      try {
        const { cartItems, totalPrice, email, deliveryAddress, numTel } = req.body;
        console.log("totalPrice", totalPrice);

        const clt = await Client.findOne({ where: { email: email } });
        if (clt) {
          const commande = await Commande.findOrCreate({ where: { addresse: deliveryAddress, telephone: numTel } });
          const panier = await Panier.create({ clientId: clt.id, prix_total: totalPrice, CommandeId: commande[0].id });
          await Promise.all(cartItems.map(item => {
            return Demand.create({ PanierId: panier.id, produitId: item.id, quantite: item.quantity });
          }));
        //const KEY1 = 'sb.tGuhjaVbEkeEw8N6tFfqFKXjXsPPbig2WvoeCbIJc2b6CDRjI7B6W6slVhnuH8Gs70mitihTLStoqpCtJM0d5lfzSAAHn3WuOlsXKYtwlRl2Jz7k0iFDXExscpkMT';
          const KEY = 'pk.06OarXTuEQQysEOELRXW5x3FuT4aJp5MWvfqND6DcuEJmXuFIWcqR4SWFORh7vGe8dzhaGXDrlMs2epYOFdeBDNG1LlyMIoJZBLT2RRMBhsuOcskIZLcTc4Jsd3EP';
           const reference = '' + panier.id +Date.now()  + Math.round(Math.random() * 1E2) ;
           console.log(reference);    
          // Fonction d'initialisation
          const initializePayment = () => {
            const https = require('https');
            const paymentData = {
              email: 'gaetan.noah@facsciences-uy1.cm',
              amount: totalPrice, // Montant du paiement en centimes
              currency: 'XAF',
              description: 'Payment description',
              reference:  reference,
              phone: numTel
            };
            console.log('' + panier.id);
            const options = {
              hostname: 'api.notchpay.co',
              port: 443,
              path: '/payments/initialize',
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: KEY,
                "Cache-Control": "no-cache",
              }
            };

            const req = https.request(options, res => {
              let data = '';

              res.on('data', chunk => {
                data += chunk;
              });

              res.on('end', () => {
                console.log(res.headers)
                const response = JSON.parse(data);
                console.log(response);
               
                const ref = response.transaction.reference;
                  verifyAndConfirmPayment(ref);
                  
              });
            });

            req.write(JSON.stringify(paymentData));
            req.end();
          };

          // Fonction pour envoyer une requête de vérification et de confirmation
          const verifyAndConfirmPayment = ( ref) => {
            // Fonction pour envoyer une requête de vérification
            const sendVerificationRequest = (ref) => {
              // Code pour envoyer la requête de vérification

              const options = {
                method: 'GET',
                hostname: 'api.notchpay.co',
                port: null,
                path: '/payments/'+ref,
                headers: {
                  Authorization: KEY
                }
              };
              const http = require('http');
              
              const req = http.request(options, function (res) {
                const chunks = [];
            
                res.on('data', function (chunk) {
                  chunks.push(chunk);
                });
            
                res.on('end', function () {
                  const body = Buffer.concat(chunks);
                  console.log(body);
                  
                });
              });


            
              req.end();

              sendConfirmationRequest(ref);

            };

            // Fonction pour envoyer une demande de confirmation
            const sendConfirmationRequest = (ref) => {
              // Code pour envoyer la demande de confirmation
              const axios = require('axios');

              const url = 'https://api.notchpay.co/payments/' +ref;
              console.log( url);
              
              const headers = {
                Authorization: KEY,
                Accept: 'application/json'
              };
              const data = {
                channel: 'cm.mobile',
                data: {
                  phone: numTel
                }
              };
            
              axios
                .put(url, data, { headers })
                .then((response) => {
                  console.log(response.data);
                  res.status(201).json({ message: "Commande enregistre avec succes" });
                  commande.reference_payment = ref;
                  commande.save()
                  if (response.data.code === 202 && response.data.status === 'Accepted') {
                    // La confirmation est réussie
                    console.log('Paiement confirmé avec succès !', response);
                  } else {
                    // La confirmation n'est pas encore réussie, attendre un certain délai et renvoyer la requête
                    console.log("Paiement de reference: " + ref + "En cours de traitement..");
                    setTimeout(sendConfirmationRequest(ref), 2000); // Attendre 1 seconde avant de renvoyer la requête
                  }
                })
                .catch((error) => {
                  console.error(error);
                });
            };

            // Appel de la fonction d'envoi de la requête de vérification pour démarrer le processus
            sendVerificationRequest(ref);
          };

          // Appel de la fonction d'initialisation pour démarrer le processus de paiement
          initializePayment();

          

      
        } else {
          res.status(404).json({ message: "Client:" + email + " inexistant" });
        }
      } catch (error) {
        res.status(500).json({ message: error });
        console.error(error);
      }
    });
  };
    
  