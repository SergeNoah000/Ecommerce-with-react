//suppression d'un produit spécifique
const suppression=
router.delete('/products/:id', async (req, res) => {
  try {
    const { id_produit } = req.params;

    // Vérifier si le produit existe avant de le supprimer
    const getProductQuery = 'SELECT * FROM produits WHERE id_produit = ?';
    const [existingProduct] = await connection.query(getProductQuery, [id_produit]);

    if (!existingProduct || existingProduct.length === 0) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }

    // Supprimer le produit de la base de données
    const deleteProductQuery = 'DELETE FROM produits WHERE id_produit = ?';
    await connection.query(deleteProductQuery, [id]);

    res.status(200).json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Une erreur est survenue lors de la suppression du produit' });
  }
});
