import Footer from './components/Footer';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import MenuBurger from './components/MenuBurger';
import '../src/components/modals/css/modals.css';
import Modals from './components/Modals'
function AllComponents() {
  const [isOpen, setIsOpen] = useState(true);
  const [isBurgerVisible, setIsBurgerVisible] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    setIsBurgerVisible(!isOpen);
  };

  return (
    <div >
      <div id="layout-wrapper" className={`main-content ${isOpen && !isBurgerVisible ? 'sidebar-hidden' : ''}`}>
        <Header />
      </div>
      <div className={`app-menu navbar-menu ${isOpen ? 'open' : 'hidden'}`}>
      <MenuBurger onClick={handleMenuClick} className={!isBurgerVisible ? 'hide' : ''} />
        <Sidebar isOpen={isOpen} />
      </div>
      <div className={`main-content ${isOpen && !isBurgerVisible ? 'sidebar-hidden' : ''}`}>
        <Main />
        <Footer />
       
      </div>
      <Modals/>
    </div>
  );
}

export default AllComponents;