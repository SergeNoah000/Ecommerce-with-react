import React from "react"
import { Link } from "react-router-dom";


function Carousel() {
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
                            
                            <Link to='/Home_list'  className="shop-button btn"> Shop Now</Link>

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

</div>
    ); 
}
export default Carousel