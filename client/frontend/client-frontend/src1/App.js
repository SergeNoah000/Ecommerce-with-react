import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './composants/pages/Home';
import Home_detail from './composants/pages/Home_detail';
import Home_list from './composants/pages/Home_list';
import About from './composants/pages/About';
import Blog from './composants/pages/Blog';
import Blogsingle from './composants/pages/Blogsingle';
import Contact from './composants/pages/Contact';
import React from 'react';
import { CartProvider } from './composants/pages/Elements/CartContext';


function App() {
  return (
    <CartProvider> {/* Ajoutez le composant CartProvider ici */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home_list" element={<Home_list />} />
          <Route path="/Home_detail/:id" element={<Home_detail />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blogsingle" element={<Blogsingle />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;