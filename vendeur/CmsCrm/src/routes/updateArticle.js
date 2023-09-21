const { Article } = require('../db/sequelize')
  
module.exports = (app) => {
  app.put('/api/articles/:id', (req, res) => {
    const id = req.params.id
    Article.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
       return Article.findByPk(id).then(article => {
          if(article === null){
            const message ='l\'article demander n\'existe pas'
           return res.status(404).json({message})
          }
        const message = `L\'article ${article.titre} a bien été modifié.`
        res.json({message, data: article })
      })
      .catch(error => {
        const message = 'Desoler L\'article n\'a pas pu etre mdifier'
        res.status(500).json({message, data: error})
      })
    })
  })
}