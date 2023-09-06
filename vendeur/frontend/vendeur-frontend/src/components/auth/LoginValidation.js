import React from 'react'

const LoginValidation = (values) => {
    alert("")
    let error={}
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(values.nom === ""){
        error.nom="le nom de la boutique svp"
    }

    if(values.password === ""){
        error.password="le mot de passe  ne peut être vide"
    }
    else if(!password_pattern.test(values.password)){
        error.password="le mot de passe dois avoir au moins 8 caractere et dois continir au moins un chiffre, une lettre majuscule et muniscule "
     }
  return error;
}

export default LoginValidation
