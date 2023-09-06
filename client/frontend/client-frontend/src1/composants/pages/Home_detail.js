
import Header from './Elements/Header';
import Footer from './Elements/Footer';
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Home_detail = () => {
	const { id } = useParams();
	const [produit, setProduit] = useState(null);
	// const [articles, setArticles] = useState([]);
  
	useEffect(() => {
	  const fetchProduit = async () => {
		try {
		  const response = await axios.get(`http://localhost:8000/produit/${id}`);
		  console.log(response.data.data);
		  setProduit(response.data.data);
  
		//   // Récupérer la catégorie du produit
		//   const categorie = response.data.data.category;
  
		//   // Récupérer tous les articles de la même catégorie
		//   const responseArticles = await axios.get(`http://localhost:5000/articles/${categorie}`);
		//    cslog         (responseArticles.data.data);
		//   setArticles(responseArticles.data.data);
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
  
	// Affichage des articles de la même catégorie
    return (
	<div>
		
<section className="w3l-banner-slider-main">
      <div className="top-header-content">
        <header className="tophny-header">
          
        </header>
      </div>  
	  
    </section>
	<section className="w3l-ecommerce-main-inn">

            <div className="ecomrhny-content-inf py-5">
                <div className="container py-lg-5">
                    
                    <div className="sp-store-single-page row">
                        <div className="col-lg-5 single-right-left">
                            <div className="flexslider1"key={produit.id_produit}>

                                <ul className="slides"  >
                                    <li data-thumb="assets/images/cart1.jpg">
                                        <div className="thumb-image">
                                             <img src={produit.nom_produit} data-imagezoom="true"
                                                className="img-fluid" alt=''/> </div>
                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            <div className="eco-buttons mt-5">

                                <div className="transmitv single-item">
                                    <form action="#" method="post">
                                        <input type="hidden" name="cmd" value="_cart"/>
                                        <input type="hidden" name="add" value="1"/>
                                        <input type="hidden" name="transmitv_item" value="Yellow T-Shirt"/>
                                        <input type="hidden" name="amount" value="599.99"/>
                                        <button type="submit" className="transmitv-cart ptransmitv-cart add-to-cart read-2">
                                            Add to Cart
                                        </button>
                                    </form>
                                </div>
                                <div className="buyhny-now"> <a href="#buy" className="action btn">Buy Now </a></div>

                            </div>
                        </div>
                        <div className="col-lg-7 single-right-left pl-lg-4">
                            <h3>{produit.nom_produit}</h3>
                            <div className="caption">

                                <ul className="rating-single">
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star yellow-star" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star yellow-star" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star yellow-star" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star-half-o yellow-star" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star-half yellow-star" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                </ul>

                                <h6>
                                    <span className="item_price">{produit.prix_produit}</span>
                                    <del>{produit.ancien_prix_produit}</del> Free Delivery
                                </h6>
                            </div>
                            <div className="desc_single my-4">
                                <ul className="emi-views">
                                    <li><span>Special Price</span> Get extra 5% off (price inclusive of discount)</li>
                                    <li><span>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                                    <li><span>Bank Offer</span> 5% Cashback* on HDFC Bank Debit Cards</li>
                                    <li><span>Bank Offer</span> Extra 5% off* with Axis Bank Buzz Credit Card</li>
                                </ul>
                            </div>
                            <div className="desc_single mb-4">
                                <h5>Description:</h5>
                                <p>{produit.description_produit}</p>
                            </div>
                            <div className="description-apt d-grid mb-4">
                                <div className="occasional">
                                    <h5 className="sp_title mb-3">Highlights:</h5>
                                    <ul className="single_specific">
                                        <li>
                                            Neck : Round Neck</li>
                                        <li>
                                            Fit : Regular</li>

                                        <li> Sleeve : Half Sleeve
                                        </li>
                                        <li> Material : Pure Cutton</li>

                                    </ul>

                                </div>

                                <div className="color-quality">
                                    <h5 className="sp_title">Services:</h5>
                                    <ul className="single_serv">
                                        <li>
                                            <a href="#">30 Day Return Policy</a>
                                        </li>
                                        <li className="gap">
                                            <a href="#">Cash on Delivery available</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="description mb-4">
                                <h5>Check delivery, payment options and charges at your location</h5>
                                <form action="#" className="d-flex" method="post">
                                    <input type="text" placeholder="Enter pincode" required/>
                                    <button className="submit btn" type="submit">Check</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
          
            </div>
           
        </section>

        <section className="w3l-ecommerce-main w3l-ecommerce-main-inn">
           
            <div className="content-singlev-ecomm py-5">
                <div className="container py-lg-5">
                    <div className="two-products-single row">
                        <div className="col-md-6 pro-grid-left">
                            <div className="pro-grid-one">
                                <div className="product-des-hny">
                                    <h4 className="text-wthree"> sell
                                        <br/>50% OFF </h4>
                                        <Link to="/Home_list" className="read-more-btn2 btn">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 pro-grid-right">
                            <div className="pro-grid-one pro-grid-two">
                                <div className="product-des-hny">
                                    <h4 className="text-wthree">MEN'S FASHION
                                        <br/>60% OFF </h4>
                                    <Link to="/Home_list" className="read-more-btn2 btn">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w3l-ecommerce-main">

            <div className="ecom-contenthny py-5">
                <div className="container py-lg-5">
                    <div></div>
                    <h3 className="hny-title mb-0 text-center">Featured <span>Products</span></h3>
                    <p className="text-center">New Collections Shop With Us</p>
                    <div>  </div>
          
                    
                    <div className="ecom-products-grids row mt-lg-5 mt-3">
                        <div className="col-lg-3 col-6 product-incfhny mt-4">
                            <div className="product-grid2 transmitv">
                                <div className="product-image2">
                                    <Link href="ecommerce-single.html">
                                        <img className="pic-1 img-fluid" src={produit.url}/>
                                        <img className="pic-2 img-fluid" src={produit.url}/>
                                    </Link>
                                    <ul className="social">
                                            <li><a href={`/Home_detail/${produit.id}`} data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                                            <li><a href="ecommerce.html" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
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
                                    <h3 className="title"><a href="ecommerce-single.html">{produit.nom_produit} </a></h3>
                                    <span className="price"><del>{produit.ancien_prix_produit}</del>{produit.prix_produit}</span>
                                </div>
								
                            </div>
                        </div>
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
export default Home_detail