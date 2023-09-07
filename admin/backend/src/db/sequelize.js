const {Sequelize , DataTypes}  = require("sequelize")
const modelVendeur = require('../models/modelVendeur')
const vendeurs  = require('./mock-vendeur')
const modelAdmin = require('../models/modelAdmin')
const admin = require('./mock-admin')
const bcrypt = require('bcryptjs')


const sequelize = new Sequelize('pokedex', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci'
    },
    dialectOptions: {
      timezone: 'Etc/GMT',
    },
    logging: false
  })
  const Admin  = modelAdmin(sequelize , DataTypes)
  const Vendeur = modelVendeur(sequelize , DataTypes)

const initDb = () => {
  return sequelize
    .sync({ force: true })
    .then(() => {
      vendeurs.map((vendeur) => {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(vendeur.password, salt, (err, hash) => {
            if (err) throw err;
            Vendeur.create({
              nom: vendeur.nom,
              information_vendeur: vendeur.information_vendeur,
              cathegorie_produit: vendeur.cathegorie_produit,
              profil: vendeur.profil,
              password: hash, // Enregistrer le mot de passe haché dans la base de données
            }).then((vendeur) => console.log(vendeur.toJSON()));
          });
        });
      });

      admin.map((admin) => {
        bcrypt.genSalt(10 , (err , salt) =>{
        bcrypt.hash(admin.password , salt , (err , hash) =>{
          if (err) throw err ; 
        Admin.create({
          nom: admin.nom,
          password: hash,
        }).then((admin) => console.log(admin.toJSON()));
      })
      });
    })
      console.log('La base de données a bien été initialisée !');
    })
    .catch((err) => console.error(err));
};
     //connexion
    //  const loginAdmin = async (nom, password) => {
    //   try {
    //     const admin = await Admin.findOne({
    //       where: { nom: nom }
    //     });
    
    //     if (!admin) {
         
    //       throw new Error('Nom d\'utilisateur incorrect');
    //     }
    
    //     if (admin.password === password) {
         
    //       return { success: true, message: 'Connexion réussie' };
    //     } else {
    //       throw new Error('Mot de passe ou nom d\'utilisateur incorrect');
    //     }
    //   } catch (error) {
    //     return { success: false, message: error.message };
    //   }
    // };
    const loginAdmin = async (nom, password) => {
      try {
       
        const admin = await Admin.findOne({
               where: { nom: nom }
              });
        if (!admin) {
          throw new Error("Nom d'utilisateur incorrect");
        }
    
        const isMatch = await bcrypt.compare(password, admin.password);
    
        if (isMatch) {
          return { success: true, message: 'Connexion réussie' };
        } else {
          throw new Error("Mot de passe incorrect");
        }
      } catch (error) {
        return { success: false, message: error.message };
      }
    };
    const authenticate = (req, res, next) => {
      const token = req.headers.authorization;
    
      if (!token) {
        return res.status(401).json({ message: 'Token manquant. Authentification requise.' });
      }
    
      try {
        const decodedToken = jwt.verify(token, '1234');
        req.vendeurId = decodedToken.vendeurId;
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Token invalide ou expiré. Authentification requise.' });
      }
    };
    // const loginVendeur = async (nom, password) => {
    //   try {
       
    //     const vendeur = await Vendeur.findOne({
    //            where: { nom: nom }
    //           });
    //     if (!vendeur) {
    //       throw new Error("Nom d'utilisateur incorrect");
    //     }
    
    //     const isMatch = await bcrypt.compare(password, vendeur.password);
    
    //     if (isMatch) {
    //       return { success: true, message: 'Connexion réussie' };
    //     } else {
    //       throw new Error("Mot de passe incorrect");
    //     }
    //   } catch (error) {
    //     return { success: false, message: error.message };
    //   }
    // };
    // Déconnexion Admin
const logoutAdmin = (req) => {
  req.session.destroy(); // Supprime la session de l'administrateur
};
  
  module.exports = {
    sequelize,
    initDb,
    Vendeur,
    loginAdmin,
    logoutAdmin,
    authenticate
  };
  