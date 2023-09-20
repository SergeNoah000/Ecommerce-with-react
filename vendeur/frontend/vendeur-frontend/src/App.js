import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './components/auth/Template';
import Dashboard from './components/pages/Dashboard';
import MenuPrincipal from './components/pages/TemplateMenuPrincipal';
import AjoutProduire from './composantsDashboard/ajoutproduct/AjoutProduire';
import ListProduct from './components/listproduct/ListProduct'
import AffichageList from './AffichageList.js';
import DetailsProduct from './components/detailleproduct/DetailsProduct';
import PrincipalInterface from './mesformulaire/PrincipalInterface';
import PromotionForm from './mesformulaire/PromotionForm';


function App() {
  
  return <div id="layout-wrapper">
    <Router>
        <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/MenuPrincipal" element={<MenuPrincipal/>}  /> */}
         
         <Route path="/AjoutProduire" element={<AjoutProduire/>} />
          <Route path="/ListProduct" element={<ListProduct/>}  />
         {/* <Route path="/DetailsProduct" element={<DetailsProduct />}/>   */}
         {/* <Route path="/" element={<AffichageList/>}/> */}
      //  <Route path="/" element={<Login />} />
       <Route exact path="/Promotions_List" element={<PrincipalInterface />} />
          <Route exact path="/PromotionForm" element={<PromotionForm />} />
        </Routes>
      </Router>
  </div>
}

export default App;
