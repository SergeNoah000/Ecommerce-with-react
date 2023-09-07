import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './components/auth/Template';
import Dashboard from './components/pages/Dashboard';
import MenuPrincipal from './components/pages/TemplateMenuPrincipal';
import AjoutProduire from './composantsDashboard/ajoutproduct/AjoutProduire';
import ListProduct from './components/listproduct/ListProduct'
import AffichageList from './AffichageList.js';
import DetailsProduct from './components/detailleproduct/DetailsProduct';


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
        </Routes>
      </Router>
  </div>
}

export default App;
