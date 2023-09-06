
import Header from './Elements/Header';
import Footer from './Elements/Footer';
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';


const Categorie_details = () => {
	const { id } = useParams();
	const [produit, setProduit] = useState(null);
	// const [articles, setArticles] = useState([]);

    const Card = ({ pd }) => {
        const cardStyle = {
          backgroundImage: `url(../${pd.image_produit})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        };

        return (
            <div className="col-md-6 pro-grid-left">
                <div className="pro-grid-one" style={cardStyle}>
                    <div className="product-des-hny">
                        <h4 className="text-wthree">{pd.nom_produit}
                            <br/>{pd.prix_produit} </h4>
                            <Link to={`/Home_detail/${pd.id}`} className="read-more-btn2 btn">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
          );
        }
      
  
	useEffect(() => {
	  const fetchProduit = async () => {
		try {
		  const response = await axios.get(`http://localhost:5000/categorie/${id}`);
		  setProduit(response.data[0]);
  
		} catch (error) {
		  console.error("Erreur lors de la récupération de l'article :", error);
		}
	  };
	  fetchProduit();
	}, [id]);
  
	if (!produit) {
	  return <div>Chargement des détails de l'article...</div>;
	}
  
	// Affichage des détails de l'article
    //const produit = produits[0];
    const categorie = produit.products;
    return (




<div>
	   
       <section className="w3l-banner-slider-main">
           <div className="top-header-content">
               <Header />
           </div>  
       </section>
       <section className="w3l-ecommerce-main-inn">
           
           <div className="ecomrhny-content-inf py-5">
               <div className="container py-lg-5">
               <div></div>
                   
                   <div className="ecommerce-grids row">
                       <div className="ecommerce-left-hny col-lg-4">
                           
                           <aside>
                               <div className="sider-bar">
                                   <div className="single-gd mb-5">

                                       <h4>Search <span>here</span></h4>
                                       <form action="/products/search" method="get" className="search-trans-form">
                                           <input className="form-control" type="search" name="q" placeholder="Search here..."
                                               required=""/>
                                           <button className="btn read-2">
                                               <span className="fa fa-search"></span>
                                           </button>

                                       </form>
                                   </div>
                                   

                                   <div className="single-gd mb-5">
                                       <h4>Product <span>Categories</span></h4>
                                       <ul className="list-group single">
                                           <li className="list-group-item d-flex justify-content-between align-items-center">
                                               Accessories
                                               <span className="badge badge-primary badge-pill">14</span>
                                           </li>
                                           <li className="list-group-item d-flex justify-content-between align-items-center">
                                               Suits
                                               <span className="badge badge-primary badge-pill">18</span>
                                           </li>
                                           <li className="list-group-item d-flex justify-content-between align-items-center">
                                               Footwear
                                               <span className="badge badge-primary badge-pill">12</span>
                                           </li>
                                           <li className="list-group-item d-flex justify-content-between align-items-center">
                                                   Blazers
                                               <span className="badge badge-primary badge-pill">10</span>
                                           </li>
                                       </ul>
                                   </div>

                                   
                                   

                                   <div className="single-gd customer-rev left-side mb-5">
                                       <h4>Customer <span>Color</span></h4>

                                       <ul className="product-color">
                                           <li>
                                               <input type="checkbox" name="color-check" id="redcheck" checked="checked" />
                                               <label for="redcheck" ></label>
                                           </li>
                                           <li>
                                               <input type="checkbox" name="color-check" id="#A2C2C9check" checked="checked" />
                                               <label for="#A2C2C9check" ></label>
                                           </li>
                                           <li>
                                               <input type="checkbox" name="color-check" id="#EFDBD4check" checked="checked" />
                                               <label for="#EFDBD4check" ></label>
                                           </li>
                                           <li>
                                               <input type="checkbox" name="color-check" id="#2196F3check" checked="checked" />
                                               <label for="#2196F3check" ></label>
                                           </li>
                                           <li>
                                               <input type="checkbox" name="color-check" id="#4CAF50check" checked="checked" />
                                               <label for="#4CAF50check" ></label>
                                           </li>
                                           <li>
                                               <input type="checkbox" name="color-check" id="#00BCD4check" checked="checked" />
                                               <label for="#00BCD4check" ></label>
                                           </li>
                                       </ul>
                                   </div>

                                   
                               </div>
                           </aside>
                           
                       </div>

                       <div className="ecommerce-right-hny col-lg-8">
                           <div className="row ecomhny-topbar">
                               <div className="col-6 ecomhny-result">
                                   <h4 className="ecomhny-result-count"> Showing  {categorie.length} <span> {produit.categories.nom_categorie}</span> categorie </h4>
                               </div>
                               <div className="col-6 ecomhny-topbar-ordering">

                                   <div className="ecom-ordering-select d-flex">
                                       <span className="fa fa-angle-down" aria-hidden="true"></span>
                                       <select>
                                               <option value="menu_order" selected="selected">Default Sorting</option>
                                               <option value="popularity">Sort by Popularity</option>
                                               <option value="rating">Sort by Average rating</option>
                                               <option value="date">Sort by latest</option>
                                               <option value="price">Sort by Price: low to high</option>
                                               <option value="price-desc">Sort by Price: high to low</option>
                                       </select>
                                   </div>
                               </div>
                           </div>

                       
                           <div className="ecom-products-grids row" >
                               {produit.products.map((pr) => (
                               <div className="col-lg-4 col-6 product-incfhny mb-4" key={pr.id}>
                                   <div className="product-grid2 transmitv">
                                       <div className="product-image2">
                                           <Link to={`/Home_detail/${pr.id}`}>
                                               <img className="pic-1 img-fluid" src={ "../" + pr.image_produit}/>
                                               <img className="pic-2 img-fluid" src={"../" + pr.image_produit}/>
                                           </Link>
                                           <ul className="social">
                                               <li><Link to={`/Home_detail/${pr.id}`} data-tip="Quick View"><span
                                                           className="fa fa-eye"></span></Link></li>
                                               <li><Link to="#" data-tip="Add to Cart"><span
                                                           className="fa fa-shopping-bag"></span></Link>
                                               </li>
                                           </ul>
                                           <div className="transmitv single-item">
                                               <form action="#" method="post">
                                                   <input type="hidden" name="cmd" value="_cart"/>
                                                   <input type="hidden" name="add" value="1"/>
                                                   <input type="hidden" name="transmitv_item" value="Women Maroon Top"/>
                                                   <input type="hidden" name="amount" value="899.99"/>
                                                   <button type="submit" className="transmitv-cart ptransmitv-cart add-to-cart">
                                                       Add to Cart
                                                   </button>
                                               </form>
                                           </div>
                                       </div>
                                       <div className="product-content">
                                           <h3 className="title"><Link to={`/Home_detail/${pr.id}`}>{pr.nom_produit} </Link>
                                           </h3>
                                           <span className="price">
                                           <del>{pr.ancien_prix_produit}</del> 
                                               {pr.prix_produit}
                                           </span>
                                       </div>
                                   </div>
                               
                               </div>
                            ))}
                           </div>
                       
                           <div className="ecom-slider-hny">
                               <div className="ecommerce-banv covers-9">
                                   <div className="csslider infinity" id="slider1">
                                       <input type="radio" name="slides" checked="checked" id="slides_1" />
                                       <input type="radio" name="slides" id="slides_2" />
                                       <input type="radio" name="slides" id="slides_3" />

                                       <ul className="banner_slide_bg">
                                           <li>
                                               <div className="wrapper">
                                                   <div className="cover-top-center-9">
                                                       <div className="w3ls_cover_txt-9">
                                                           <h6 className="tag-cover-9">30% Off</h6>
                                                           <h3 className="title-cover-9">Men's Suit</h3>

                                                           <div className="read-more-button">
                                                               <a href="/Home_list" className="read-btn btn">Shop
                                                                   Now</a>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </li>
                                           <li>
                                               <div className="wrapper">
                                                   <div className="cover-top-center-9">
                                                       <div className="w3ls_cover_txt-9">
                                                           <h6 className="tag-cover-9">50% Off</h6>
                                                           <h3 className="title-cover-9">Men's Footerwear</h3>

                                                           <div className="read-more-button">
                                                               <a href="/Home_list" className="read-btn btn">Shop
                                                                   Now</a>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </li>
                                           <li>
                                               <div className="wrapper">
                                                   <div className="cover-top-center-9">
                                                       <div className="w3ls_cover_txt-9">
                                                           <h6 className="tag-cover-9">50% Off</h6>
                                                           <h3 className="title-cover-9">Women's Footwear</h3>

                                                           <div className="read-more-button">
                                                               <a href="/Home_list" className="read-btn btn">Shop
                                                                   Now</a>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </li>

                                       </ul>
                                       <div className="arrows">
                                           <label for="slides_1"></label>
                                           <label for="slides_2"></label>
                                           <label for="slides_3"></label>

                                       </div>
                                       <div className="navigation">
                                           <div>
                                               <label for="slides_1"></label>
                                               <label for="slides_2"></label>
                                               <label for="slides_3"></label>

                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>

                           
                       </div>
                   </div>
                   
                   <div className="pagination">
                       <ul>
                           <li className="prev"><a href="#page-number"><span className="fa fa-angle-double-left"></span></a></li>
                           <li><a href="#page-number" className="active">1</a></li>
                           <li><a href="#page-number">2</a></li>
                           <li><a href="#page-number">3</a></li>

                           <li className="next"><a href="#page-number"><span className="fa fa-angle-double-right"></span></a></li>
                       </ul>
                   </div>
                   

               </div>
           </div>
       
       </section>

       <section className="w3l-footer-22">
             <Footer />
           </section>
       <div></div>
       
   </div>
	);

}
export default Categorie_details