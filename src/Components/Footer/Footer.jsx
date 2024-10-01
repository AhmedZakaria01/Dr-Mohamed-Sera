import React from "react";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  return (
    <>
      <div
        className="text-light d-flex pt-4"
        style={{ backgroundColor: "#353431" }}
      >
        {/* <h5 className="m-0 py-2">
        11 Nasr St Maadi , Cairo , Egypt | Phone: 800-123-456 | Email:
        drMohamedSera@gmail.com
      </h5> */}

        <div className="col-6 px-0 px-md-5">
          <p>
            <i className="fa-solid fa-location-dot px-2 text-warning"></i>
            Maadi Clinic : 11 Al-Nasr Street, above Carrier Building, Sokkakta,
            2nd floor.
          </p>
          <p>
            <i className="fa-solid fa-location-dot px-2 text-warning"></i>
            Helwan Clinic : 32 Mohamed Sayed Ahmed Pasha Street - Above Jad
            Restaurant - First Floor
          </p>
          <p>
            <i className="fa-solid fa-location-dot px-2 text-warning"></i>
            Maadi Clinic : 11 Al-Nasr Street, above Carrier Building, Sokkakta,
            2nd floor.
          </p>
          <p>
            <i className="fa-solid fa-location-dot px-2 text-warning"></i>
            Helwan Clinic : 32 Mohamed Sayed Ahmed Pasha Street - Above Jad
            Restaurant - First Floor
          </p>
        </div>

        <div
          className="col-1 my-2"
          style={{ width: "1px", backgroundColor: "#B9AD95" }}
        ></div>

        <div className="col-md-4 col-12 px-0 px-md-5 ps-1">
          <div className="d-flex pt-3 align-items-center px-md-3 px-1 m-auto text-center ps-4">
            <i className="fa-solid fa-phone text-success mt-1 "> </i>
            <div className="mx-md-2 mx-1 ">+2 010599212577</div>
          </div>
          <ul className="mt-4 p-0 m-0 ps-0">
            <li className=" d-flex align-items-center">
              <Link to="https://www.facebook.com/DrMohamedsera" target="_self">
                <i className="fa-brands fa-facebook-f mx-2  social_icon text-primary"></i>
              </Link>
              <Link
                to="https://www.instagram.com/dr.mohamed_sera/"
                target="_self"
              >
                <i className="fab fa-instagram mx-2 social_icon text-secondary"></i>
              </Link>
              <Link to="https://www.youtube.com/@yehiasera" target="_self">
                <i className="fab fa-youtube mx-2 social_icon text-danger"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/dr-mohamed-sera-01972822b/"
                target="_self"
              >
                <i className="fa-brands fa-linkedin-in mx-2 social_icon text-primary"></i>
              </Link>
        
              <ReactWhatsapp
                className="border-0 bg-transparent"
                number="+20 1095521277"
                message="Hello, is there anyone available to chat with!"
              >
                <i className="fab fa-whatsapp mx-2 social_icon text-success"></i>
              </ReactWhatsapp>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="text-light text-center ps-5"
        style={{ backgroundColor: "#353431" }}
      >
        <h6 className="py-2">Copyright © 2024 Dr. Mohamed Sera</h6>
      </div>
    </>
  );
};

export default Footer;
