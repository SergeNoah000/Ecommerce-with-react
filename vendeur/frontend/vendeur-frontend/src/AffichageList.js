import React,{useEffect,useState} from "react";
import axios from "axios";

function AffichageList() {
    const [products, setProducts]=useState([]);
useEffect(()=>{
    getProducts();
},[]);
const getProducts= async()=>{
    const getProducts = async () => {
        try {
          const response = await axios.get("http://localhost:5000/products");
          setProducts(response.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des produits :", error);
          // Gérer l'erreur de manière appropriée, par exemple afficher un message d'erreur à l'utilisateur
        }
      };
}

  return (
    
    <table className="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Nom</th>
        <th>Description</th>
        <th>prix</th>
        <th>Categorie</th>
        <th>Image</th>
       
      </tr>
    </thead>
    <tbody>
      {products.map((produit, index) => (
        <tr key={produit.id_produit}>
          <td className="py-1">{index + 1}</td>
          <td>{produit.nom_produit}</td>
          <td>{produit.description_produit}</td>
          <td>{produit.prix_produit} FCFA</td>
                                             <td>{produit.categorie?.nom}</td>
          <div>
            <td>
              <img
                src={produit.url}
                className="img-fluid text-center"
                data-toggle="modal"
                data-target={`#overview-${produit.id_produit}`}
              />
            </td>
          </div>
          <div
            className="modal fade"
            id={`overview-${produit.id_produit}`}
            tabindex="-1"
            role="dialog"
            aria-labelledby={`overview-${produit.id_produit}-label`}
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-lg"
              role="document"
            >
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div class="modal-body">
                  <img
                    src={produit.url}
                    alt={produit.nom_produit}
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

        
        
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default AffichageList
