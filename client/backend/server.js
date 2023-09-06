const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());
app.use(express.json());
const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'marketing2'
   
})
 //vérification de la base de données
 db.connect((err)=>{
    if(err) return console.log("erreur de connection");
    return console.log("connection réussites avec succès");
 } )
 
 //envoyer des donner du login vendeurs
app.post('/login', (req,res)=>{
    const sql="SELECT* FROM vendeur WHERE nom =? AND password =?";

        db.query(sql, [ req.body.nom,req.body.password],(err,data)=>{
            if(data.length>0){
                return res.json("success")
            }
            if(err) return res.json("login echoué");
           
            else {
                return res.json("pas trouvé")
            }
        })
})

//envoyer des donner du login vendeurs
// app.post('/FormProduct', (req,res)=>{
//     const sql = "SELECT * FROM produit WHERE nom_produit = ? AND description_produit = ? AND prix_produit = ? AND remise_produit = ? AND image_produit = ? AND video_produit = ?";
//         db.query(sql, [ req.body.nom_produit,req.body.description_produit,req.body.prix_produit,req.body.remise_produit,req.body. image_produit,req.body. video_produit],(err,data)=>{
//             if(data.length>0){
//                 return res.json("success")
//             }

//             if(err) return res.json("ajout echoueDR");
           
//             else {
//                 return res.json("pas trouvé")
//             }
//         })
// })
app.post('/FormProduct', (req, res) => {
    const { nom_produit, prix_produit, remise_produit } = req.body;
    const sql = "INSERT INTO produit (nom_produit, prix_produit, remise_produit) VALUES (?, ?, ?)";
    
    db.query(sql, [nom_produit, prix_produit, remise_produit], (err, result) => {
      if (err) {
        console.error(err);
        return res.json("Ajout échoué");
      }
  
      return res.json(" ajout avec Success");
    });
  });


app.listen(8081, () => {
    console.log(`Serveur démarré sur le port 8081S`);
  });
  

