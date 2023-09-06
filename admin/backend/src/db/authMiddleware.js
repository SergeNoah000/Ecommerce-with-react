const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Récupérer le token JWT du header de la requête
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    try {
      // Vérifier le token JWT
      const decodedToken = jwt.verify(token, '1234'); // Remplacez 'votreSecretJWT' par votre propre clé secrète JWT

      // Extraire l'ID du vendeur à partir du token
      const vendeurId = decodedToken.vendeurId;

      // Ajouter l'ID du vendeur à la requête
      req.vendeurId = vendeurId;
    } catch (error) {
      return res.status(401).json({ message: 'Token JWT invalide' });
    }
  } else {
    return res.status(401).json({ message: 'Token JWT manquant' });
  }

  next();
};

module.exports = authMiddleware;