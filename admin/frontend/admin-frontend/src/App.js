import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../src/components/modals/css/modals.css';
import AllComponents from './AllComponents';
import AllComponentsList from './AllComponentsList';
import AuthAdmin from './AuthAdmin'

function App() {
 return (
   <div className="row g-4 mb-3">
     <Router>
    <Routes>
      <Route path="/" element={<AuthAdmin/>} />
      <Route path="/AllComponentsList" element={<AllComponentsList />} />
      <Route path="/AllComponents" element={<AllComponents />} />
      
  </Routes>
  </Router>
   </div>
  );
}

export default App;