import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <NavLink className="navbar__link" to="/">
          Characters
        </NavLink>
        /
        <NavLink className="navbar__link" to="/favourites">
          Favourites
        </NavLink>
      </div>
      <div className="navbar__like">like</div>
    </div>
  );
};

export default Navbar;
