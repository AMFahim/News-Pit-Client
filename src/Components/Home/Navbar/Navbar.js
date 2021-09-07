import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light" href="#"><b>NEWS PIT</b></Link>
          <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link active ms-3 text-light hoverNav" aria-current="page" href="#"><b>HOME</b></Link>
              <Link to="/" className="nav-link ms-3 text-light hoverNav" href="#"><b>ABOUT</b></Link>
              <Link to="/addArticle" className="nav-link ms-3 text-light hoverNav" href="#"><b>DASHBOARD</b></Link>
              <Link to="/" className="nav-link ms-3 text-light hoverNav" href="#"><b>CONTACT US</b></Link>
              <Link to="/login" className="nav-link ms-3 text-light" href="#"><button className="btn btn-secondary">SIGN IN</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;