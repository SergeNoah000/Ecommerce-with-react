const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'temps';
    fs.mkdirSync(uploadPath, { recursive: true }); // Crée le dossier s'il n'existe pas
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension);
  }
});

const upload = multer({ storage }).single('profil');

const { Vendeur } = require('../db/sequelize');
const bcrypt = require('bcryptjs');
const { lookupService } = require('dns/promises');

module.exports = (app) => {
  app.post('/api/vendeur', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        const message = 'Erreur lors du téléchargement du fichier';
        res.status(500).json({ message });
      } else {
        const { nom, information_vendeur, cathegorie_produit, password } = req.body;
        const profil = req.file;


        if (profil) {
          // Déplacer le fichier vers le dossier de destination
          const destinationPath = path.join(__dirname, './../../../../images/uploaded', profil.filename);
          fs.renameSync(profil.path, destinationPath);
        }

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
              const message = 'Erreur lors du hachage du mot de passe';
              res.status(500).json({ message });
            } else {
              const fil = profil ? profil.filename : null;
              console.log("\n fil: " + fil, );
              Vendeur.create({
                nom,
                information_vendeur,
                cathegorie_produit,
                profil: fil,
                password: hash, // Enregistrer le mot de passe haché dans la base de données
              })
                .then((vendeur) => {
                  const message = `Le vendeur ${nom} a bien été ajouté.`;
                  console.log(message + message);
                  res.json({ message, data: vendeur });
                })
                .catch((error) => {
                  const message = 'Désolé, le vendeur n\'a pas pu être ajouté.';
                  console.log(message + error);
                  res.status(500).json({ message, data: error });
                });
            }
          });
        });
      }
    });
  });
};