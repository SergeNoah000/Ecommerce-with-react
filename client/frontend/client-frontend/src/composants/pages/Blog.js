import React from "react"
import Footer from "./Elements/Footer"
import Headerpage from "./Elements/Headerpages"
import { useEffect , useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
function Blog() {
	const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('http://localhost:8080/api/articles');
        setData(result.data.data);
      };
  
      fetchData();
	 
    }, []);
	console.log(data)
    return(
	<div>
	<div>
			<Headerpage />
	</div>
    <section className="blog-post-main">
	<div className="mag-content-inf py-5">
		<div className="container py-lg-5 px-lg-5">
		<div>
        </div>
		{data.map((article)=>( 
			<div className="blog-inner-grids row">
				<div className="mag-post-left-hny col-lg-8">
					<div className="mag-hny-content">
					
							<div className="blog-pt-grid-content">
							<div className="maghny-gd-1 blog-pt-grid mb-5">
								<Link to="/Blogsingle"><img className="img-fluid mt-2" src={`http://localhost:3500/${article.picture}`}
										alt=""/></Link>

								<div className="entry-meta d-flex mt-3"><span className="entry-author">By <a href="#">
											Admin</a></span><span className="meta-separator">|</span>
									<a href="#">{article.created}</a><span className="meta-separator">|</span>
									<a href="#"> 0 comment</a></div>
								<h5 className="blog-title"><a href="/Blogsingle">{article.titre}</a></h5>
								<p>{article.contenu.split(" ").slice(0, 30).join(" ")}</p>



								<a href={`/Blogsingle/${article.id}`} className="read-more btn ">Read More</a>
							</div>
							

						</div>
						
					

					</div>
				
				</div>
				<div className="mag-post-right-hny col-lg-4">
					<aside>
						<div className="blog-sidebar-bg">
						 <div className="side-bar-hny-recent mb-5">
							<h4 className="side-title">Subscribe to <span>Blog</span></h4>
							<div className="mag-small-post">
								<form action="#" className="subscribehny d-flex mb-3" method="post">
									<input type="email" name="email" placeholder="Email Address" required=""/>
									<button className="btn"><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
								</form>
								<p>Subscribe to our mailing list and get updates to your email inbox.</p>
							</div>
						</div>
						<div className="side-bar-hny-recent mb-5">
							<h4 className="side-title">Our <span>Categories</span></h4>
							<div className="mag-small-post">
								<ul className="list-group single">
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Cras justo odio
										<span className="badge badge-primary badge-pill">14</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Dapibus ac facilisis in
										<span className="badge badge-primary badge-pill">2</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Morbi leo risus
										<span className="badge badge-primary badge-pill">1</span>
									</li>
								</ul>
							</div>
						</div>
						
						

						
						</div>
					</aside>
				</div>
			</div>
			)) 
							
						}
						
			<div className="pagination mt-lg-0 mt-4">
				<ul>
					<li className="prev"><a href="#page-number"><span className="fa fa-angle-double-left"></span></a></li>
					<li><a href="#page-number">1</a></li>
					<li><a href="#page-number">2</a></li>
					
					<li className="next"><a href="#page-number"><span className="fa fa-angle-double-right"></span></a></li>
				</ul>
			</div>
			

		</div>
	</div>
    <div></div>
    </section>
	<section className="w3l-footer-22">
      <Footer />
    </section>
</div>
	); 
}
export default Blog