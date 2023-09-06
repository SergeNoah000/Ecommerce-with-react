
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';



function Carousel()  {

    const [product, setProduits] = useState([]);
	

    const Card = ({ prom }) => {
        const cardStyle = {
          backgroundImage: `url(../${prom.product.image_produit})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        };

        return (
            <div className={"carousel-item item" + prom.id} style={cardStyle}>
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>
                                Promotion of <pan> {prom.product.nom_produit} </pan>
                                <br/>{prom.pourcentage_reduction}% Off</h3>
                            <a href={"/Home_detail/"+ prom.product.id} className="shop-button btn">
                                Shop Now
                            </a>

                        </div>
                    </div>
                </div>
          );
        }
	// j'utilise useEffect pour charger les produits une fois que le composant est monté
	useEffect(() => {
	const fetchProduits = async () => {
	try {
	const response = await axios("http://localhost:7200/promo");
	// Si la réponse contient plus de 3 produits, limitez-la à 3 produits
	const limitedProducts = response.data.slice(0, 5);
	setProduits(limitedProducts);
	} catch (error) {
	console.error("Erreur lors de la récupération des produits :", error);
	}
	};
	fetchProduits();
    
    console.log(product);



}, []);

if (!product) {
    return <div className="bannerhny-content">

         
    <div className="content-baner-inf">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>
                                Promotion
                                <br/>50% Off</h3>
                            <a href="/Home_list" className="shop-button btn">
                                Shop Now
                            </a>

                        </div>
                    </div>
                </div>
                <div className="carousel-item item2">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Promotion
                            
                                <br/>60% Off</h3>
                            <a href="/Home_list" className="shop-button btn">
                                Shop Now
                            </a>

                        </div>
                    </div>
                </div>
                <div className="carousel-item item3">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Women's
                                Fashion
                                <br/>50% Off</h3>
                            <a href="/Home_list" className="shop-button btn">
                                Shop Now
                            </a>

                        </div>
                    </div>
                </div>
                <div className="carousel-item item4">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Men's
                                Fashion
                                <br/>60% Off</h3>
                            <a href="/Home_list" className="shop-button btn">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>

    <div className="right-banner">
        <div className="right-1">
            <h4>
                Men's
                Fashion
                <br/>50% Off</h4>
        </div>
    </div>

</div>;
  }

    return(
        <div className="bannerhny-content">

         
    <div className="content-baner-inf">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                {product.map((prom)=>(
            <Card prom={prom} />))}
                
                <div className="carousel-item active">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>
                                <br/>60% Off</h3>
                            <a href="/Home_list" className="shop-button btn">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>

    <div className="right-banner">
        <div className="right-1">
            <h4>
                Men's
                Fashion
                <br/>50% Off</h4>
        </div>
    </div>

</div>
    ); 
}
export default Carousel