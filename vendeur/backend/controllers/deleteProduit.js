const { Article } = require('../db/sequelize')
  
module.exports = (app) => {
  app.delete('/api/articles/:id', (req, res) => {
    Article.findByPk(req.params.id).then(article => {
      if(article === null){
        const message = 'l\'article que vous essayer de suprimer n\'existe pas'
        res.status(404).json({message})
      }
      const articleDeleted = Article;
    return  Article.destroy({
        where: { id: article.id }
      })
      .then(_ => {
        const message = `L\'article avec l'identifiant n°${req.params.id} a bien été supprimé.`
        res.json({message, data: articleDeleted })
      })
      .catch(error => {
        const message = ' Desoler l\'article n\'a pas pu etrre spprimer '
        res.status(500).json({message,data:error})
      })
    })
  })
}
