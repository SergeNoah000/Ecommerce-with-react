
import Header from './Elements/Header';
import Footer from './Elements/Footer';
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';


const Home_detail = () => {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);
  const [produitsMemeCategorie, setProduitsMemeCategorie] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await axios.get(`http://localhost:7200/produit/${id}`);
		console.log(response.data.data)
        setProduit(response.data.data);
      

    // Récupérer les produits de la même catégorie
    const categorie = response.data.categorie;
    const responseMemeCategorie = await axios.get(`http://localhost:7200/produits/categorie/${id}`);
    setProduitsMemeCategorie(responseMemeCategorie.data);
    } catch (error) {
    console.error(error);
    }
    };

    fetchProduit();
    }, [id]);

    // Reste du code du composant Home...
	const addToCart = (produit) => {
		const newItem = {
		id: produit.id_produit,
		name: produit.nom_produit,
		price: produit.prix_produit,
		quantity: 1
		};
	
		setCartItems([...cartItems, newItem]);
	};
	const increaseQuantity = (itemId) => {
		const updatedItems = cartItems.map((cartItem) => {
		if (cartItem.id === itemId) {
			return { ...cartItem, quantity: cartItem.quantity + 1 };
		}
		return cartItem;
		});
	
		setCartItems(updatedItems);
	};
	
	const decreaseQuantity = (itemId) => {
		const updatedItems = cartItems.map((cartItem) => {
		if (cartItem.id === itemId) {
			const newQuantity = cartItem.quantity - 1;
			if (newQuantity < 1) {
			return null; // Supprimer l'élément du panier si la quantité devient inférieure à 1
			}
			return { ...cartItem, quantity: newQuantity };
		}
		return cartItem;
		});
	
		const filteredItems = updatedItems.filter((item) => item !== null); // Filtrer les éléments nuls
	
		setCartItems(filteredItems);
	};
  
        console.log(cartItems)


  if (!produit) {
    return <div>Chargement de la pag...</div>;
  }

    return (
	<div>
		
<section className="w3l-banner-slider-main">
      <div className="top-header-content">
        <header className="tophny-header">
          <Header cartItems={cartItems}   increaseQuantity = {increaseQuantity} decreaseQuantity = {decreaseQuantity}/>
        </header>
      </div>  
	  
    </section>
	<section class="w3l-ecommerce-main-inn">

            <div class="ecomrhny-content-inf py-5">
                <div class="container py-lg-5">
                    
                    <div class="sp-store-single-page row">
                        <div class="col-lg-5 single-right-left">
                            <div class="flexslider1">

                                <ul class="slides">
                                    <li data-thumb="assets/images/cart1.jpg">
                                        <div class="thumb-image"> <img src={`http://localhost:3500/${produit.image_produit}`} data-imagezoom="true"
                                                class="img-fluid" alt={produit.nom_produit}/> </div>
                                    </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                            <div class="eco-buttons mt-5">

                                <div class="transmitv single-item">
                                    <form action="#" method="post">
                                        <input type="hidden" name="cmd" value="_cart"/>
                                        <input type="hidden" name="add" value="1"/>
                                        <input type="hidden" name="transmitv_item" value="Yellow T-Shirt"/>
                                        <input type="hidden" name="amount" value="599.99"/>
                                        <button type="submit" class="transmitv-cart ptransmitv-cart add-to-cart read-2">
                                            Add to Cart
                                        </button>
                                    </form>
                                </div>
                                <div class="buyhny-now"> <a href="#buy" class="action btn">Buy Now </a></div>

                            </div>
                        </div>
                        <div class="col-lg-7 single-right-left pl-lg-4">
                            <h3>{produit.nom_produit}</h3>
                            <div class="caption">

                                <ul class="rating-single">
                                    <li>
                                        <a href="#">
                                            <span class="fa fa-star yellow-star" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="fa fa-star yellow-star" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="fa fa-star yellow-star" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="fa fa-star-half-o yellow-star" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="fa fa-star-half yellow-star" aria-hidden="true"></span>
                                        </a>
                                    </li>
                                </ul>

                                <h6>
                                    <span class="item_price">{produit.prix_produit}</span>
                                    <del>{produit.ancien_prix_produit}</del> Free Delivery
                                </h6>
                            </div>
                            <div class="desc_single my-4">
                                <ul class="emi-views">
                                    <li><span>Special Price</span> Get extra 5% off (price inclusive of discount)</li>
                                    <li><span>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                                    <li><span>Bank Offer</span> 5% Cashback* on HDFC Bank Debit Cards</li>
                                    <li><span>Bank Offer</span> Extra 5% off* with Axis Bank Buzz Credit Card</li>
                                </ul>
                            </div>
                            <div class="desc_single mb-4">
                                <h5>Description:</h5>
                                <p>{produit.description_produit}</p>
                            </div>
                            <div class="description-apt d-grid mb-4">
                                <div class="occasional">
                                    <h5 class="sp_title mb-3">Highlights:</h5>
                                    <ul class="single_specific">
                                        <li>
                                            Neck : Round Neck</li>
                                        <li>
                                            Fit : Regular</li>

                                        <li> Sleeve : Half Sleeve
                                        </li>
                                        <li> Material : Pure Cutton</li>

                                    </ul>

                                </div>

                                <div class="color-quality">
                                    <h5 class="sp_title">Services:</h5>
                                    <ul class="single_serv">
                                        <li>
                                            <a href="#">30 Day Return Policy</a>
                                        </li>
                                        <li class="gap">
                                            <a href="#">Cash on Delivery available</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="description mb-4">
                                <h5>Check delivery, payment options and charges at your location</h5>
                                <form action="#" class="d-flex" method="post">
                                    <input type="text" placeholder="Enter pincode" required/>
                                    <button class="submit btn" type="submit">Check</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
          
            </div>
           
        </section>

        <section class="w3l-ecommerce-main w3l-ecommerce-main-inn">
           
            <div class="content-singlev-ecomm py-5">
                <div class="container py-lg-5">
                    <div class="two-products-single row">
                        <div class="col-md-6 pro-grid-left">
                            <div class="pro-grid-one">
                                <div class="product-des-hny">
                                    <h4 class="text-wthree">WOMEN'S FASHION
                                        <br/>50% OFF </h4>
                                        <Link to="/Home_list" class="read-more-btn2 btn">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 pro-grid-right">
                            <div class="pro-grid-one pro-grid-two">
                                <div class="product-des-hny">
                                    <h4 class="text-wthree">MEN'S FASHION
                                        <br/>60% OFF </h4>
                                    <Link to="/Home_list" class="read-more-btn2 btn">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="w3l-ecommerce-main">

            <div class="ecom-contenthny py-5">
                <div class="container py-lg-5">
                    <div></div>
                    <h3 class="hny-title mb-0 text-center">Featured <span>Products</span></h3>
                    <p class="text-center">New Collections Shop With Us</p>
                    <div>  </div>
          
                    
                    <div class="ecom-products-grids row mt-lg-5 mt-3">
                    {produitsMemeCategorie.map((produit) => (
                        <div class="col-lg-3 col-6 product-incfhny mt-4" key={produit.id}>
                            <div class="product-grid2 transmitv">
                                <div class="product-image2">
                                    <Link to={`/Home_detail/${produit.id}`}>
                                        <img class="pic-1 img-fluid" src={`http://localhost:3500/${produit.image_produit}`}/>
                                        <img class="pic-2 img-fluid" src={`http://localhost:3500/${produit.image_produit}`}/>
                                    </Link>
                                    <ul class="social">
                                            <li><Link to={`/Home_detail/${produit.id}`} data-tip="Quick View"><span class="fa fa-eye"></span></Link></li>

                                            <li><Link to="" onClick={() => addToCart(produit)}> <span class="fa fa-shopping-bag"></span></Link>
                                            </li>
                                    </ul>
                                    <div class="transmitv single-item">
                                  
                                            <button type="submit" class="transmitv-cart ptransmitv-cart add-to-cart" onClick={() => addToCart(produit)}>
                                                Add to Cart
                                            </button>
                                       
                                    </div>
                                </div>
                                <div class="product-content">
                                    <h3 class="title"><Link to={`/Home_detail/${produit.id}`}>{produit.nom_produit} </Link></h3>
                                    <span class="price"><del>{produit.ancien_prix_produit}</del>{produit.prix_produit}</span>
                                </div>
                            </div>
                        </div>
                    ))}
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