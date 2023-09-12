/* import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, useWatch, } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {

  const { register, handleSubmit, reset, control} = useForm();
  const history = useNavigate();
  const password = useWatch({
    control,
    name: 'password',
  });
  let errors = {};


  const submitData = async (data) => {

    const formData = new FormData();

    formData.append('firstname', data.firstname);
    formData.append('lastname', data.lastname);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('cpassword', data.cpassword);

    formData.append('photoProfil', data.photoProfil);
    formData.append('numeroTelephone', data.numeroTelephone);
    formData.append('adresse', data.adresse);
    formData.append('numeroAppartement', data.numeroAppartement);

    try {

      const res = await axios.post('http://localhost:7200/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        toast.success(res.data.message);
        reset();
        setTimeout(() => history('/login'), 3000);
    })

      // gestion réponse
      .catch(err => console.log(err));

    } catch(err) {

      // gestion erreur
        console.log("Une erreur s'est produit:", err);

    }

  };

  return (
 


<>
<div className="container">
  <div className="row justify-content-center" style={{height: '100vh'}}>
    <div className="card" style={{maxWidth: '500px'}}>

      <h3 className="text-center text-secondary mt-3 mb-3">
        Sign Up Form
      </h3>

      <form onSubmit={handleSubmit(submitData)} >

        <div className="form-row">

          <div className="col">
            <p><h2>First Name:</h2></p>
            <input 
              type="text"
              {...register('firstname')}
            />
            {errors.firstname && <p>{errors.firstname.message}</p>}
          </div>

          <div className="col">
          <p><h2>Last Name:</h2></p>
            <input
              type="text" 
              {...register('lastname')} 
               className = ""
            />
            {errors.lastname && <p>{errors.lastname.message}</p>}
          </div>

        </div>

        <p><h2>Email address:</h2></p>

        <input
          type="email"
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <p><h2>Tape a password:</h2></p>

        <input
          type="password"
          {...register('password')} 
        />
        {errors.password && <p>{errors.password.message}</p>}

            <p><h2>Confirm Your password:</h2></p>
                
        <input
        type="password"
        {...register('cpassword', {
            validate: value =>
            value === password || 'Passwords do not match',
        })}
        />
        {errors.cpassword && <p>{errors.cpassword.message}</p>}
        <p><h2>Phone Number:</h2></p>

      <input
          type="text"  
          {...register('numeroTelephone')}
        />
            <p><h2>Location (City):</h2></p>

        <input
          type="text"
          {...register('adresse')} 
        />
            <p><h2>Location (Appartement Number):</h2></p>

        <input
          type="text"
          {...register('numeroAppartement')}
        />
            <p><h2>Choose Your Profile Image:</h2></p>

      <input type="file" {...register('photoProfil')} /> 

        <button type="submit">Submit</button>

        <p>
          Already have an account? <Link to="/login">Log In</Link>  
        </p>

      </form>

    </div>
  </div>
</div>

<ToastContainer />

</>
  )

}

export default SignUp;
 */



import React, { useEffect } from 'react';

const GoogleOneTapAuth = () => {
  useEffect(() => {
    const handleCredentialResponse = (response) => {
      const { credential } = response;

      // Utilisez la credential pour l'authentification côté serveur ou client

      // Exemple: Envoyer la credential au serveur pour vérification
      fetch('/api/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credential),
      })
        .then((response) => response.json())
        .then((data) => {
          // Gérez la réponse du serveur (par exemple, mettez à jour l'état de l'utilisateur authentifié)
        })
        .catch((error) => {
          console.error('Erreur lors de l\'appel à l\'API de connexion Google:', error);
        });
    };

    // Chargez le script Google One Tap
    const loadGoogleOneTapScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.onload = () => {
        // Initialisez Google One Tap une fois que le script est chargé
        window.google.accounts.id.initialize({
          client_id: 'YOUR_GOOGLE_CLIENT_ID',
          callback: handleCredentialResponse,
        });
      };
      document.body.appendChild(script);
    };

    loadGoogleOneTapScript();

    // Nettoyage lors du démontage du composant
    return () => {
      const script = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div>
      {/* Affichage de l'interface utilisateur pour l'authentification Google One Tap */}
      <div id="g_id_onload"
        data-client_id="13549718784-2oa1s8n1jk5g41q05du4a2a6sgufikq3.apps.googleusercontent.com"
        data-callback="handleCredentialResponse"
      />
    </div>
  );
};

export default GoogleOneTapAuth;