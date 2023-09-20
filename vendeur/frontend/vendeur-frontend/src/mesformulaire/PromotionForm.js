import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
  const [produitsApplicables, setProduitsApplicables] = useState('');
  const [clientsApplicables, setClientsApplicables] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const onPromotionCreated = (promotion) => {
  };

  const values = {
    code_promotion: codePromotion,
    titre_promotion: titrePromotion,
    description_promotion: descriptionPromotion,
    type_reduction: typeReduction,
    valeur_reduction: valeurReduction,
    date_debut: dateDebut,
    date_fin: dateFin,
    montant_achat_min: montantAchatMin,
    produits_applicables: produitsApplicables,
    client_applicables: clientsApplicables
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Effectuer une action avec les valeurs du formulaire, par exemple, envoyer les données à un serveur
    // try {
      console.log("Promotion: " + values)
      const response = await axios.post('http://localhost:7200/promotion',values)
      .then(res=> {
        console.log(res)
        navigate('/PrincipalInterface')
      })
    .catch(err=>console.log(err))

    
      // console.log(response.data); // Afficher la réponse du serveur

      // Réinitialiser les champs du formulaire
      setCodePromotion('');
      setTitrePromotion('');
      setDescriptionPromotion('');
      setTypeReduction('');
      setValeurReduction('');
      setDateDebut('');
      setDateFin('');
      setMontantAchatMin('');
      setProduitsApplicables('');
      setClientsApplicables('');
    // }
  };


    

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
      <Input
        type="text"
        id="produitsApplicables"
        value={produitsApplicables}
        onChange={(e) => setProduitsApplicables(e.target.value)}
        required
        className="form-control"
      />
    </FormGroup>
    <FormGroup>
      <Label for="clientsApplicables" className="fw-bold">Clients applicables</Label>
      <Input
        type="text"
        id="clientsApplicables"
        value={clientsApplicables}
        onChange={(e) => setClientsApplicables(e.target.value)}
        required
        className="form-control"
      />
    </FormGroup>
      <Button color="primary" type="submit">Enregistrer</Button>
    </Form>
    </div>
  
  );
}

export default PromotionForm;