import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import HeartLogo from './../../assets/images/heart.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <NavLink
          activeClassName="active"
          className="navbar__link navbar__link--сharacters"
          to="/сharacters"
        >
          Characters
        </NavLink>
        <NavLink
          activeClassName="active"
          className="navbar__link navbar__link--favourites"
          to="/favourites"
        >
          Favourites
        </NavLink>
      </div>
      <div className="navbar__like">
        <img className="navbar__like--logo" src={HeartLogo} alt="heart" />
      </div>
    </div>
  );
};

export default Navbar;
