import './modals/css/modals.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Modals from './Modals';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import { isWithinInterval, startOfMonth, endOfMonth, subYears } from 'date-fns';
function MainList () {
    const [data, setData] = useState([]);
    const [editVendeur, setEditVendeur] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('http://localhost:3001/api/vendeur');
        setData(result.data.data);
      };
  
      fetchData();
    }, []);
    // const currentDate = new Date();

    // let startDate;
    // let endDate;
    
    // if (filter === "Last 30 Days") {
    //   startDate = subDays(currentDate, 30);
    //   endDate = currentDate;
    // } else if (filter === "This Month") {
    //   startDate = startOfMonth(currentDate);
    //   endDate = endOfMonth(currentDate);
    // } else if (filter === "Last Year") {
    //   startDate = subYears(currentDate, 1);
    //   endDate = currentDate;
    // }
    // const filteredVendeurs = data.filter((vendeur) => {
    //   const createdDate = new Date(vendeur.created);
    //   return isWithinInterval(createdDate, { start: startDate, end: endDate });
    // });
      function handle(e){
        const { id, value } = e.target;
        setData((prevData) =>
          prevData.map((vendeur) => {
            if (vendeur.id === editVendeur.id) {
              return { ...vendeur, [id]: value };
            }
            return vendeur;
          })
        );
      
  }
  const handleEdit = (vendeur) => {
    setEditVendeur(vendeur);
  setIsEditing(true);
  
  setContent(vendeur.information_vendeur);
  };
  const [content, setContent] = useState('');
  
 const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        const updateVendeur = async (id, updatedVendeur) => {
            try {
              await axios.put(`http://localhost:3001/vendeurs/${id}`, updatedVendeur);
          
              // Recherchez le vendeur mis à jour dans les données existantes
              const updatedData = data.map((vendeur) => {
                if (vendeur.id === id) {
                  return { ...vendeur, ...updatedVendeur };
                }
                return vendeur;
              });
          setData(updatedData);
              setEditVendeur(null);
              setIsEditing(false);
            } catch (error) {
              console.error('Erreur lors de la mise à jour du vendeur :', error);
            }
           
          };
      await updateVendeur(editVendeur.id, editVendeur);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du vendeur :', error);
    }
  };
    return (
        <div className="row vendeur-container">

             {isEditing ? (
      <form  onSubmit={handleSubmit}>
        <div>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label" for="project-title-input">Name vendors</label>
              <input type="text" className="form-control"  name="nom" id='nom'  value={editVendeur.nom}
              onChange={(e) => setEditVendeur({ ...editVendeur, nom: e.target.value })}    placeholder="Enter vendors name" />
            </div>
           
            <div className="mb-3">
              <label className="form-label"> Description</label>
              <div id="ckeditor-classNameic">
                   <div>
                    
                        <CKEditor
                          editor={ClassicEditor}
                          data={editVendeur.information_vendeur}
                          onChange={(e ,editor) => setEditVendeur({ ...editVendeur, cathegorie_produit:   setContent(editor.getData())})}
                          
                        />
                    
                  </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="mb-3 mb-lg-0">
                  <label for="choices-priority-input" className="form-label">Types de produit</label>
                  <select className="form-select" data-choices data-choices-search-false id="cathegorie_produit" name="cathegorie_produit" value={editVendeur.cathegorie_produit} onChange={(e) => setEditVendeur({ ...editVendeur, cathegorie_produit: e.target.value })}  >
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
                  <input type="text" className="form-control" id="password" name="password"value={editVendeur.password}
  onChange={(e) => setEditVendeur({ ...editVendeur, password: e.target.value })} placeholder="Enter  password" data-provider="flatpickr"/>
                </div>
                <div  className="fallback col-lg-4">
                  <label for="datepicker-deadline-input" className="form-label">Add profil</label>
                  <input onChange={(e) => setEditVendeur({ ...editVendeur, profil: e.target.value })} id="profil" type="file"
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
    ) : (
      data.map((vendeur) => ( 
              <div className="col-xxl-6 col-sm-4 project-card vendeur-card">
                            <div className="card card-height-100">
                                <div className="card-body">
                                    <div className="d-flex flex-column h-100">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <p className="text-muted mb-4"> cree le:{vendeur.created}</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="d-flex gap-1 align-items-center">
                                                    <button type="button" className="btn avatar-xs mt-n1 p-0 favourite-btn shadow-none">
                                                        <span className="avatar-title bg-transparent fs-15">
                                                            <i className="ri-star-fill"></i>
                                                        </span>
                                                    </button>
                                                    <div className="dropdown">
                                                        <button className="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15 shadow-none" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                      
                                                        <i class="gg-more" title='more'></i>
                                                        </button>

                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <button  className="dropdown-item" onClick={() => handleEdit(vendeur)}><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit</button>
                                                            {/* <a className="dropdown-item" href="apps-projects-create.html"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a> */}
                                                            <div className="dropdown-divider"></div>
                                                                <Modals vendeurId={vendeur.id}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-3">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm ">
                                                    <span className="avatar-title bg-warning-subtle rounded p-3">
                                                        <img src={vendeur.profil} alt="" className="img-fluid p-1"/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="mb-1 fs-15"><a href="apps-projects-overview.html" className="text-body">{vendeur.nom}</a></h5>
                                                <p className="text-muted text-truncate-two-lines mb-3">{vendeur.information_vendeur}</p>
                                            </div>
                                        </div>
                                        <div className="mt-auto">
                                            <div className="d-flex mb-2">
                                                <div className="flex-grow-1">
                                                    <div>Tasks</div>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div><i className="ri-list-check align-bottom me-1 text-muted"></i> 18/42</div>
                                                </div>
                                            </div>
                                            <div className="progress progress-sm animated-progress">
                                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
   
                                <div className="card-footer bg-transparent border-top-dashed py-2">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <div className="avatar-group">
                                                <a href="javascript: void(0);" className="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Darline Williams">
                                                    <div className="avatar-xxs">
                                                        <img src="assets/images/users/avatar-2.jpg" alt="" className="rounded-circle img-fluid"/>
                                                    </div>
                                                </a>
                                                <a href="javascript: void(0);" className="avatar-group-item shadow" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Add Members">
                                                    <div className="avatar-xxs">
                                                        <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                                            +
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="text-muted">
                                                <i className="ri-calendar-event-fill me-1 align-bottom"></i> 10 Jul, 2021
                                            </div>
                                        </div>

                                    </div>

                                </div>
                              
                            </div>
                        
                        </div>
             )
              )        
    )}
        </div> 
    )
}
export default MainList