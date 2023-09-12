/* import { useState, useEffect } from 'react';
import { useGoogleOneTapLogin } from '@react-oauth/google';

export function GoogleAuth() {
  const [user, setUser] = useState(null);

  const handleCredentialResponse = (response) => {
    // Récupérer les informations de l'utilisateur
    setUser(response.credential);
  };

    useGoogleOneTapLogin(handleCredentialResponse);

    return () => {
      // Déconnexion au démontage
      googleLogout(); 
    }

  if(user) {
    // Si connecté, afficher les infos
    return (
      <div>
        <img src={user.photoUrl} /> 
        {user.name}
      </div>
    )
  } else {
    // Sinon afficher le bouton de connexion
    return <GoogleLoginButton />
  }
}
 */