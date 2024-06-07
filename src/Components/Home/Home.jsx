import React from "react";
import Dr_Mohamed_Img from "../../assets/mohamed-sera-home-image.png";
import "./Home.Module.css";
import Services from "./../Services/Services";
import { Link } from "react-router-dom";
import "../../index.css";
import ContactUs from "../ContactUs/ContactUs";
import ReactWhatsapp from "react-whatsapp";

const Home = () => {
  return (
    <section className="container-fluid">
      {/* First Section */}
      <section className="healthPriority col-lg-12 col-md-12 m-0 col-sm-12 row d-flex align-items-center align-content-start ">
        <h1
          className={`doctorName text-center fw-bold py-4 mt-4 main-font h1 `}
        >
          Dr Mohamed Sera
        </h1>
        <div className="col-12 text-center col-md-6 position-relative p-0 rounded-2">
          <img
            src={Dr_Mohamed_Img}
            alt="Dr Mohamed Sera"
            className="w-75"
          ></img>
        </div>
        <div className="yourHealthContainer col-12 col-md-6 align-items-center">
          <h2 className=" fw-bold py-2 secondary-font">
            Your health is our priority
          </h2>

          <div className="d-flex align-items-center py-2 secondary-font">
            <i className="fas fa-check-circle blue-color"></i>
            <h4 className="h5 mx-2 fw-light">
              Consultant in General Surgery and Advanced Laparoscopic Surgery.
            </h4>
          </div>

          <div className="d-flex align-items-center py-2 secondary-font">
            <i className="fas fa-check-circle blue-color"></i>
            <h4 className="h5 mx-2 fw-light">
              Expert in Hemorrhoid Surgery, Anal Fissure Surgery, and Colorectal
              Diseases and Surgeries in Egypt
            </h4>
          </div>
          <div className="d-flex align-items-center py-2 secondary-font">
            <i className="fas fa-check-circle blue-color"></i>
            <h4 className="h5 mx-2 fw-light">
              Specialized in providing the latest treatments and surgical
              techniques to ensure patient comfort and safety
            </h4>
          </div>

          {/* <h4 className=" fw-normal py-3 secondary-font">
            دكتور محمد صيرة - استشاري جراحة عامة وجراحة المناظير المتقدمة وخبير
            في جراحة البواسير والشرخ الشرجي وأمراض وجراحات القولون في مصر متخصص
            في تقديم أحدث العلاجات والتقنيات الجراحية لضمان راحة وسلامة المرضى
          </h4> */}

          <div className="d-flex align-items-center py-2 secondary-font">
            <i className="fas fa-check-circle blue-color"></i>
            <h4 className="h5 mx-2 fw-light">
              Director of the World Society of Pelvic Surgeons from 2015 to
              2019, Hangzhou, China
            </h4>
          </div>
          <div className="d-flex align-items-center py-2 secondary-font">
            <i className="fas fa-check-circle blue-color"></i>
            <h4 className="h5 mx-2  fw-light">
              General Coordinator of the Egyptian Society of Colon and Rectal
              Surgery from 2014 to 2018
            </h4>
          </div>
          <div className="d-flex align-items-center py-2 secondary-font">
            <i className="fas fa-check-circle blue-color"></i>
            <h4 className="h5 mx-2  fw-light">
              Member of the Mediterranean Society of Pelvic Diseases, Italy
            </h4>
          </div>
          <div className="d-flex align-items-center py-2 secondary-font">
            <i className="fas fa-check-circle blue-color"></i>
            <h4 className="h5 mx-2  fw-light">
              Member of the Indian Association of Gastrointestinal Endo
              Surgeons, Kolkata, India
            </h4>
          </div>
          <div className="d-flex align-items-center py-2 secondary-font">
            <i className="fas fa-check-circle blue-color"></i>
            <h4 className="h5 mx-2  fw-light">
              Member of the American Society of Colon and Rectal Surgeons, USA
            </h4>
          </div>
          <div className="d-flex align-items-center py-2 secondary-font">
            <i className="fas fa-check-circle blue-color"></i>
            <h4 className="h5 mx-2  fw-light">
              Member of the American Latin Society of Rectal Diseases
            </h4>
          </div>
          <div className="d-flex align-items-center py-2 secondary-font">
            <i className="fas fa-check-circle blue-color"></i>
            <h4 className="h5 mx-2  fw-light">
              Member of the Egyptian Society of Surgeons, Egypt
            </h4>
          </div>
          <div>
            <button className="navy-btn px-3 py-2 mt-3">
              <Link to={"contact_us"} className="text-white">
                Book an appointment
              </Link>
            </button>
          </div>
        </div>
      </section>

      <Services />
      <section className="text-center my-5">
        <div className="p-5">
          <h2 className="pb-5 mb-5 h1"> Contact Us </h2>
          <div className="text-start d-flex">
            <div>
              <h4 className="pb-3">
                <strong> Maadi Clinic :</strong> 11 Al-Nasr Street, above
                Carrier Building, Sokkakta, 2nd floor.
              </h4>
              <h4 className="pb-3">
                <strong> Helwan Clinic :</strong> 32 Mohamed Sayed Ahmed Pasha
                Street - Above Jad Restaurant - First Floor
              </h4>
            </div>
            <div>
              <h4 className="pb-3">
                <strong> Maadi Clinic :</strong> 11 Al-Nasr Street, above
                Carrier Building, Sokkakta, 2nd floor.
              </h4>
              <h4 className="pb-3">
                <strong> Helwan Clinic :</strong> 32 Mohamed Sayed Ahmed Pasha
                Street - Above Jad Restaurant - First Floor
              </h4>
            </div>
          </div>

          <div className="my-4">
            <Link to={"https://www.facebook.com/DrMohamedsera"} target="self">
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
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
