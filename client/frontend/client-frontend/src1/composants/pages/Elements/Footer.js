import React from "react"
import { Link } from "react-router-dom";



function Footer() {
    return(
        <div className="footer-hny py-5">
        <div className="container py-lg-5">
            <div className="text-txt row">
                <div className="left-side col-lg-4">
                    <h3><a className="logo-footer" href="/">
                            Suite<span className="lohny">.</span>Sale</a></h3>
                    
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Vivamus
                        a ligula quam. Ut blandit eu leo non suscipit. </p>
                    <ul className="social-footerhny mt-lg-5 mt-4">

                        <li><a className="facebook" href="#"><span className="fa fa-facebook" aria-hidden="true"></span></a>
                        </li>
                        <li><a className="twitter" href="#"><span className="fa fa-twitter" aria-hidden="true"></span></a>
                        </li>
                        <li><a className="google" href="#"><span className="fa fa-google-plus" aria-hidden="true"></span></a>
                        </li>
                        <li><a className="instagram" href="#"><span className="fa fa-instagram" aria-hidden="true"></span></a>
                        </li>
                    </ul>
                </div>

                <div className="right-side col-lg-8 pl-lg-5">
                    
                    <div className="sub-columns">
                        <div className="sub-one-left">
                            <h6>Useful Links</h6>
                            <div className="footer-hny-ul">
                                <ul>
                                <li><Link to="/">Home</Link></li>
                                    <li><Link to="/About">About</Link></li>
                                    <li><Link to="/Blog">Blog</Link></li>
                                    <li><Link to="/Contact">Contat</Link></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="/Contact">Support</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="sub-two-right">
                            <h6>Our Store</h6>
                            <p className="mb-5">Technipole Sup Valor, Melen - Yaoundé, Cameroun</p>

                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="below-section row">
                <div className="columns col-lg-6">
                    <ul className="jst-link">
                        <li><a href="#">Privacy Policy </a> </li>
                        <li><a href="#">Term of Service</a></li>
                        <li><a href="/Contact">Customer Care</a> </li>
                    </ul>
                </div>
                <div className="columns col-lg-6 text-lg-right">
                    <p>© 2023 SuiteSale All rights reserved. Design by <a href="https://togettech.co/" target="_blank">
                            TOGETTECH</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    ); 
}
export default Footer