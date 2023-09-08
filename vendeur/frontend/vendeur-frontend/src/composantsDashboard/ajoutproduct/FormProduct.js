import React,{useEffect,useState} from "react";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


function FormProduct(){
const token = localStorage.getItem('token'); // Récupérer le token du localStorage
const decodedToken = jwt_decode(token); // Décoder le token pour obtenir les informations qu'il contient
const vendeurId = decodedToken.vendeurId; 


    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
   async function  fetchCategories  ()  {
        try {
            const response = await axios.get("http://localhost:5000/categories");
            setCategories(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des catégories :", error);
        }
        };
useEffect(() => {
        
        fetchCategories();
    }, []);

console.log(categories);
 var  message = "";
const [data, setData] = useState({
    nom_produit: '',
    description_produit: '',
    categorieId: 1,
    prix_produit: '',
    image_produit: null,
  });

const [mes, setMes] = useState('')
  const [data1, setData1] = useState({
    nom_categorie: '',
    description_categorie: '',
  });


  const updateValue1 = (e) => {
    const { id, value } = e.target;
    const newData1 = { ...data1 };

    
      newData1[id] = value;
    

    setData1(newData1);
    console.log(data1);
  };

  const handle = (e) => {
    const { id, value, files } = e.target;
    const newData = { ...data };

    if (id === 'image_produit') {
      newData[id] = files[0];
    } else {
      newData[id] = value;
    }

    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nom_produit', data.nom_produit);
    formData.append('categorieId', data.categorieId);
    formData.append('description_produit', data.description_produit);
    formData.append('prix_produit', data.prix_produit);
    formData.append('image_produit', data.image_produit);

    axios
      .post(`http://localhost:5000/vendeurs/${vendeurId}/produits`, formData)
      .then((response) => {
        setMes(response.data.message)
        console.log(response.data);
        
       navigate('/ListProduct');
        // Effectuer des actions supplémentaires en cas de succès de la requête
      })
      .catch((error) => {
        console.error(error);
        // Effectuer des actions supplémentaires en cas d'erreur de la requête
      });
  };
console.log(data)


const submitForm1 = (e) => {
    e.preventDefault();
   
    console.log("Soumission du formuaire..." );
    axios
      .post(`http://localhost:5000/categories/create`, data1)
      .then((response) => {
         message = response.data.message;
        console.log(response.data.message);

        // Effectuer des actions supplémentaires en cas de succès de la requête
        try {
            const respon =  axios.get("http://localhost:5000/categories");
        console.log(respon.data);
            fetchCategories()
           const  element = document.getElementById("page-header-cart-dropdown");
            element.classList.remove("show");

        } catch (error) {
            console.error("Erreur lors de la récupération des catégories :\n" + error);
        }
  
      })
      .catch((error) => {
        console.error(error);
        // Effectuer des actions supplémentaires en cas d'erreur de la requête
      });
  };
console.log(data)



    return(
        <div>
             <div class="main-content">

<div class="page-content">
    <div class="container-fluid">

     
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0">Create Product</h4>
                    <h2>{message}</h2>
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                            <li class="breadcrumb-item active">Create Product</li>
                        </ol>
                        <h1>{ mes }</h1>
                    </div>

                </div>
            </div>
        </div>

        <form id="createproduct-form" autocomplete="off" class="needs-validation" onSubmit={handleSubmit}>
            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label" for="product-title-input">Product Title</label>
                                <input type="hidden" class="form-control" id="formAction" name="formAction" value="add"/>
                                <input type="text" class="form-control d-none" id="product-id-input"/>
                                <input type="text" class="form-control" id='nom_produit'  placeholder="Enter product title" required value={data.nom_produit}  onChange={(e) => handle(e)}/>
                                <div class="invalid-feedback">Please Enter a product title.</div>
                            </div>
                            <div>
                                <label>Product Description</label>

                                <div id="ckeditor-classic">
                                   <textarea id="description_produit" placeholder="décrivez votre produit en queles mots" class="col-lg-12" value={data.description_produit}  onChange={(e) => handle(e)}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Product Gallery</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-4">
                                <h5 class="fs-14 mb-1">Product Image</h5>
            
                            </div>
                            <div>
                                <h5 class="fs-14 mb-1">Product Gallery</h5>
                                <p class="text-muted">Add Product Gallery Images.</p>

                                <div class="dropzone">
                                    <div class="fallback">
                                        <input  type="file" multiple="multiple" name="image_produit" id='image_produit'  onChange={(e) => handle(e)}/>
                                    </div>
                                    <div class="dz-message needsclick">
                                        <div class="mb-3">
                                            <i class="display-4 text-muted ri-upload-cloud-2-fill"></i>
                                        </div>

                                        <h5>Drop files here or click to upload.</h5>
                                    </div>
                                </div>

                                <ul class="list-unstyled mb-0" id="dropzone-preview">
                                    <li class="mt-2" id="dropzone-preview-list">
                                       
                                        <div class="border rounded">
                                            <div class="d-flex p-2">
                                                <div class="flex-shrink-0 me-3">
                                                    <div class="avatar-sm bg-light rounded">
                                                        <img data-dz-thumbnail class="img-fluid rounded d-block" src="#" alt="Product-Image" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <div class="pt-1">
                                                        <h5 class="fs-14 mb-1" data-dz-name>&nbsp;</h5>
                                                        <p class="fs-13 text-muted mb-0" data-dz-size></p>
                                                        <strong class="error text-danger" data-dz-errormessage></strong>
                                                    </div>
                                                </div>
                                                <div class="flex-shrink-0 ms-3">
                                                    <button data-dz-remove class="btn btn-sm btn-danger">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                              
                            </div>
                        </div>
                    </div>
                    <div class="text-end mb-3">
                        <button type="submit" class="btn btn-success w-sm">Submit</button>
                    </div>
                </div>
               

                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Informations produit</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="choices-publish-status-input" class="form-label">Prix</label>

                                <input class="form-select" id="prix_produit" type="number" placeholder="entrer le prix du produit"  value={data.prix_produit}  onChange={(e) => handle(e)}/>
                            </div>

                            <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Product Categories</h5>
                        </div>
                        <div class="card-body">
                            <p class="text-muted mb-2">
                            <div class="dropdown topbar-head-dropdown ms-1 header-item">
                                <button type="button" class="btn btn-success w-sm" id="page-header-cart-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">
                                Add categorie
                                    
                                </button>
            <div class="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0 dropdown-menu-cart" aria-labelledby="page-header-cart-dropdown">
                <form onSubmit={submitForm1} method="post">
                    <div class="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                        <div class="row align-items-center">
                            <div class="col">
                            <h4 class="mb-sm-0">Create Categorie</h4>
                            </div>
                        
                        </div>
                    </div>
                    <div data-simplebar >
                        <div class="p-2">
                            
                        <label class="form-label" for="product-title-input">Categorie Name</label>
                        
                        
                        <input type="text" class="form-control" name="nom_categorie" id='nom_categorie'  placeholder="Enter categorie name"  value={data1.nom_categorie}  onChange={(e) => updateValue1(e)}required />

                        <div>
                            <label>Categorie Description</label>

                            <div id="ckeditor-classic">
                                <textarea id="description_categorie" name="description_categorie" placeholder="Une breve description" class="col-lg-12" value={data1.description_categorie}  onChange={(e) => updateValue1(e)}></textarea>
                            </div>
                        </div>     
                        </div>
                    </div>
                    <div class="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border" id="checkout-elem">
                        <div class="d-flex justify-content-between align-items-center pb-3">
                            
                        </div>
                        <h2 class= "btn-succes">{message}</h2>
                        <div class="text-end mb-3">
                            <button type="submit" class="btn center btn-success w-sm"  onClick={submitForm1}>Create</button>
                        </div>
                    
                    </div>
                </form>
            </div>
        </div>
                                    
                                    Select product category</p>
                            <select class="form-select" id="categorieId" name="categorieId" data-choices data-choices-search-false value={data.categorieId}  onChange={(e) => handle(e)}>
                                {categories.map((cat) => (
                                <option value={`${cat.id}`}>{cat.nom_categorie}</option>
                                ))}
                            </select>
                        </div>
                       
                    </div>
                        </div>
                        
                    </div>
                 

                    <div class="card">
                    </div>
                </div>
               
            </div>
            

        </form>

    </div>
    
</div>


<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <script>document.write(new Date().getFullYear())</script> © Velzon.
            </div>
            <div class="col-sm-6">
                <div class="text-sm-end d-none d-sm-block">
                    Design & Develop by Themesbrand
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
        </div>
    )
}
export default FormProduct;