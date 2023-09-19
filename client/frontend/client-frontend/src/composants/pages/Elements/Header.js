import { useState } from "react";
import {  useLocation } from 'react-router-dom';
import React, { useEffect } from "react";
import axios from 'axios';
import '../chat/style.css';
import {   googleLogout, GoogleLogin} from '@react-oauth/google';
import CryptoJS from 'crypto-js';

//https://oauth2.googleapis.com/tokeninfo?id_token=


  


function Header({cartItems , increaseQuantity , decreaseQuantity, setCartItems}) {

    const ENCRYPTION_KEY = "Ngoaam-Nyee";

    const [isCartOpen, setCartOpen] = useState(false);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get('q');
    const [produits, setProduit] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [locationClient, setLocationClient] = useState('');
    const [numTel, setNumTel] = useState();
    const [IsReadyCart, setIsReadyCart] = useState(false);
    const [btn, setBtn] = useState(true);
    const [mes, setMes] = useState('');





    const success = (response) => {
        getUserInfo(response.credential);
        setIsLoggedIn(true);
        console.log(response);
    };
    const errorAuth = (error) => {
        console.log(error);
    };

    const  getUserInfo = (idToken) => {
        const url = "https://oauth2.googleapis.com/tokeninfo?id_token=" + idToken;
      
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const userId = data.sub;
            const userName = data.name;
            const userEmail = data.email;
            const userPictureUrl = data.picture;
            const userInf = {
                userPictureUrl : userPictureUrl ,
                userName : userName,
                userEmail : userEmail 
            }

            const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(userInf), ENCRYPTION_KEY).toString();
      
            localStorage.setItem('userInfo', encryptedData);
            setUserInfo(userInf);
            const donnees = {
                token:idToken,
                image:userPictureUrl,
                email:userEmail,
                nom:userName,
                id: userId
            };
            axios.post("http://localhost:7200/client/create", donnees
        ).then(res => {
            console.log(res.data.message);
          })
          .catch(error => {
            console.error("Quelque chose n'a pas marche dans le backend :" , error.response.data);
          });
          })
          .catch(error => {
            console.error("Une erreur s'est produite lors de la récupération des informations de l'utilisateur chez Google:", error);
          });
      }
    const handleLogout = () => {
        googleLogout(); 
        localStorage.removeItem('userInfo');
        setIsLoggedIn(false); 
      };

     
      
	  const getTotalPrice = () => {
		const totalPrice = cartItems.reduce((total, item) => {
		  return total + item.price * item.quantity;
		}, 0);
	  
		return totalPrice;
	  };


      const  preparerCommande = () =>
      {
        setIsReadyCart(true); 
        setBtn(false);      
      }

      const validerCommande = ()=>{


        axios
      .post(`http://localhost:7200/client/panier`, {cartItems:cartItems,totalPrice:getTotalPrice(), email:userInfo.userEmail , deliveryAddress: locationClient, numTel:numTel, })
      .then((response) => {
        setMes(response.data.message)
        console.log(response.data);
        
        setCartItems([]);
        localStorage.removeItem('panier')
        setBtn(true);
        setIsReadyCart(false)

      })
      .catch((error) => {
        console.error(error);
      });

      }

      useEffect(() => {
        const fetchProduit = async () => {
          try {
            const encryptedData = localStorage.getItem('userInfo');
            if (encryptedData) {
              const decryptedData = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8);
              if (decryptedData) {
                const userInfo = JSON.parse(decryptedData);
                console.log("decryptDate:", decryptedData);
                setUserInfo(userInfo);
                setIsLoggedIn(true);
                }
            }
            const response = await axios.get(`http://localhost:7200/products/search?q=${q}`);
            setProduit(response.data.data);
    
          } catch (error) {
            console.error("Erreur lors de la récupération de l'article :", error);
          }
        };
        fetchProduit();
      }, [q]);
    console.log(produits);
	   
    return (
        <header className="tophny-header">
            <div className="container-fluid">
                <div className="top-right-strip row">

                    <div className="top-hny-left-content col-lg-6 pl-lg-0">
                    </div>

                    <div className="overlay-login text-left">
                        <button type="button" className="overlay-close1">
                            <i className="fa fa-times" aria-hidden="true"></i> 
                        </button>
                        <div className="wrap">
                            <h5 className="text-center mb-4">Login Now</h5>
                            <div className="login-bghny p-md-5 p-4 mx-auto mw-100">

                                <form action="#" method="post" className="btn-close">
                                    <div className="form-group">
                                        <p className="login-texthny mb-2">Email address</p>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="" required="" />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email
                                            with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <p className="login-texthny mb-2">Password</p>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            placeholder="" required="" />
                                    </div>
                                    <div className="form-check mb-2">
                                        <div className="userhny-check">
                                            <label className="check-remember container">
                                                <input type="checkbox" className="form-check" /> <span
                                                    className="checkmark"></span>
                                                <p className="privacy-policy">Remember me</p>
                                            </label>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                    <button type="submit" className="submit-login btn mb-4">Sign In</button>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid serarc-fluid">
                    <a className="navbar-brand" href="/">
                        Suite<span className="lohny">.</span>Sale</a>

                    <div className="search-right">

                        <a href="#search" title="search"><span className="fa fa-search mr-2" aria-hidden="true"></span>
                            <span className="search-text">Search here</span></a>

                        <div id="search" className="pop-overlay">
                            <div className="popup">

                                        <form action="/products/search" method="get" className="search-trans-form">
											<input className="form-control" type="search" name="q" placeholder="Search here..."
												required=""/>
											<button className="btn read-2">
												<span className="fa fa-search"></span>
											</button>

										</form>

                            </div>
                            <a className="close" href="#">×</a>
                        </div>

                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fa fa-bars"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto"></ul>

                        <ul className="top-hnt-right-content col-lg-6">

                            <li className="button-log usernhy" id= "user-auth-li"> 
                            {!isLoggedIn ? (
                <GoogleLogin useOneTap={true} onError={errorAuth} onSuccess={success} />
              ) : (
                <>
                 
                  {/* Afficher les autres informations de l'utilisateur */}
                  <div className="  ">
                    <span className="d-flex align-items-left">
                      <img src={userInfo.userPictureUrl} 
                        title="Deconnexion"  
                        style={{ width: "50%", height: "50%" , cursor: "pointer"}} 
                        alt={userInfo.userName} 
                        onClick={handleLogout} 
                        className="rounded-circle header-profile-user" 
                      />
                    </span>
                  </div>
                </>
              )}
                                
                            </li>
                            <li className="transmitvcart galssescart2 cart cart box_1">
                            <button className="top_transmitv_cart cart-button" type="submit" onClick={() => setCartOpen(!isCartOpen)} name="submit" value="">
                            <span className="fa fa-shopping-bag"></span>: {cartItems.length}
                                <span className="fa fa-shopping-cart"></span>
                            </button>
                            <div className="cart-container">
                            {isCartOpen && (
                                <div className="cart-items">
                                <table border="1px">
                                    <thead>
                                    <tr>
                                        <th>Produit</th>
                                        <th>Prix</th>
                                        <th>Quantité</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <button className="increment" onClick={() => increaseQuantity(item.id)}>+</button>
                                            <button className="increment" onClick={() => decreaseQuantity(item.id)}>-</button>
                                        </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <p id="total">Total Price: <strong>{getTotalPrice()} XAF</strong></p>
                                {btn && ( <button type="submit" id="btn-validation-commande" className="validate-button" onClick={ preparerCommande}>Valider la commande</button>
                                    )}
                                {IsReadyCart && (
                                <>
                                    <div class="form-group">
												<p class="login-texthny mb-2">Adresse de livraison</p>
												<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Lieu de livraison"value={locationClient} onChange={(e) => setLocationClient(e.target.value)} required=""/>
												<small id="emailHelp" class="form-text text-muted">Exple: Yaounde Centre Etog-Ebe, Beattitude, Troisieme maison verte  au toit en tolles bags</small>
											</div>
                                    
                                    <div class="form-group">
                                        <p class="login-texthny mb-2">Numero OM / MoMo</p>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Numero OM/MoMo.." value={numTel} onChange={(e) => setNumTel(e.target.value)} required/>
                                        <small id="emailHelp" class="form-text text-muted">653420526</small>
                                    </div>
                                    <button type="submit" className="validate-button btn mb-4" onClick={ validerCommande}>Commander et payer</button>
                                </>

                                )}
                                </div>
                            )}
                            </div>
                            </li>
                        </ul>

                    </div>
                    
                    
                </div>
            </nav>
        </header>
    );
}
export default Header