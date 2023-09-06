import './modals/css/modals.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (<div>
       
       <div className="navbar-brand-bo ">
       
                <a href="index-2.html" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height="22"/>
                    </span>
                    <span className="logo-lg">
                        <img src="as sets/images/logo-dark.png" alt="" height="17"/>
                    </span>
                </a>
           
                <a href="index-2.html" className="logo logo-light">
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height="22"/>
                    </span>
                    <span className="logo-lg">
                        <img src="assets/images/logo-light.png" alt="" height="17"/>
                    </span>
                </a>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>
            <div className="navbar-brand-box ">
                        <a href="index-2.html" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22"/>
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-light.png" alt="" height="17"/>
                            </span>
                        </a>

                        <a href="index-2.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="assets/images/logo-sm.png" alt="" height="22"/>
                            </span>
                            <span className="logo-lg">
                                <img src="assets/images/logo-dark.png" alt="" height="17"/>
                            </span>
                        </a>
                    </div>
                    
            <div id="scrollbar">
                <div className="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">
                        <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                       
                        <li className="nav-item">
                            <a className="nav-link menu-link" href="#sidebarLanding" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarLanding">
                                <i className="ri-rocket-line"></i> <span data-key="t-landing">Vendeurs</span>
                            </a>
                            <div className="collapse menu-dropdown" id="sidebarLanding">
                                <ul className="nav nav-sm flex-column">
                                    <li className="nav-item">
                                        <Link to='/AllcomponentsList' className="nav-link" data-key="t-nft-landing"> List</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/AllComponents' className="nav-link" data-key="t-nft-landing">Add</Link>
                                        
                                    </li>
                                   
                                </ul> 
                            </div>
                        </li>

                      

                    </ul>
                </div>
               
            </div>

            <div className="sidebar-background"></div>
            <div className="vertical-overlay"></div>
  </div>)
}

export default Sidebar