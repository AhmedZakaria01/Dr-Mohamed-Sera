import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import ReactWhatsapp from "react-whatsapp";
import "./Navbar.Module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-fixed fixed-top">
      <div className="container-fluid d-flex justify-align-content-around">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <Link className="navbar-brand" to="/">
            <img src={logo} id="navLogo" width={50} height={50} alt="logo" />
          </Link>
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/"
                onClick={handleNavItemClick}
              >
                <h3>Home</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/contact_us"
                onClick={handleNavItemClick}
              >
                <h3>Contact Us</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/services"
                onClick={handleNavItemClick}
              >
                <h3>Our Services</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/about_us"
                onClick={handleNavItemClick}
              >
                <h3>About Us</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/photo_gallery"
                onClick={handleNavItemClick}
              >
                <h3>Photo Gallery</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/video_gallery"
                onClick={handleNavItemClick}
              >
                <h3>Video Gallery</h3>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item d-flex align-items-center text-dark">
              <Link to="https://www.facebook.com/DrMohamedsera" target="_self">
                <i className="fab mx-2 fa-facebook social_icon"></i>
              </Link>
              <Link
                to="https://www.instagram.com/dr.mohamed_sera/"
                target="_self"
              >
                <i className="fab mx-2 fa-instagram social_icon"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/dr-mohamed-sera-01972822b/"
                target="_self"
              >
                <i className="fab mx-2 fa-linkedin social_icon"></i>
              </Link>
              <Link to="https://www.youtube.com/@yehiasera" target="_self">
                <i className="fab mx-2 fa-youtube social_icon"></i>
              </Link>
              <ReactWhatsapp
                className="border-0 bg-transparent"
                number="+20 1095521277"
                message="Hello, is there is anyone available to chat with!"
              >
                <i className="fab mx-2 fa-whatsapp social_icon"></i>
              </ReactWhatsapp>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
