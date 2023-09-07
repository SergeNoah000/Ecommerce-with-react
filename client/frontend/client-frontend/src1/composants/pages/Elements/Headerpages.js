import React from "react"
import { Link } from "react-router-dom";

function Headerpage() {
    return(
    <div>
  
  <section className="w3l-banner-slider-main inner-pagehny">
   <div className="breadcrumb-infhny"> 
    <div className="top-header-content">
      <header className="tophny-header">
        <div className="container-fluid">
          <div className="top-right-strip row">
            
            <div className="top-hny-left-content col-lg-6 pl-lg-0">
            
            </div>
            
            <ul className="top-hnt-right-content col-lg-6">

              <li className="button-log usernhy">
                <a className="btn-open" href="#" >
                  <span className="fa fa-user" aria-hidden="true"></span>
                </a>
              </li>
              <li className="transmitvcart galssescart2 cart cart box_1">
                <form action="#" method="post" className="last">
                  <input type="hidden" name="cmd" value="_cart"/>
                  <input type="hidden" name="display" value="1"/>
                  <button className="top_transmitv_cart" type="submit" name="submit" value="">
                    My Cart
                    <span className="fa fa-shopping-cart"></span>
                  </button>
                </form>
              </li>
            </ul>
         
            <div className="overlay-login text-left">
              <button type="button" className="overlay-close1">
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <div className="wrap">
                <h5 className="text-center mb-4">Login Now</h5>
                <div className="login-bghny p-md-5 p-4 mx-auto mw-100">
             
                  <form action="#" method="post">
                    <div className="form-group">
                      <p className="login-texthny mb-2">Email address</p>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="" required=""/>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email
                        with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <p className="login-texthny mb-2">Password</p>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" required=""/>
                    </div>
                    <div className="form-check mb-2">
                      <div className="userhny-check">
                        <label className="check-remember container">
                          <input type="checkbox" className="form-check"/> <span className="checkmark"></span>
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
                    <a className="navbar-brand" href="/">
                      <img src="image-path" alt="" title="Your logo"  />
                    </a>
            <div className="search-right">

              <a href="#search" title="search"><span className="fa fa-search mr-2" aria-hidden="true"></span>
                <span className="search-text">Search here</span></a>
            


              <div id="search" className="pop-overlay">
                <div className="popup">

                  <form action="#" method="post" className="search-box">
                    <input type="search" placeholder="Keyword" name="search" required="required" autofocus=""/>
                    <button type="submit" className="btn">Search</button>
                  </form>

                </div>

                <a className="close" href="#">×</a>
              </div>
            
            </div>
        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon fa fa-bars"> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Shopping
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/Home_list">Ecommerce</Link>
                    <Link className="dropdown-item" to="/Home_detail">Ecommerce Single</Link>
                   
                  </div>
                </li>

                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Blog
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/Blog">Blog</a>
                    <a className="dropdown-item" href="/Blog-single">Blog Single</a>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/Contact">Contact</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      
      </header>
    </div>
    </div>
    
  </section>
 


     



</div>
  ); 
}
export default Headerpage