import React from 'react';

const MenuBurger = ({ onClick }) => {
  return (
    
     <button type="button" onClick={onClick} className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none" id="topnav-hamburger-icon">
                        <span className="hamburger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
    </button>
   
  );
};

export default MenuBurger;