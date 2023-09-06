const {logoutAdmin} = require('../db/sequelize')

module.exports = (app) => { 
app.get('/admin/logout', (req, res) => {
    logoutAdmin(req);
    res.json({ success: true, message: 'Déconnexion réussie' });
  })};