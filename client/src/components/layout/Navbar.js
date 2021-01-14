import React from 'react';
import Github from '../img/github.svg';
import Instagram from '../img/instagram.svg';
import Twitter from '../img/twitter.svg';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="d-flex flex-row justify-content-between px-sm-5 py-3">
        <div>
          <p>
            <NavLink exact to="/" className="btn text-name text-uppercase outline-0">nifemi.</NavLink>
          </p>
        </div>
        <div className="d-flex flex-row justify-content-around pl-2">
          <p className="pl-3">
            <a href="https://www.instagram.com/nifemibam" target="_blank" rel="noreferrer" aria-label="instagram">
              <img src={Instagram} alt="instagram"/>
            </a>
          </p>
          <p className="pl-3">
            <a href="https://github.com/wintercameearly" target="_blank" rel="noreferrer" aria-label="github">
              <img src={Github} alt="github"/>
            </a>
          </p>
          <p className="pl-3">
            <a href="https://twitter.com/nifemibam" target="_blank" rel="noreferrer" aria-label="twitter">
              <img src={Twitter} alt="twitter"/>
            </a>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
