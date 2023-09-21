import coupon1 from './coupon1.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Table } from 'reactstrap';
import PromotionForm from './PromotionForm';

function PrincipalInterface() {

  
const token = localStorage.getItem('token'); // Récupérer le token du localStorage
const decodedToken = jwt_decode(token); // Décoder le token pour obtenir les informations qu'il contient
const vendeurId = decodedToken.vendeurId; 

  const [promotions, setPromotions] = useState([]);


 // ...

useEffect(() => {
  const fetchData = async () => {
    try {

      console.log("test");
      const response = await axios.post('http://localhost:5000/promotion',{vendeurId} );
      setPromotions(response.data); // Update this line
      console.log(response);
    } catch (error) {
      console.error("Error fetching promotions:", error);
    }
  };

  fetchData();
}, []);
      console.log(promotions[0]);



  const deletePromo = async (id) => {
    try {
      console.log(id);
      
      const response = await axios.delete(`http://localhost:5000/promotions/${id}`);
      console.log(response);
      setPromotions(promotions.filter((promotion) => promotion.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='interface'>
      <div className='nouveau'><Link to="/PromotionForm">
        <button id="nouveau">+ Nouvelle promotion</button>
      </Link></div>
      <h1>Promotions</h1>
      <p>Augmentez vos ventes en proposant des offres spéciales et des réductions</p>

      <div className='image'>
        <img src={coupon1} alt="Coupon1" />
      </div>
      <div className='soustitre'>
        <h2>Liste des <span>promotions</span></h2>
      </div>

      <div className='tableau'>
        <Table className="table">
          <thead>
            <tr>
            <th className="header-cell">id Promotion</th>
      <th className="header-cell">Code Promotion</th>
      <th className="header-cell">Titre Promotion</th>
      <th className="header-cell">Description Promotion</th>
      <th className="header-cell">Type de Réduction</th>
      <th className="header-cell">Valeur de Réduction</th>
      <th className="header-cell">Date de début</th>
      <th className="header-cell">Date de fin</th>
      <th className="header-cell">Montant d'achat minimum</th>{/* 
      <th className="header-cell">Produits applicables</th>
      <th className="header-cell">Clients applicables</th> */}
      <th className="header-cells">Actions</th>

            </tr>
          </thead>
          <tbody>
  {promotions.length === 0 ? (
    <tr>
      <td colSpan="11">Aucune promotion disponible</td>
    </tr>
  ) : (
    promotions.map((promotion) => (
      <tr key={promotion.id_promotion}>
        <td>{promotion.id_promotion}</td>
        <td>{promotion.code_promotion}</td>
        <td>{promotion.titre_promotion}</td>
        <td>{promotion.description_promotion}</td>
        <td>{promotion.type_reduction}</td>
        <td>{promotion.valeur_reduction}</td>
        <td>{promotion.date_debut}</td>
        <td>{promotion.date_fin}</td>
        <td>{promotion.montant_achat_min}</td>{/* 
        <td>{promotion.produits_applicables}</td>
        <td>{promotion.client_applicables}</td> */}
        <td>
          <button className= "btn btn-danger btn-sm mr-2" id ="modi"    onClick={() => deletePromo(promotion.id_promotion)}>
      
             Supprimer
          </button><br/>
          <button className="btn btn-primary btn-sm" id = "modi">
          
            Modifier
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>
        </Table>
      </div>
    </div>
  );
}

export default PrincipalInterface;
















