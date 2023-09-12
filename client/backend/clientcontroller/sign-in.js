const router = require('express').Router();
const User = require('../models/ClientModel');
const bcrypt = require('bcryptjs');

const express = require('express');
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

module.exports = (app) => {

const upload = multer({ storage: storage });

router.post('/sign-in', upload.single('image_produit'), async (req, res) => {

  try {

    const { firstname, lastname, email, password } = req.body;
    const photoProfil = req.file;

    if (photoProfil) {
        // Déplacer le fichier vers le dossier de destination
        const destinationPath = path.join(__dirname, './../../../images/uploaded', photoProfil.filename);
        fs.renameSync(image_produit.path, destinationPath);
       
      }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstname, 
      lastname,
      email,
      password: hashedPassword
    });

    const user = await newUser.save();

    res.status(200).json({
      message: 'User created successfully!'
    });

  } catch (err) {
    res.status(500).json({ error: err });
  }

});
};


