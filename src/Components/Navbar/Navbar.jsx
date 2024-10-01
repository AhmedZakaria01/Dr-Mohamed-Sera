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
    <nav className="navbar navbar-expand-lg position-fixed fixed-top py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={logo} id="navLogo" width={50} height={50} alt="logo" />
        </Link>
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
          <ul className="navbar-nav mx-auto d-flex align-items-center mt-2 mt-lg-0">
            <li className="nav-item">


            
              <Link className="nav-link active" to="/" onClick={handleNavItemClick}>
                <h3 className="fw-medium">Home</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact_us" onClick={handleNavItemClick}>
                <h3 className="fw-medium">Contact Us</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/services" onClick={handleNavItemClick}>
                <h3 className="fw-medium">Our Services</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about_us" onClick={handleNavItemClick}>
                <h3 className="fw-medium">About Us</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/photo_gallery" onClick={handleNavItemClick}>
                <h3 className="fw-medium">Photo Gallery</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/video_gallery" onClick={handleNavItemClick}>
                <h3 className="fw-medium">Video Gallery</h3>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item d-flex align-items-center">
              <Link to="https://www.facebook.com/DrMohamedsera" target="_self">
                <i className="fa-brands fa-facebook-f mx-2 social_icon"></i>
              </Link>
              <Link to="https://www.instagram.com/dr.mohamed_sera/" target="_self">
                <i className="fab fa-instagram mx-2 social_icon"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/dr-mohamed-sera-01972822b/" target="_self">
                <i className="fa-brands fa-linkedin-in mx-2 social_icon"></i>
              </Link>
              <Link to="https://www.youtube.com/@yehiasera" target="_self">
                <i className="fab fa-youtube mx-2 social_icon"></i>
              </Link>
              <ReactWhatsapp
                className="border-0 bg-transparent"
                number="+20 1095521277"
                message="Hello, is there anyone available to chat with!"
              >
                <i className="fab fa-whatsapp mx-2 social_icon"></i>
              </ReactWhatsapp>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import ReactWhatsapp from "react-whatsapp";
// import "./Navbar.Module.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleNavItemClick = () => {
//     setIsOpen(false);
//     setIsDropdownOpen(false);
//   };

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg position-fixed fixed-top py-3">
//       <div className="container d-flex justify-content-between align-items-center">
//         <Link className="navbar-brand" to="/">
//           <img src={logo} id="navLogo" width={50} height={50} alt="logo" />
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           aria-controls="navbarNav"
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation"
//           onClick={handleToggle}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div
//           className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
//           id="navbarNav"
//         >
//           <ul className="navbar-nav mx-auto d-flex align-items-center mt-2 mt-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/" onClick={handleNavItemClick}>
//                 <h3 className="fw-medium">Home</h3>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/contact_us" onClick={handleNavItemClick}>
//                 <h3 className="fw-medium">Contact Us</h3>
//               </Link>
//             </li>
//             <li className="nav-item dropdown position-relative">
//               <button
//                 className="nav-link dropdown-toggle active d-flex align-items-center"
//                 onClick={handleDropdownToggle}
//                 aria-expanded={isDropdownOpen}
//               >
//                 <h3 className="fw-medium">Our Services</h3>
//                 <i
//                   className={`fa fa-chevron-down mx-2 transition ${
//                     isDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 ></i>
//               </button>
//               <ul
//                 className={`dropdown-menu position-absolute ${
//                   isDropdownOpen ? "d-flex" : "d-none"
//                 }`}
//                 style={{ top: "100%", left: "0", minWidth: "10rem" }}
//               >
//                 <li>
//                   <Link
//                     className="dropdown-item"
//                     to="/services/web-development"
//                     onClick={handleNavItemClick}
//                   >
//                     Web Development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="dropdown-item"
//                     to="/services/seo"
//                     onClick={handleNavItemClick}
//                   >
//                     SEO Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="dropdown-item"
//                     to="/services/digital-marketing"
//                     onClick={handleNavItemClick}
//                   >
//                     Digital Marketing
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/about_us" onClick={handleNavItemClick}>
//                 <h3 className="fw-medium">About Us</h3>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/photo_gallery" onClick={handleNavItemClick}>
//                 <h3 className="fw-medium">Photo Gallery</h3>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/video_gallery" onClick={handleNavItemClick}>
//                 <h3 className="fw-medium">Video Gallery</h3>
//               </Link>
//             </li>
//           </ul>
//           <ul className="navbar-nav d-flex align-items-center">
//             <li className="nav-item d-flex align-items-center">
//               <Link to="https://www.facebook.com/DrMohamedsera" target="_self">
//                 <i className="fa-brands fa-facebook-f mx-2 social_icon"></i>
//               </Link>
//               <Link to="https://www.instagram.com/dr.mohamed_sera/" target="_self">
//                 <i className="fab fa-instagram mx-2 social_icon"></i>
//               </Link>
//               <Link to="https://www.linkedin.com/in/dr-mohamed-sera-01972822b/" target="_self">
//                 <i className="fa-brands fa-linkedin-in mx-2 social_icon"></i>
//               </Link>
//               <Link to="https://www.youtube.com/@yehiasera" target="_self">
//                 <i className="fab fa-youtube mx-2 social_icon"></i>
//               </Link>
//               <ReactWhatsapp
//                 className="border-0 bg-transparent"
//                 number="+20 1095521277"
//                 message="Hello, is there anyone available to chat with!"
//               >
//                 <i className="fab fa-whatsapp mx-2 social_icon"></i>
//               </ReactWhatsapp>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
