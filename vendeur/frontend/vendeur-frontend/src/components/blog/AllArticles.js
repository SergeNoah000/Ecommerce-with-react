import { Link } from "react-router-dom";
import "./AllArticles.css"
import { DateTime } from "luxon";
import { useEffect } from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode"
import axios from "axios";

function AllArticles (){
    
    const token = localStorage.getItem('token'); // Récupérer le token du localStorage
    const decodedToken = jwt_decode(token); // Décoder le token pour obtenir les informations qu'il contient
    const vendeurId = decodedToken.vendeurId;
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {

        console.log('http://localhost:8080/api/articles/'+vendeurId); 

        const result = await axios.get('http://localhost:8080/articles/vendeur/'+vendeurId);
        setData(result.data.data);
        console.log(result, "bonjour")
      };
  
      fetchData();
    }, []);
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/articles/${id}`);
        // Recharger les données pour refléter les changements
        window.location.reload();
      };
    return (
        
    <div className="vendeur-card">
           {  data.map((article) => (
        <div className="col-xxl col-sm-3 d-flex project-card">
        <div className="card card-height-100">
            <div className="card-body">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <p className="text-muted mb-4"> cree le:</p>
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

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="flex-shrink-0 me-3">
                            <div className="avatar-sm ">
                                
                                    <img src={`http://localhost:3500/${article.picture}`} alt="" className="img-fluid p-1"/>
                               
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="mb-1 fs-15"><a href="apps-projects-overview.html" className="text-body">{article.titre}</a></h5>
                          
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div className="d-flex mb-2">
                            <div className="flex-grow-1">
                                <div>Tasks</div>
                            </div>
                            <div className="flex-shrink-0">
                                <div><i className="ri-list-check align-bottom me-1 text-muted"></i> <button onClick={() => handleDelete(article.id)}>supprimer</button></div>
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
                            <i className="ri-calendar-event-fill me-1 align-bottom"></i> {DateTime.fromISO(article.created).toLocaleString(DateTime.DATETIME)}                         <small class="text-muted ms-1">{DateTime.fromISO(article.created).toLocaleString(DateTime.TIME_SIMPLE)}</small>
                        </div>
                    </div>

                </div>

            </div>
          
        </div>
    
    </div>
     ))}
    </div>
    )
}

export default AllArticles;