import React,{useEffect,useState} from "react";
import DetailsProduct from '../detailleproduct/DetailsProduct';
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from 'jwt-decode';
const { DateTime } = require("luxon");


function Product(){
const [products, setProducts]=useState([]);
// useEffect(()=>{
//     getProducts();
// },[]);

// const getProducts= async()=>{
//     const reponse = await axios.get("http://localhost:5000/products");
//     setProducts(reponse.data);
    // Fonction utilitaire pour obtenir l'URL de l'image modifiée


useEffect(() => {
    // Récupérer le token JWT depuis le localStorage
    const token = localStorage.getItem('token');
    const decodedToken = jwt_decode(token); // Décoder le token pour obtenir les informations qu'il contient
    const vendeurId = decodedToken.vendeurId;
      
    // Vérifier si l'utilisateur est connecté
    if (token) {
      // Définir le header Authorization avec le token JWT pour les requêtes ultérieures
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Récupérer les produits du vendeur connecté
      axios.get( `http://localhost:5000/products`)

        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);
return(  
<div>
<div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                      <div class="row">
                         <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0">Products</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                        <li class="breadcrumb-item active">Products</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>   
         

                    <div class="row">
                    <div class="col-xl-9 col-lg-8">
                            <div>
                                <div class="card">
                                    <div class="card-header border-0">
                                        <div class="row g-4">
                                            <div class="col-sm-auto">
                                                <div>
                                                    <Link to='/AjoutProduire' class="btn btn-success" id="addproduct-btn"><i class="ri-add-line align-bottom me-1"></i> Add Product</Link>
                                                </div>
                                            </div>
                                            <div class="col-sm">
                                                <div class="d-flex justify-content-sm-end">
                                                    <div class="search-box ms-2">
                                                        <input type="text" class="form-control" id="searchProductList" placeholder="Search Products..."/>
                                                        <i class="ri-search-line search-icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-header">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <ul class="nav nav-tabs-custom card-header-tabs border-bottom-0" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link active fw-semibold" data-bs-toggle="tab" href="#productnav-all" role="tab" aria-selected="true">
                                                            All <span class="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">12</span>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#productnav-published" role="tab" aria-selected="false" tabindex="-1">
                                                            Published <span class="badge bg-danger-subtle text-danger align-middle rounded-pill ms-1">5</span>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link fw-semibold" data-bs-toggle="tab" href="#productnav-draft" role="tab" aria-selected="false" tabindex="-1">
                                                            Draft
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-auto">
                                                <div id="selection-element">
                                                    <div class="my-n1 d-flex align-items-center text-muted">
                                                        Select <div id="select-content" class="text-body fw-semibold px-1"></div> Result <button type="button" class="btn btn-link link-danger p-0 ms-3 shadow-none" data-bs-toggle="modal" data-bs-target="#removeItemModal">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div class="card-body">

                                        <div class="tab-content text-muted">
                                            <div class="tab-pane active" id="productnav-all" role="tabpanel">
                                               
                                            </div>
                                         

                                            <div class="tab-pane" id="productnav-draft" role="tabpanel">
                                                <div class="py-4 text-center">
                                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" >
                                                    </lord-icon>
                                                    <h5 class="mt-4">Sorry! No Result Found</h5>
                                                </div>
                                            </div>
                                          
                                        </div>
                                       

                                    </div>
                                   
                                </div>
                               
                            </div>
                        </div>


                 <table>
                    <thead class="gridjs-thead"><tr class="gridjs-tr">
                        <th data-column-id="#" class="gridjs-th gridjs-th-sort text-muted" tabindex="0" >
                            <div class="gridjs-th-content">#</div>
                            <button tabindex="-1" aria-label="Sort column ascending" title="Sort column ascending" class="gridjs-sort gridjs-sort-neutral">

                            </button>
                        </th>
                        <th data-column-id="product" class="gridjs-th gridjs-th-sort text-muted" tabindex="0" >
                            <div class="gridjs-th-content">
                                Product
                            </div>
                        <button tabindex="-1" aria-label="Sort column ascending" title="Sort column ascending"      class="gridjs-sort gridjs-sort-neutral">
                        </button>
                        </th>
                       
                        <th data-column-id="price" class="gridjs-th gridjs-th-sort text-muted" tabindex="0" >
                        <div class="gridjs-th-content">Price</div>
                        <button tabindex="-1" aria-label="Sort column ascending" title="Sort column ascending" class="gridjs-sort gridjs-sort-neutral">
                            </button></th>
                       
                       
                            <th data-column-id="published" class="gridjs-th gridjs-th-sort text-muted" tabindex="0" >
                                <div class="gridjs-th-content">Published</div>
                        <button tabindex="-1" aria-label="Sort column ascending" title="Sort column ascending" class="gridjs-sort gridjs-sort-neutral"></button>
                        </th><th data-column-id="action" class="gridjs-th gridjs-th-sort text-muted" tabindex="0">
                        <div class="gridjs-th-content">Action</div>
                        <button tabindex="-1" aria-label="Sort column ascending" title="Sort column ascending" class="gridjs-sort gridjs-sort-neutral">
                        </button></th></tr></thead>
                 

                 <tbody>
                 {products.map((product ) => (
                    <tr class="gridjs-tr"><td data-column-id="#" class="gridjs-td"><span><div class="form-check checkbox-product-list">	
                    <input class="form-check-input" type="checkbox" value="1" id="checkbox-1"/>					<label class="form-check-label" for="checkbox-1">
                    </label>				  </div></span>
                    </td><td data-column-id="product" class="gridjs-td"><span><div class="d-flex align-items-center"><div class="flex-shrink-0 me-3"><div class="avatar-sm bg-light rounded p-1"><img src={product.image_produit} alt="" class="img-fluid d-block"/></div></div><div class="flex-grow-1"><h5 class="fs-14 mb-1"><a href="apps-ecommerce-product-details.html" class="text-body">{product.nom_produit}</a></h5>
                    <p class="text-muted mb-0">Category : <span class="fw-medium">Alimentaire</span></p>
                    </div></div></span></td>
                    
                    <td data-column-id="price" class="gridjs-td"><span>{product.prix_produit} XAF</span></td>
                   
                   
                        <td data-column-id="published" class="gridjs-td"><span>{DateTime.fromISO(product.created).toLocaleString(DateTime.DATETIME)}<small class="text-muted ms-1"> {DateTime.fromISO(product.created).toLocaleString(DateTime.TIME_SIMPLE)}</small></span></td><td data-column-id="action" class="gridjs-td"><span><div class="dropdown"><button class="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="ri-more-fill"></i></button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="apps-ecommerce-product-details.html"><i class="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li><li><a class="dropdown-item edit-list" data-edit-id="1" href="apps-ecommerce-add-product.html"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a></li><li class="dropdown-divider"></li><li><a class="dropdown-item remove-list" href="#" data-id="1" data-bs-toggle="modal" data-bs-target="#removeItemModal">
                    <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a>
                    </li></ul></div></span></td></tr>
                 ))}
                 </tbody>
                 </table>

                 </div>
                   

                </div>
            
            </div>







   
  




           
        </div>

</div>
    )
}

export default Product;