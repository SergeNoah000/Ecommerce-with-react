router.put('/products/:id', upload.single('image_produit'), async (req, res) => {
  try {
    const { id_produit } = req.params;
    const { nom_produit, description_produit, prix_produit } = req.body;
    let image_produit = req.file && req.file.filename; // Vérifier si un nouveau fichier est téléchargé

    // Récupérer les données du produit existant
    const getProductQuery = 'SELECT * FROM produit WHERE id_produit = ?';
    const [existingProduct] = connection.query(getProductQuery, [id_produit]);

    // Vérifier si le produit existe
    if (!existingProduct || existingProduct.length === 0) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }

    // Vérifier si un nouveau fichier a été téléchargé, sinon conserver l'image existante
    if (!image_produit) {
      image_produit = existingProduct[0].image_produit;
    }

    // Mettre à jour les données du produit dans la base de données
    const updateProductQuery = 'UPDATE produits SET nom_produit = ?, description_produit = ?, prix_produit = ?, image_produit = ? WHERE id = ?';
    connection.query(updateProductQuery, [nom_produit, description_produit, prix_produit, image_produit, id]);

    res.status(200).json({ message: 'Produit mis à jour avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour du produit' });
  }
});