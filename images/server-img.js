const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3500;
const dossierFichiers = path.join(__dirname, 'uploaded');
const fichierParDefaut = path.join(__dirname, 'uploaded', 'default.jpeg');

const server = http.createServer((req, res) => {
  const fichierDemande = path.join(dossierFichiers, req.url);

  fs.stat(fichierDemande, (err, stats) => {
    if (err || !stats.isFile()) {
      envoyerFichier(fichierParDefaut, res);
    } else {
      envoyerFichier(fichierDemande, res);
    }
  });
});

function envoyerFichier(fichier, res) {
  fs.readFile(fichier, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erreur interne du serveur');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
}

server.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});