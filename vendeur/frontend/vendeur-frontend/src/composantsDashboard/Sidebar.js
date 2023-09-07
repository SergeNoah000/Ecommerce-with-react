import { Link } from "react-router-dom"
import AjoutProduire from "./ajoutproduct/AjoutProduire"
function Sidebar() {
  return (
    <div id="scrollbar">
    <div class="container-fluid">
 <div id="two-column-menu"> </div>
<ul class="navbar-nav" id="navbar-nav">
 <li class="menu-title"><span data-key="t-menu">Menu</span></li>
 <li class="nav-item">
 <a class="nav-link menu-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
  <i class="mdi mdi-speedometer"></i> <span data-key="t-dashboards">Dashboards</span>
 </a>
 <div class="collapse menu-dropdown" id="sidebarDashboards">
 <ul class="nav nav-sm flex-column">
 <li class="nav-item">
 <a href="dashboard-analytics.html" class="nav-link" data-key="t-analytics"> Analytics </a>
  </li>
  <li class="nav-item">
  <a href="dashboard-crm.html" class="nav-link" data-key="t-crm"> CRM </a>
 </li>
 <li class="nav-item">
 <a href="index-2.html" class="nav-link" data-key="t-ecommerce"> Ecommerce </a>
 </li>
 <li class="nav-item">
 <a href="dashboard-projects.html" class="nav-link" data-key="t-projects"> Projects </a>
 </li>
  </ul>
</div>
  </li> 
 <li class="nav-item">
 <a class="nav-link menu-link" href="#sidebarApps" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarApps">
<i class="mdi mdi-view-grid-plus-outline"></i> <span data-key="t-apps">Apps</span>
 </a>
<div class="collapse menu-dropdown" id="sidebarApps">
  <ul class="nav nav-sm flex-column">
 <li class="nav-item">
 <a href="#sidebarEcommerce" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarEcommerce" data-key="t-ecommerce"> Ecommerce
 </a>
 <div class="collapse menu-dropdown" id="sidebarEcommerce">
 <ul class="nav nav-sm flex-column">
 <li class="nav-item">
<a href="apps-ecommerce-products.html" class="nav-link" data-key="t-products"> Products </a>
 </li>
 <li class="nav-item">
<a href="apps-ecommerce-product-details.html" class="nav-link" data-key="t-product-Details"> Product Details </a>
 </li>
 <li class="nav-item">
 <Link to="AjoutProduire" class="nav-link" data-key="t-create-product"> Create Product </Link>
 </li>
 <li class="nav-item">
<a href="apps-ecommerce-orders.html" class="nav-link" data-key="t-orders"> Orders </a>
 </li>
  <li class="nav-item">
<a href="apps-ecommerce-order-details.html" class="nav-link" data-key="t-order-details"> Order Details </a>
</li>
<li class="nav-item">
 <a href="apps-ecommerce-customers.html" class="nav-link" data-key="t-customers"> Customers </a>
  </li>
 <li class="nav-item">
<a href="apps-ecommerce-sellers.html" class="nav-link" data-key="t-sellers"> Sellers </a>
</li>
<li class="nav-item">
<a href="apps-ecommerce-seller-details.html" class="nav-link" data-key="t-sellers-details"> Seller Details </a>
 </li>
 </ul>
</div>
</li> <li class="nav-item">
 <a href="#sidebarCRM" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCRM" data-key="t-crm"> CRM
  </a>
    <div class="collapse menu-dropdown" id="sidebarCRM">
  <ul class="nav nav-sm flex-column">
        <li class="nav-item">
 <a href="apps-crm-contacts.html" class="nav-link" data-key="t-contacts"> Contacts </a>
</li>
   <li class="nav-item">
<a href="apps-crm-companies.html" class="nav-link" data-key="t-companies"> Companies </a>
</li>
   <li class="nav-item">
<a href="apps-crm-deals.html" class="nav-link" data-key="t-deals"> Deals </a>
 </li>
 <li class="nav-item">
   <a href="apps-crm-leads.html" class="nav-link" data-key="t-leads"> Leads </a>
 </li>
</ul>
  </div>
 </li></ul>
  </div>
 </li>
  <li class="nav-item">
</li>
  </ul>
    </div>
    
</div>
       
  )
}

export default Sidebar