import { Link } from "react-router-dom";

function Dashboard (){
    return(
        <div>
            <div class="app-menu navbar-menu">
    
    <div class="navbar-brand-box">
       
        <a href="index-2.html" class="logo logo-dark">
            <span class="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height="22"/>
            </span>
            <span class="logo-lg">
                <img src="assets/images/logo-dark.png" alt="" height="17"/>
            </span>
        </a>
      
        <a href="index-2.html" class="logo logo-light">
            <span class="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height="22"/>
            </span>
            <span class="logo-lg">
                <img src="assets/images/logo-light.png" alt="" height="17"/>
            </span>
        </a>
        <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
            <i class="ri-record-circle-line"></i>
        </button>
    </div>

    <div id="scrollbar">
        <div class="container-fluid">

            <div id="two-column-menu">
            </div>
            <ul class="navbar-nav" id="navbar-nav">
                <li class="menu-title"><span data-key="t-menu">Menu</span></li>
                <li class="nav-item">
                    <a class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                        <i class="mdi mdi-speedometer"></i> <span data-key="t-dashboards">Dashboards</span>
                    </a>
                    <div class="collapse menu-dropdown" id="sidebarDashboards">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <Link to='/ListProduct'  class="nav-link" data-key="t-analytics" > List</Link>
                                <a href="dashboard-analytics.html" class="nav-link" data-key="t-analytics">  </a>
                            </li>
                            <li class="nav-item">
                                <Link to='/AjoutProduire'  class="nav-link" data-key="t-crm">Add</Link>
                              
                            </li>
                          
                          
                        </ul>
                    </div>
                </li> 
              

            </ul>
        </div>
     
    </div>

    <div class="sidebar-background"></div>
</div>


        </div>
    )
}

export default Dashboard;