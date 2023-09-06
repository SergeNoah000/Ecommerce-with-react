import Carousel from "./Elements/Carousel"
import Footer from "./Elements/Footer"
import Header from "./Elements/Header"
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Chatbox from "./Elements/Chatbox";






const Home = () => {
	const [Produits, setProduits] = useState([]);
	const [categories, setCategories] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	
	// j'utilise useEffect pour charger les produits une fois que le composant est monté
	useEffect(() => {
	const fetchProduits = async () => {
	try {
	const response = await axios("http://localhost:7200/products");
	// Si la réponse contient plus de 3 produits, limitez-la à 3 produits
	const limitedProducts = response.data.data.slice(0, 4);
	setProduits(limitedProducts);
	} catch (error) {
	console.error("Erreur lors de la récupération des produits :", error);
	}
	};
	fetchProduits();
	}, []);

	useEffect(() => {
		const fetchCategories = async () => {
		  try {
			const response = await axios.get("http://localhost:7200/categories");
			const limitedCategories = response.data.slice(0, 4);
			setCategories(limitedCategories);
		  } catch (error) {
			console.error("Erreur lors de la récupération des catégories :", error);
		  }
		};
	
		fetchCategories();
	  }, []);
	console.log("categories" + categories);
	
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

    return(
	<div>
		<section className="w3l-banner-slider-main">
        <div className="top-header-content">
		  <Header cartItems={cartItems}   increaseQuantity = {increaseQuantity} decreaseQuantity = {decreaseQuantity}/>
          <Carousel />
      </div>  
    	</section>
        <section className="w3l-grids-hny-2">
			<div className="grids-hny-2-mian py-5">
				<div className="container py-lg-5">
					<div></div>
					<h3 className="hny-title mb-0 text-center">Shop With <span>Us</span></h3>
					
					<div></div>
					<div className="welcome-grids row mt-5">
						{categories.map((category) => (
						<div className="col-lg-2 col-lg-3 col-md-4 col-6 welcome-image" key={category.id}>
								<div className="boxhny13">
										<Link to={`/Categorie_details/${category.id}`}>
												<img src={category.url_categorie} className="img-fluid" alt="" />
										<div className="boxhny-content">
											<h3 className="title">{category.nom_categorie}</h3>
										</div>
									</Link>
								</div>
								<h4><Link to={`/Categorie_details/${category.id}`}>{category.nom_categorie}</Link></h4>

						</div>
						 ))}
					</div>

				</div>
			</div>
		</section>

		<section className="w3l-content-w-photo-6">
			<div className="content-photo-6-mian py-5">
				<div className="container py-lg-5">
					<div className="align-photo-6-inf-cols row">
						
						<div className="photo-6-inf-right col-lg-6">
							<h3 className="hny-title text-left">All Branded Men's Suits are Flat <span>30% Discount</span></h3>
							<p>Visit our shop to see amazing creations from our designers.</p>
							<Link to="/Home_list" className="read-more btn">
									Shop Now
							</Link>
						</div>
						<div className="photo-6-inf-left col-lg-6">
							<img src="/assets/images/fruits/16.webp" className="img-fluid" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="w3l-video-6">

			<div className="video-66-info">
				<div className="container-fluid">
					<div className="video-grids-info row">
						<div className="video-gd-right col-lg-8">
							<div className="video-inner text-center">
										
								<Link className="play-button btn popup-with-zoom-anim" to="#small-dialog">
										<span className="fa fa-play" aria-hidden="true"></span>
								</Link>
								<div id="small-dialog" className="mfp-hide">
									<div className="search-top notify-popup">
											<iframe src='' frameBorder="0"
											allow="autoplay; fullscreen" allowFullScreen></iframe>
									</div>
								</div>
											
							</div>
						</div>

						<div className="video-gd-left col-lg-4 p-lg-5 p-4">
							<div className="p-xl-4 p-0 video-wrap">
								<h3 className="hny-title text-left">All Branded Women's Bags are Flat <span>30% Discount</span>
								</h3>
								<p>Visit our shop to see amazing creations from our designers.</p>
								<Link to="/Home_list" className="read-more btn">
									Shop Now
								</Link>
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
					<h3 className="hny-title mb-0 text-center">Shop With <span>Us</span></h3>
					
					<div className="ecom-products-grids row mt-lg-5 mt-3">
					{Produits.map((produit) => (
						<div className="col-lg-3 col-6 product-incfhny mt-4" key={produit.id_produit}>
							<div className="product-grid2 transmitv">
								<div className="product-image2">
									<Link to={`/Home_detail/${produit.id}`}>
										<img className="pic-1 img-fluid" src={produit.url}/>
										<img className="pic-2 img-fluid" src={produit.url}/>
									</Link>
									<ul className="social">
											<li><Link to={`/Home_detail/${produit.id}`} data-tip="Quick View"><span className="fa fa-eye"></span></Link></li>

											<li><Link href="" onClick={() => addToCart(produit)} data-tip="Add to Cart" ><span className="fa fa-shopping-bag"></span></Link>
											</li>
									</ul>
									<div className="transmitv single-item">
									
											
											<button
												type="submit"
												className="transmitv-cart ptransmitv-cart add-to-cart"
												onClick={() => addToCart(produit)}
												>
												Add to Cart
											</button>
										
									</div>
								</div>
								<div className="product-content">
									<h3 className="title"><Link to={`/Home_detail/${produit.id}`}>{produit.nom_produit}</Link></h3>
									<span className="price"><del>{produit.ancien_prix_produit}</del>{produit.prix_produit} XAF</span>
								</div>
							</div>
						</div>
					 ))}
					</div>
						
				</div>
			</div>
		</section>

		<section className="w3l-content-5">
			<div className="content-5-main">
				<div className="container">
					<div className="content-info-in row">
						<div className="content-gd col-md-6 offset-lg-3 text-center">
							<h3 className="hny-title two">
								Tons of Products & Options to
								<span>change</span></h3>
							<p>Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam
								animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere
								aperiam sequi optio consectetur adipisicing elit..</p>
							<Link to="/Home_list" className="read-more-btn2 btn">
								Shop Now
							</Link>

						</div>

					</div>

				</div>
			</div>
		</section>


		<section className="w3l-subscription-6">
			<div className="subscription-infhny">
				<div className="container-fluid">

					<div className="subscription-grids row">

						<div className="subscription-right form-right-inf col-lg-6 p-md-5 p-4">
							<div className="p-lg-5 py-md-0 py-3">
								<h3 className="hny-title">Join us for FREE to get instant <span>email updates!</span></h3>
									<p>Subscribe and get notified at first on the latest update and offers!</p>

								<form action="#" method="post" className="signin-form mt-lg-5 mt-4">
									<div className="forms-gds">
										<div className="form-input">
											<input type="email" name="" placeholder="Your email here" required=""/>
										</div>
										<div className="form-input"><button className="btn">Join</button></div>
									</div>
								</form>
							</div>
						</div>
						<div className="subscription-left forms-25-info col-lg-6 "/>

					</div>
				</div>
			</div>
		</section>
		<Chatbox />
		<section className="w3l-footer-22">
      	<Footer />
    	</section>
    </div>
	);
}
export default Home