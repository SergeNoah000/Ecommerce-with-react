import coupon1 from './coupon1.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import PromotionForm from './PromotionForm';

function PrincipalInterface() {
  const [promotions, setPromotions] = useState([]);


 // ...

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7200/promotion');
      setPromotions(response.data); // Update this line
    } catch (error) {
      console.error("Error fetching promotions:", error);
    }
  };

  fetchData();
}, []);
      console.log(promotions[0]);



  const deletePromo = async (id) => {
    try {
      await axios.delete(`http://localhost:7200/promotion/${id}`);
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
      <th className="header-cell">Montant d'achat minimum</th>
      <th className="header-cell">Produits applicables</th>
      <th className="header-cell">Clients applicables</th>
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
        <td>{promotion.montant_achat_min}</td>
        <td>{promotion.produits_applicables}</td>
        <td>{promotion.client_applicables}</td>
        <td>
          <button className= "btn btn-danger btn-sm mr-2"    onClick={() => deletePromo(promotion.id)}>
      
             Supprimer
          </button>
          <button className="btn btn-primary btn-sm">
          
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




















// import coupon1 from './coupon1.jpg';
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table } from 'reactstrap';
// import { BsTrash, BsPencil } from 'react-icons/bs';
// import PromotionForm from './PromotionForm';

// function PrincipalInterface() {
//   const [data, setData] = useState([]);
//   const [promotions, setPromotions] = useState([]);
//   const id = '';

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       console.log("Promotion/:id: " )
//       const response = await axios.get('http://localhost:7200/promotion');
//     //   then(response => {
//     //     setPromotions(response.data);
//     //  })}
//     //  catch(error => {
//     //    console.error(error);
//     //  });

//       setPromotions(response.data);
//     } 
//     catch (error) {
//       console.log(error);
//     }
//   };

  

//   const deletePromo = async (id) => {
//     try {
//       await axios.delete(`http://localhost:7200/promotion/${id}`);
//       const updatedData = data.filter((promotion) => promotion.id !== id);
//       setData(updatedData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className='interface'>
//       <Link to="/PromotionForm">
//         <button id="nouveau">+ Nouvelle promotion</button>
//       </Link>
//       <h1>Promotions</h1>
//       <p>Augmentez vos ventes en proposant des offres spéciales et des réductions</p>

//       <div className='image'>
//         <img src={coupon1} alt="Coupon1" />
//       </div>
//       <div className='soustitre'>
//         <h2>Liste des <span>promotions</span></h2>
//       </div>

//       <div>
//         {/* {data.length > 0 ? ( */}
//           <Table className="table">
//             <thead>
//               <tr>
//                 <th>Code Promotion</th>
//                 <th>Titre Promotion</th>
//                 <th>Description Promotion</th>
//                 <th>Type de Réduction</th>
//                 <th>Valeur de Réduction</th>
//                 <th>Date de début</th>
//                 <th>Date de fin</th>
//                 <th>Montant d'achat minimum</th>
//                 <th>Produits applicables</th>
//                 <th>Clients applicables</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {promotions.map((promotion) => (
//                 <tr key={promotion.id}>
//                   <td>{promotion.codePromotion}</td>
//                   <td>{promotion.titrePromotion}</td>
//                   <td>{promotion.descriptionPromotion}</td>
//                   <td>{promotion.typeReduction}</td>
//                   <td>{promotion.valeurReduction}</td>
//                   <td>{promotion.dateDebut}</td>
//                   <td>{promotion.dateFin}</td>
//                   <td>{promotion.montantAchatMin}</td>
//                   <td>{promotion.produitsApplicables}</td>
//                   <td>{promotion.clientsApplicables}</td>
//                   <td>
//                     <button className="btn btn-danger btn-sm mr-2" onClick={() => deletePromo(promotion.id)}>
//                       <BsTrash /> Supprimer
//                     </button>
//                     <button className="btn btn-primary btn-sm">
//                       <BsPencil /> Modifier
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         {/* ) : (
//           <p>Aucune promotion trouvée.</p>
//         )} */}
//       </div>
//     </div>
//   );
// }

// export default PrincipalInterface;





















// import coupon1 from './coupon1.jpg';
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table } from 'reactstrap';
// import { BsTrash, BsPencil } from 'react-icons/bs';

// function PrincipalInterface() {
//   const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await axios.get('http://localhost:7200/PromotionForm');
//   //     setData(response.data);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   useEffect(() => {
//     axios.get('http://localhost:7200/promotion')
//     .then(res=>setData(res.data))
//     .catch(err=>console.log(err))
//   }, []);

   

//   // const deletePromo = async (id) => {
//   //   try {
//   //     await axios.delete(`http://localhost:7200/PromotionForm/${id}`);
//   //     fetchData(); // Mettre à jour les données après la suppression
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   const addPromotion = (promotion) => {
//     // Ajouter la promotion nouvellement créée aux données existantes
//     setData([...data, promotion]);
//   };

//   return (
//     <div className='interface'>
//       <Link to="/PromotionForm">
//         <button id="nouveau">+ Nouvelle promotion</button>
//       </Link>
//       <h1>Promotions</h1>
//       <p>Augmentez vos ventes en proposant des offres spéciales et des réductions</p>

//       <div className='image'>
//         <img src={coupon1} alt="Coupon1" />
//       </div>
//       <div className='soustitre'>
//         <h2>Liste des <span>promotions</span></h2>
//       </div>

//       <div>
//         {/* {data.length > 0 ? ( */}
//           <Table className="table">
//             <thead>
//               <tr>
//                 <th>Code Promotion</th>
//                 <th>Titre Promotion</th>
//                 <th>Description Promotion</th>
//                 <th>Type de Réduction</th>
//                 <th>Valeur de Réduction</th>
//                 <th>Date de début</th>
//                 <th>Date de fin</th>
//                 <th>Montant d'achat minimum</th>
//                 <th>Produits applicables</th>
//                 <th>Clients applicables</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((promotion) => {
//                 return
//                 <tr key={promotion.id}>
//                   <td>{promotion.codePromotion}</td>
//                   <td>{promotion.titrePromotion}</td>
//                   <td>{promotion.descriptionPromotion}</td>
//                   <td>{promotion.typeReduction}</td>
//                   <td>{promotion.valeurReduction}</td>
//                   <td>{promotion.dateDebut}</td>
//                   <td>{promotion.dateFin}</td>
//                   <td>{promotion.montantAchatMin}</td>
//                   <td>{promotion.produitsApplicables}</td>
//                   <td>{promotion.clientsApplicables}</td>
//                   <td>
//                     {/* <button className="btn btn-danger btn-sm mr-2" onClick={() => deletePromo(item.id)}> */}
//                     <button className="btn btn-danger btn-sm mr-2">

//                       <BsTrash /> Supprimer
//                     </button>
//                     <button className="btn btn-primary btn-sm">
//                       <BsPencil /> Modifier
//                     </button>
//                   </td>
//                 </tr>
//               })}
//             </tbody>
//           </Table>
//         {/* // ) : (
//         //   <p>Aucune promotion trouvée.</p>
//         // )} */}
//       </div>
//     </div>
//   );
// }

// export default PrincipalInterface;
