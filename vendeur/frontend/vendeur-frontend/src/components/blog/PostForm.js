import React from "react"
import Axios from "axios"
import { useState } from "react"
import "./PostForm.css"
import jwt_decode from "jwt-decode"


function PostForm () {
    
    const token = localStorage.getItem('token'); // Récupérer le token du localStorage
    const decodedToken = jwt_decode(token); // Décoder le token pour obtenir les informations qu'il contient
    const vendeurId = decodedToken.vendeurId; 
    console.log(vendeurId)
    const url = `http://localhost:8080/article/${vendeurId}`
    const[data , setData] = useState({
      titre: "",
      contenu: "",
      picture: null
      
    })
    const [message, setMessage] = useState('');
    function submit (e){
        const formData = new FormData();
    formData.append('titre', data.titre);
    formData.append('contenu', data.contenu);
    formData.append('picture', data.picture);
   
        e.preventDefault();
        Axios.post(url , formData)
        .then(res =>{
            setMessage(res.data.message)
          
        })
        
       
    }
    
    
  const handle = (e) => {
    const { id, value, files } = e.target;
    const newData = { ...data };

    if (id === 'picture') {
      newData[id] = files[0];
      console.log("change picture");
    } else {
      newData[id] = value;
    }

    setData(newData);
    console.log(data)
  };
    return( 
     <div className="containe">
        
           
            <form onSubmit={(e) =>submit(e)} className="form">
                <h1> Creer un article</h1>
                <input onChange={(e) => handle(e)}  id="titre" value = {data.titre} 
                type="text" name= 'title'
                className="titles" placeholder="Ajouter un titre a votre article"   >
                   
                </input> <br/>
                {message && <p className="confirm">{message} </p>}
                
                <textarea onChange={(e) => handle(e)}  id = 'contenu'
                className="contenu" placeholder="Ajouter du contenu a votre article"   >{data.contenu}
                </textarea><br/>
                <input onChange={(e) => handle(e)}  id="picture" type="file"
                 name= 'title'className="file"  title="ajouter une image"
                  >
                </input><br/>
                <button type="submit" className="boutton"   
                 >Ajouter +
                </button>
            </form>
           
     </div>
    );
}
export default PostForm ;