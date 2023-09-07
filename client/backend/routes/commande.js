const { Commande} = require ('../config/Database')
 module.exports = (app) => {
app.post("/commande", async (req, res) => {
    try {
      const { ville, quartier, telephone, status } = req.body;
      const commande = await Commande.create({ ville, quartier, telephone, status });
      res.status(201).json(commande);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue lors de la création de la commande." });
    }
  })
};