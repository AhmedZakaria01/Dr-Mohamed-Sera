import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import { render } from "react-dom";
import ReactWhatsapp from "react-whatsapp";
import "./Navbar.Module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show" : ""
          } d-flex justify-content-between container`}
          id="navbarNav"
        >
          {/* Menu */}
          <section>
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active "
                  to="/"
                  onClick={handleNavItemClick}
                >
                  <h3>Home</h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="contact_us"
                  onClick={handleNavItemClick}
                >
                  <h3>Contact Us</h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to=""
                  onClick={handleNavItemClick}
                >
                  <h3>Our Services</h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to=""
                  onClick={handleNavItemClick}
                >
                  <h3> About </h3>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to=""
                  onClick={handleNavItemClick}
                >
                  <h3>Photo Gallery</h3>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to=""
                  onClick={handleNavItemClick}
                >
                  <h3>Video Gallery</h3>
                </Link>
              </li>
            </ul>
          </section>
          <section className="d-flex">
            {/* Social Media */}
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">
              <li className="nav-item d-flex align-items-center text-dark">
                <Link
                  to={"https://www.facebook.com/DrMohamedsera"}
                  target="self"
                >
                  <i className="fab mx-2 fa-facebook social_icon"></i>
                </Link>
                <Link
                  to={"https://www.instagram.com/dr.mohamed_sera/"}
                  target="self"
                >
                  <i className="fab mx-2 fa-instagram social_icon"></i>
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/dr-mohamed-sera-01972822b/"}
                  target="self"
                >
                  <i className="fab mx-2 fa-linkedin social_icon"></i>
                </Link>
                <Link to={"https://www.youtube.com/@yehiasera"} target="self">
                  <i className="fab mx-2 fa-youtube social_icon"></i>
                </Link>
                <ReactWhatsapp
                  className=" border-0 bg-transparent "
                  number="+20 1095521277"
                  message="Hello, is there is anyone available to chat with !"
                >
                  <i className="fab mx-2 fa-whatsapp social_icon"></i>
                </ReactWhatsapp>
              </li>
            </ul>

            {/* logo */}
            <Link to={"/"}>
              <img src={logo} id="navLogo" width={50} height={50} alt="logo" />
            </Link>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
