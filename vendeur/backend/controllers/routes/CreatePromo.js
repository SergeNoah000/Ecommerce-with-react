const express = require('express');
// const bodyParser = require('body-parser');

const { Sequelize , DataTypes } = require("sequelize");
const path = require('path');
const connection=require('../config/DataBase')
const router = express.Router();
const sequelize = new Sequelize("pokedex", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
const Vendeur =    sequelize.define('vendeur' , {
  id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  nom:{
      type: DataTypes.STRING,
      allowNull: false
  },
  information_vendeur:{
      type: DataTypes.STRING,
      allowNull: false
  },
  cathegorie_produit:{
      type: DataTypes.STRING,
      allowNull: false
  },
  profil:{
      type: DataTypes.STRING,
      allowNull:false
  },
 password:{
  type: DataTypes.STRING,
  allowNull: false,
  require: true
 }
},
{                                                                
  timestamps: true,
  createdAt: 'created',
  updatedAt: false


})
const Promotion = sequelize.define('Promotion', {
  id_promotion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
    
  },
  code_promotion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description_promotion:{
    type: DataTypes.TEXT,
    allowNull: true,
  },
  type_reduction:{
    type: DataTypes.STRING,
    allowNull: false,
  },

  valeur_reduction: {
    type: DataTypes.INTEGER,
    allowNull: false,
    min:1,
    max:99.999,
  },
  date_debut:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  
  date_fin:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  montant_achat_min:{
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  

  
},{
  freezeTableName: true
});


Vendeur.hasMany(Promotion);
Promotion.belongsTo(Vendeur);




router.post('/promotion/create', async (req, res) => {
  try {
    const {  code_promotion, titre_promotion, description_promotion, type_reduction, valeur_reduction, date_debut, date_fin, montant_achat_min, produits_applicables, client_applicables, vendeurId } = req.body;
    console.log("vendeurId: " + vendeurId);
      const promo = await Promotion.create({ 
        description_promotion: description_promotion, 
        montant_achat_min: montant_achat_min, 
        date_debut:date_debut, 
        date_fin:date_fin,
        valeur_reduction:valeur_reduction, 
        type_reduction:type_reduction,
        titre_promotion:titre_promotion, 
        code_promotion: code_promotion, 
        produits_applicables: produits_applicables, 
        client_applicables:client_applicables,
        vendeurId:vendeurId
      })
   
    
      if (promo) {
        console.log(produits_applicables);
        const querry3 = "INSERT INTO `ClientsOfPromotion`(`createdAt`, `updatedAt`, `PromotionIdPromotion`, `clientId`) VALUES (NOW(), NOW(), :promotionId, :clientId); "
        const querry4 = "INSERT INTO `PromotionsOfClient`(`createdAt`, `updatedAt`, `clientId`, `PromotionIdPromotion`) VALUES (NOW(), NOW(), :clientId, :promotionId)"
        // Ajouter les produits applicables à la promotion en parcourant le tableau produits_applicables
        const querry = "INSERT INTO `ProductsOfPromotion` (`createdAt`, `updatedAt`, `PromotionIdPromotion`, `produitId`) VALUES (NOW(), NOW(), :promotionId, :productId)";
        const querry2 = "INSERT INTO `PromotionsOfProduct`(`created`, `produitId`, `PromotionIdPromotion`) VALUES (NOW(), :productId, :promotionId)";

        // Ajouter les produits applicables à la promotion en parcourant le tableau produits_applicables
        await Promise.all(
          produits_applicables.map(productId => {
            return Promise.all([
              sequelize.query(querry, {
                replacements: { promotionId: promo.id_promotion, productId },
                type: Sequelize.QueryTypes.INSERT
              }),
              sequelize.query(querry2, {
                replacements: { promotionId: promo.id_promotion, productId },
                type: Sequelize.QueryTypes.INSERT
              })
            ]);
          })
        );

        await Promise.all(
          client_applicables.map(clientId => {
            return Promise.all([
              sequelize.query(querry3, {
                replacements: { promotionId: promo.id_promotion, clientId },
                type: Sequelize.QueryTypes.INSERT
              }),
              sequelize.query(querry4, {
                replacements: { promotionId: promo.id_promotion, clientId },
                type: Sequelize.QueryTypes.INSERT
              })
            ]);
          })
        );
        res.status(201).json({ message: 'Promotion créée avec succès' });
        
      } else {
        res.status(500).json({ message: 'Une erreur est survenue lors de la création de la promotion' });
      }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la création de la promotion', error: JSON.stringify(error) });
  }
});






module.exports = router;