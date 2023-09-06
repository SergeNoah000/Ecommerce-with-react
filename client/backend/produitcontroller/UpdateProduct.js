const Product = require('../models/ProduitsModel');
const updateProduct = async (req, res) => {
    const produit = await Product.findOne({
      where: {
        id_produit: req.params.id_produit,
      },
    });
    if (!produit) return res.status(404).json({ msg: "Ce produit n'existe pas" });
  
    let fileName = "";
    if (req.files === null) {
      fileName = produit.image_produit;
    } else {
      const file = req.files.file;
      const filesize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];
  
      if (!allowedType.includes(ext.toLocaleLowerCase()))
        return res.status(422).json({ msg: "Image non valide" });
      if (filesize > 5000000)
        return res
          .status(422)
          .json({ msg: "L'mage doit etre inférieure à 5MB " });
  
      const filepath = `public/images/${produit.image}`;
      fs.unlinkSync(filepath);
  
      file.mv(`./public/images/${fileName}`, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
    }
  
    const nom_produit = req.body.nom_produit;
    const description_produit = req.body.description_produit;
    const prix_produit = req.body.prix_produit;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  
    try {
      await Product.update(
        {
          nom_produit: nom_produit,
          description_produit: description_produit,
          prix_produit: prix_produit,
          image_produit: fileName,
          url: url,
        },
        {
          where: {
        id_produit : req.params.id_produit
          },
        }
      );
      res.status(200).json({ msg: "Produit modifié avec succès" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };


  module.exports={
    updateProduct,
  };
    