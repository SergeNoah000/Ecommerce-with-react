import  { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import jwt_decode from 'jwt-decode';
import App from '../App.css';
import { useNavigate } from 'react-router-dom';
import PrincipalInterface from './PrincipalInterface';

function PromotionForm() {
  const [codePromotion, setCodePromotion] = useState('');
  const [titrePromotion, setTitrePromotion] = useState('');
  const [descriptionPromotion, setDescriptionPromotion] = useState('');
  const [typeReduction, setTypeReduction] = useState('');
  const [valeurReduction, setValeurReduction] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [montantAchatMin, setMontantAchatMin] = useState('');
  const [produitsApplicables, setProduitsApplicables] = useState([]);
  const [clientsApplicables, setClientsApplicables] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [produitsCochees, setProduitsCochees] = useState([]);
const [clientsCochees, setClientsCochees] = useState([]);
  const [donnes, setDonnes] = useState([]);
  const onPromotionCreated = (promotion) => {
  };


const token = localStorage.getItem('token'); // Récupérer le token du localStorage
const decodedToken = jwt_decode(token); // Décoder le token pour obtenir les informations qu'il contient
const vendeurId = decodedToken.vendeurId; 

  const values = {
    code_promotion: codePromotion,
    titre_promotion: titrePromotion,
    description_promotion: descriptionPromotion,
    type_reduction: typeReduction,
    valeur_reduction: valeurReduction,
    date_debut: dateDebut,
    date_fin: dateFin,
    montant_achat_min: montantAchatMin,
    produits_applicables: produitsCochees,
    client_applicables: clientsCochees,
    vendeurId:vendeurId
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Effectuer une action avec les valeurs du formulaire, par exemple, envoyer les données à un serveur
     
      console.log("Promotion: " + JSON.stringify(values))
      const response = await axios.post('http://localhost:5000/promotion/create',values)
      .then(res=> {
        console.log(res)
        setCodePromotion('');
      setTitrePromotion('');
      setDescriptionPromotion('');
      setTypeReduction('');
      setValeurReduction('');
      setDateDebut('');
      setDateFin('');
      setMontantAchatMin('');
      setProduitsApplicables([]);
      setClientsApplicables([]);
        navigate('/Promotions_List')
      })
    .catch(err=>console.log(err))

    
      // console.log(response.data); // Afficher la réponse du serveur

      // Réinitialiser les champs du formulaire
      
    // }
  };

  const handleProduitsApplicablesChange = (e) => {
    const produitId = e.target.value;
    const index = produitsCochees.indexOf(produitId);
  
    if (index === -1) {
      setProduitsCochees([...produitsCochees, produitId]);
    } else {
      const updatedProduitsCochees = [...produitsCochees];
      updatedProduitsCochees.splice(index, 1);
      setProduitsCochees(updatedProduitsCochees);
    }
  };
  
  const handleClientsApplicablesChange = (e) => {
    const produitId = e.target.value;
    const index = clientsCochees.indexOf(produitId);
  
    if (index === -1) {
      setClientsCochees([...produitsCochees, produitId]);
    } else {
      const updatedProduitsCochees = [...produitsCochees];
      updatedProduitsCochees.splice(index, 1);
      setClientsCochees(updatedProduitsCochees);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:7200/products');
        console.log(response);
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }

       try {
        const response = await axios.get('http://localhost:7200/clients');
        console.log(response);
        setDonnes(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


    

  return (
    
    <div className='frompromo'>
      <h1>creer une <span>promotion</span></h1>
          <Form onSubmit={handleSubmit} className='form'  >
    <FormGroup>
      <Label for="codePromotion" className="fw-bold">Code de promotion</Label>
      <Input
        type="text"
        id="codePromotion"
        value={codePromotion}
        onChange={(e) => setCodePromotion(e.target.value)}
        required
        className="form-control"
      />
    </FormGroup>
    <FormGroup>
      <Label for="titrePromotion" className="fw-bold">Titre de la promotion</Label>
      <Input
        type="text"
        id="titrePromotion"
        value={titrePromotion}
        onChange={(e) => setTitrePromotion(e.target.value)}
        required
        className="form-control"
      />
    </FormGroup>
    <FormGroup>
      <Label for="descriptionPromotion" className="fw-bold">Description de la promotion</Label>
      <Input
        type="textarea"
        id="descriptionPromotion"
        value={descriptionPromotion}
        onChange={(e) => setDescriptionPromotion(e.target.value)}
        required
        className="form-control"
      />
    </FormGroup>
    <FormGroup>
      <Label for="typeReduction" className="fw-bold">Type de réduction</Label>
      <Input
        type="select"
        id="typeReduction"
        value={typeReduction}
        onChange={(e) => setTypeReduction(e.target.value)}
        required
        className="form-select"
      >
        <option value="">Choisissez le type de réduction</option>
        <option value="pourcentage">Pourcentage</option>
        <option value="montant_fixe">Montant fixe</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="valeurReduction" className="fw-bold">Valeur de réduction</Label>
      <Input
        type="number"
        id="valeurReduction"
        value={valeurReduction}
        onChange={(e) => setValeurReduction(e.target.value)}
        required
        className="form-control"
      />
    </FormGroup>
    <FormGroup>
      <Label for="dateDebut" className="fw-bold">Date de début</Label>
      <Input
        type="date"
        id="dateDebut"
        value={dateDebut}
        onChange={(e) => setDateDebut(e.target.value)}
        required
        className="form-control"
      />
    </FormGroup>
    <FormGroup>
      <Label for="dateFin" className="fw-bold">Date de fin</Label>
      <Input
        type="date"
        id="dateFin"
        value={dateFin}
        onChange={(e) => setDateFin(e.target.value)}
        required
        className="form-control"
      />
    </FormGroup>
    <FormGroup>
      <Label for="montantAchatMin" className="fw-bold">Montant d'achat minimum</Label>
      <Input
        type="number"
        id="montantAchatMin"
        value={montantAchatMin}
        onChange={(e) => setMontantAchatMin(e.target.value)}
        required
        className="form-control"
      />
    </FormGroup>
    
    <FormGroup>
        <Label for="produitsApplicables" className="fw-bold">Produits applicables</Label>
        {data.map((produit) => (
          <FormGroup check key={produit.id}>
            <Label check for={`produit-${produit.id}`}>
              <Input
                type="checkbox"
                id={`produit-${produit.id}`}
                value={produit.id}
                onChange={handleProduitsApplicablesChange}
            
              />
              {' '}
              {produit.nom_produit}
            </Label>
          </FormGroup>
        ))}
        <FormText color="muted">Sélectionnez les produits applicables.</FormText>
      </FormGroup>

      <FormGroup>
        <Label for="clientsApplicables" className="fw-bold">Clients applicables</Label>
        {donnes.map((client) => (
          <FormGroup check key={client.id}>
            <Label check for={`client-${client.id}`}>
              <Input
                type="checkbox"
                id={`client-${client.id}`}
                value={client.id}
                onChange={handleClientsApplicablesChange}
              />
              {' '}
              {client.nom_complet}
            </Label>
          </FormGroup>
          ))}
          <FormText color="muted">Sélectionnez les clients applicables.</FormText>
        </FormGroup>
    
      <Button color="primary" type="submit">Enregistrer</Button>
    </Form>
    </div>
  
  );
}

export default PromotionForm;