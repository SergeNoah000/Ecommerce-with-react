import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './composants/pages/Home';
import Home_detail from './composants/pages/Home_detail';
import Categorie_details from './composants/pages/Categorie_detail';
import Home_list from './composants/pages/Home_list';
import About from './composants/pages/About';
import Blog from './composants/pages/Blog';
import Blogsingle from './composants/pages/Blogsingle';
import Contact from './composants/pages/Contact';
import Search from './composants/pages/Search';
import React from 'react';  
import SignUp from './composants/pages/sign-up';
import { GoogleOAuthProvider } from '@react-oauth/google';



function App() {
  return(
  <GoogleOAuthProvider clientId = "13549718784-2oa1s8n1jk5g41q05du4a2a6sgufikq3.apps.googleusercontent.com" >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login1 />} />*/ }
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Home_list" element={<Home_list />} />
        <Route path="/Home_detail/:id" element={<Home_detail />} />
        <Route path='/Categorie_details/:id' element={<Categorie_details />} />
        <Route path='/products/search' element={<Search />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blogsingle" element={<Blogsingle />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  </GoogleOAuthProvider>
  );
  
}

export default App;
