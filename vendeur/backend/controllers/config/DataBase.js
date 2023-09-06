const mysql = require('mysql');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pokedex'
});

// Établir la connexion à la base de données
connection.connect((error) => {
  if (error) {
    console.error('Erreur de connexion à la base de données:', error);
  } else {
    console.log('Connexion à la base de données réussie');
  }
})


module.exports = connection;