import React from "react"

import { useState } from "react";
import './header.css'



function Header({cartItems , increaseQuantity , decreaseQuantity}) {
    const [isCartOpen, setCartOpen] = useState(false);
	// const [cartItems, setCartItems] = useState();
   
    const toggleCart = () => {
        setCartOpen(!isCartOpen);
      };

      // j'utilise useEffect pour charger les produits une fois que le composant est monté
     
      
	  const getTotalPrice = () => {
		const totalPrice = cartItems.reduce((total, item) => {
		  return total + item.price * item.quantity;
		}, 0);
	  
		return totalPrice;
	  };
	   
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

                                <form method="post" className="search-box">
                                    <input type="search" placeholder="Keyword" name="search" required="required"
                                        autoFocus="" />
                                    <button type="submit" className="btn">Search</button>
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

                            <li className="button-log usernhy">
                                <a className="btn-open" href="#">
                                    <span className="fa fa-user" aria-hidden="true"></span>
                                </a>
                            </li>
                            <li className="transmitvcart galssescart2 cart cart box_1">
                            
                                        <button className="top_transmitv_cart" type="submit" onClick={toggleCart} name="submit" value="">
                                            Cart: {cartItems.length}
                                            <span className="fa fa-shopping-cart"></span>
                                        </button>
                                        {isCartOpen && (
                                            <table>
                                            <thead>
                                                <th>Produit</th>
                                                <th>Prix</th>
                                                <th>Quantite</th>
                                            </thead>
                                            <tbody>
                                            
                                            
                                            {cartItems.map((item) => (
                                                <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td> {item.price}</td>
                                                <td> {item.quantity}  <button className="increment " onClick={() => increaseQuantity(item.id)}>+</button> <button onClick={() => decreaseQuantity(item.id)} className="increment">-</button></td>
                                                {/* <button onClick={() => increaseQuantity(item)}>+</button>
                                                <button onClick={() => decreaseQuantity(item)}>-</button> */}
                                                </tr>
                                            ))}
                                            
                                            
                                            
                                            </tbody>
                                            <p>Total Price:<strong> {getTotalPrice()} XAF</strong> </p>
                                         
                                            </table>
                                            
                                        )}
                            </li>
                        </ul>

                    </div>
                    
                    
                </div>
            </nav>
        </header>
    );
}
export default Header