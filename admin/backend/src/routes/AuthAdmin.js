const {loginAdmin} = require('../db/sequelize')
module.exports = (app) => { 
app.post('/api/login', async (req, res) => {
    const { nom, password } = req.body;
  
   
    loginAdmin(nom, password)
    .then((result) => {
      const { success, message } = result;
      if (success) {
        // Connexion réussie
        res.json({ success, message });
      } else {
        // Connexion échouée
        res.status(401).json({ success, message });
      }
    })
    .catch((error) => {
      // Erreur lors de la connexion
      res.status(500).json({ success: false, message: error.message });
    });
});
};
