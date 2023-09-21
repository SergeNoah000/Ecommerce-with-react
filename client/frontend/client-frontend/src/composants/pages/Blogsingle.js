import React from "react"
import Footer from "./Elements/Footer"
import Headerpage from "./Elements/Headerpages"
import { useEffect , useState } from "react";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import {DateTime} from 'luxon';
import axios from "axios";
function Blogsingle() {
	const { id } = useParams();
	const [produit, setProduit] = useState([]);
	useEffect(() => {
		const fetchProduit = async () => {
		  try {
			const response = await axios.get(`http://localhost:8000/article/${id}`);
			console.log(response.data.data);
			setProduit(response.data.data);
	
		 
		  } catch (error) {
			console.error("Erreur lors de la récupération de l'article :", error);
		  }
		};
		fetchProduit();
	  }, [id]);
	  console.log(produit)
    return(
	<div>
		<div>
			<Headerpage />
		</div>
		<section className="blog-post-main">
	
	<div className="mag-content-inf py-5"/>
		<div className="container py-lg-5">
		<div>



 
        </div>
			<div className="blog-inner-grids">
				<div className="mag-post-left-hny">
					<div className="mag-hny-content">
					
							<div className="blog-pt-grid-content" key={produit.id}>
							<div className="maghny-gd-1 blog-pt-grid mb-lg-5 mb-4">

									<Link href="#"><img className="img-fluid" src={`http://localhost:3500/${produit.picture}`}
										alt=""/></Link>

								<div className="entry-meta d-flex mt-3"><span className="entry-author">By <a href="#">
											Admin</a></span><span className="meta-separator">|</span>
									<a href="#">{DateTime.fromISO(produit.created).toLocaleString(DateTime.DateTime)}                         <small class="text-muted ms-1">{DateTime.fromISO(produit.created).toLocaleString(DateTime.TIME_SIMPLE)}</small></a><span className="meta-separator">|</span>
									<a href="#"> </a>
								</div>
								<h5 className="blog-title mb-3"><a href="#"> {produit.titre}</a></h5>
								<p>{produit.contenu}</p>

							
								<div className="post-social-box my-lg-5 my-4">
									<a href="#" className="facebook-post">
										<span className="fa fa-facebook" aria-hidden="true"></span>
										<span className="social_info_name">Facebook</span>
									</a>
									<a href="#" className="twitter-post">
										<span className="fa fa-twitter" aria-hidden="true"></span>
										<span className="social_info_name">Facebook</span>
									</a>
									<a href="#" className="google-post">
										<span className="fa fa-google" aria-hidden="true"></span>
									</a>
								</div>
								
								

							</div>
						</div>
						
						
					</div>
				</div>
			</div>

			<div></div>
    </div>
		</section>
		<section className="w3l-footer-22">
      <Footer />
    </section>
</div>
	); 
}
export default Blogsingle