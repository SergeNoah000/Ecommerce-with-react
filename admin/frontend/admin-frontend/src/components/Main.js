// import Editor from './Editor';
import { useState } from 'react';
import MyModal from './modals/MyModal';

import Axios from 'axios';
import '../components/modals/css/modals.css'

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

function Main() {
       // definition du state qui conservera les donner de l'editeur
  const [content, setContent] = useState('');
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);

    console.log(data)
  };
        //dinamisation du modal (c'est a dire difinir l'ouverture et la fermeture)
   const [showModal, setShowModal] = useState(false);
        //ouverture du modal
    const handleClick = () => {
      setShowModal(true);
    };
         //fermeture du modal
    const handleClose = () => {
      setShowModal(false);
    };
      //definition du state qui conserve les donnees sur le vendeur 
    const [data, setData] = useState({
        nom: '',
        information_vendeur: '',
        cathegorie_produit: ' ',
        profil: '',
        password: ''
      });
       // definition du state qui conservera les le message en fonction de la reussite ou de l'echec de la requete
    const [message, setMessage] = useState('');
        //execution de la requete
        function handleSubmit(event){
            event.preventDefault();
            
            Axios.post("http://localhost:3001/api/vendeur" , {
                nom: data.nom,
                information_vendeur: content,
                cathegorie_produit : data.cathegorie_produit,
                profil: data.profil,
                password: data.password
            })
            .then(res =>{
                setMessage(res.data.message)
              
            }).catch(error => {
              setMessage(error.data.message)
            })
}
 

          function handle(e){
                const newdata = {...data}
              newdata[e.target.id] = e.target.value
              setData(newdata)
              console.log(newdata)
              
          }

    return <div className="page-content">
    <div className="container-fluid">

        
        <div className="row">
            <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">Create vendors</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Projects</a></li>
                            <li className="breadcrumb-item active">Create vendors</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>


        <div className="row">
    <form onSubmit={handleSubmit} className="col-lg-8">
      <div>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label" for="project-title-input">Name vendors</label>
              <input type="text" className="form-control"  name="nom" id='nom' value = {data.nom}  onChange={(e) => handle(e)}    placeholder="Enter vendors name" />
            </div>
            {message && <p className="confirm">{message} </p>}
            <div className="mb-3">
              <label className="form-label"> Description</label>
              <div id="ckeditor-classNameic">
                   <div>
                    
                        <CKEditor
                          editor={ ClassicEditor }
                          data={ content }
                          onChange={ handleEditorChange }
                        />
                    
                  </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="mb-3 mb-lg-0">
                  <label for="choices-priority-input" className="form-label">Types de produit</label>
                  <select className="form-select" data-choices data-choices-search-false id="cathegorie_produit" name="cathegorie_produit" value={data.cathegorie_produit} onChange={(e) => handle(e)} >
                  <option >--ajouter--</option>
                    <option value="Alimentaire">Alimentaire</option>
                    <option value="Electronique">Electronique</option>
                    <option value="vetement">vetement</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4">
                <div>
                  <label for="datepicker-deadline-input" className="form-label">Password</label>
                  <input type="text" className="form-control" id="password" name="password" value={data.password} onChange={(e) => handle(e)} placeholder="Enter  password" data-provider="flatpickr"/>
                </div>
                <div  className="fallback">
                  <label for="datepicker-deadline-input" className="form-label">Add profil</label>
                  <input onChange={(e) => handle(e)} id="profil" type="file"
                 name= 'profil'className="form-control" accept="image/*" title="ajouter une image"
                 value={data.profil}    >
                </input>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        <div className="text-end mb-4">
          <button type="submit" className="btn btn-success w-sm">Add vendor </button>
        </div>
      </div>
    </form>
            
            <div className="col-lg-4">
              
      

                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Members</h5>
                    </div>
                    <div className="card-body">
                       

                        <div>
                            <label className="form-label">All vendors</label>
                            <div className="avatar-group">
                                <a href="javascript: void(0);" className="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Brent Gonzalez">
                                    <div className="avatar-xs">
                                        <img src="assets/images/users/avatar-3.jpg" alt="" className="rounded-circle img-fluid"/>
                                    </div>
                                </a>
                                <a href="javascript: void(0);" className="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Sylvia Wright">
                                    <div className="avatar-xs">
                                        <div className="avatar-title rounded-circle bg-secondary">
                                            S
                                        </div>
                                    </div>
                                </a>
                                <a href="javascript: void(0);" className="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Ellen Smith">
                                    <div className="avatar-xs">
                                        <img src="assets/images/users/avatar-4.jpg" alt="" className="rounded-circle img-fluid"/>
                                    </div>
                                </a>
                               
                                        <MyModal show={showModal} handleClose={handleClose} />
                                    {/* </div>
                                </a> */}
                            </div>
                        </div>
                    </div>
                 
                </div>
            
            </div>
           
        </div>
       

    </div>
  
</div>
    
  
  }
  
  export default Main