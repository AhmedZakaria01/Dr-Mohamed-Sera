import React, { useEffect, useState } from "react";
import Dr_Mohamed_Img from "../../assets/doctormohamed.png";
import Services from "./../Services/Services";
import HomeContectUs from "../HomeContectUs/HomeContectUs";
import Certificates from "../Certificates/Certificates";
import YourHealthHome from "../YourHealthHome/YourHealthHome";
import Loading from "../Loading/Loading";
import Homedetails from "./Homedetails";
import { redirect, useNavigate } from "react-router-dom";
import Hemorrhoid from "../../assets/Hemorrhoid surgery.png";
import ingrown from "../../assets/ingrown toenail surgeries.png";
import laparoscopic from "../../assets/laparoscopic surgeries.png";
import Minimally from "../../assets/Minimally invasive surgeries.png";
import Anal from "../../assets/Anal fissure surgery.png";
import Colon from "../../assets/Colon surgeries.png";
import photo from "../../assets/photo.png";
import styles from "./Home.Module.css";
import "../../index.css";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  loading && <Loading />;
  return (
    <section className="container-fluid">
      {/* First Section */}
      <section className="text-white healthPriority m-0 row d-flex align-items-center align-content-start ">
        <div className=" d-flex justify-content-center align-items-center flex-column flex-md-row">
          <div className="pt-4 mt-3  rounded-2 mx-auto text-center">
            <img
              src={Dr_Mohamed_Img}
              alt="Dr Mohamed Sera"
              width="77%"
              // height="100%"
            ></img>
          </div>

          <div
            className="text-center text-center rounded p-5 m-5 col-12 col-md-5 "
            style={{
              background: "rgba(48, 43, 35, 59%)",
              boxShadow: "1px 1px 5px 0px #000000"            }}
          >
            <h1 className="textColor">Dr Mohamed Sera</h1>
            <p className="textColor">WELCOME TO SURGERY CLINIC</p>
            <button className="px-3 py-1 rounded buttonStyle text-light">
              Book Now
            </button>
          </div>
        </div>
        {/* <YourHealthHome /> */}
      </section>
      <div className="text-center pt-3 ">
        <p style={{ color: "#BF7E00", fontWeight: "500", fontSize: "2rem" }}>
          Our Services
        </p>
      </div>

      <section className="container-fluid  pt-5 d-flex gap-5 flex-column flex-md-row w-100 justify-content-center align-items-center text-center">
        <div
          className="position-relative  col-11 col-md-3 "
          style={{ boxShadow: "1px 3px 5px 0px #222222" ,
            borderRadius: '0px 0px 5px 5px'}
            }
        >
          <div className="bg-warning image-box4 position-relative rounded-top-2">
            <img src={Minimally} className="w-100 rounded-top-2" alt="" />
          </div>
         <h3 className="text-light p-3 " style={{ background: "#222222" ,borderRadius:'0px 0px 5px 5px'}}>
            Minimally invasive surgeries
          </h3>
        </div>

        <div
          className="position-relative  col-11 col-md-3 "
          style={{ boxShadow: "1px 3px 5px 0px #222222" ,
            borderRadius: '0px 0px 5px 5px'}
            }
        >
          <div className=" image-box5 position-relative rounded-top-2">
            <img src={Anal} className="w-100 rounded-top-2" alt="" />
          </div>
          <h3 className="text-light p-3" style={{ background: "#222222" ,borderRadius:'0px 0px 5px 5px'}}>
            Anal fissure surgery
          </h3>
        </div>

        <div
          className="position-relative  col-11 col-md-3 "
          style={{ boxShadow: "1px 3px 5px 0px #222222" ,
            borderRadius: '0px 0px 5px 5px'}
            }
        >
          <div className="bg-warning image-box6 position-relative rounded-top-2">
            <img src={Colon} className="w-100 rounded-top-2" alt="" />
          </div>
          <h3 className="text-light p-3" style={{ background: "#222222" ,borderRadius:'0px 0px 5px 5px'}}>
            Colon surgeries
          </h3>
        </div>
      </section>

      <section className="container-fluid  pt-4 d-flex gap-5 flex-column flex-md-row w-100 justify-content-center align-items-center text-center">
        <div
          className="position-relative  col-11 col-md-3 "
          style={{ boxShadow: "1px 3px 5px 0px #222222" ,
            borderRadius: '0px 0px 5px 5px'}
            }
        >
          <div className="bg-warning image-box1 position-relative rounded-top-2">
            <img src={Hemorrhoid} className="w-100 rounded-top-2" alt="" />
          </div>
          <h3 className="text-light p-3" style={{ background: "#222222",borderRadius:'0px 0px 5px 5px' }}>
            Hemorrhoid surgery
          </h3>
        </div>

        <div
          className="position-relative  col-11 col-md-3 "
          style={{ boxShadow: "1px 3px 5px 0px #222222" ,
            borderRadius: '0px 0px 5px 5px'}
            }
        >
          <div className=" image-box2 position-relative rounded-top-2">
            <img src={ingrown} className="w-100 rounded-top-2" alt="" />
          </div>
          <div className="rounded">
            <h3 className="text-light p-3" style={{ background: "#222222" ,borderRadius:'0px 0px 5px 5px'}}>
              ingrown toenail surgeries
            </h3>
          </div>
        </div>

        <div
          className="position-relative  col-11 col-md-3 "
          style={{ boxShadow: "1px 3px 5px 0px #222222" ,
            borderRadius: '0px 0px 5px 5px'}
            }
        >
          <div className="bg-warning image-box3 position-relative rounded-top-2">
            <img src={laparoscopic} className="w-100 rounded-top-2" alt="" />
          </div>
          <h3 className="text-light p-3" style={{ background: "#222222",borderRadius:'0px 0px 5px 5px' }}>
            laparoscopic surgeries
          </h3>
        </div>
      </section>

      <section className="pt-5 position-relative">
        <div className="homepartStyle ">
          <div className="d-flex align-items-center text-light flex-column flex-md-row">
            <div className="col-md-3 col-6">
              <img src={photo} alt="" width={"100%"} />
            </div>
            <div>
              <p className="p-2 fs-3 fw-medium text-center">
                Dr. Mohamed Sera’s clinic combines expertise with the latest
                surgical innovations to ensure quick recovery and minimal
                discomfort. Whether you need a simple or complex procedure, our
                minimally invasive techniques provide you with the best care and
                faster healing. Your well-being is our priority-experience a
                healthier life today
              </p>
              <div className=" w-100 bottom-0 text-center mb-2">
                <button
                  className=" rounded px-3 text-light"
                  style={{ backgroundColor: "#393426" }}
                  onClick={() => {
                    navigate("/about_us");
                  }}
                >
                  <span className="fs-6"> More Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div
          className="px-md-5 px-1 text-light py-3"
          style={{ backgroundColor: "#393426" }}
        >
          <h1 className="px-2 px-md-4"> About Dr Mohamed Sera</h1>
          <ul className="px-md-5 ps-3">
            <li>
              Consultant in General Surgery and Advanced Laparoscopic Surgery.
            </li>
            <li>
              Expert in Hemorrhoid Surgery, Anal Fissure Surgery, and Colorectal
              Diseases and Surgeries in Egypt
            </li>
            <li>
              Specialized in providing the latest treatments and surgical
              techniques to ensure patient comfort and safety
            </li>
            <li>
              Director of the World Society of Pelvic Surgeons from 2015 to
              2019, Hangzhou, China
            </li>
            <li>
              Member of the Mediterranean Society of Pelvic Diseases, Italy
            </li>
            <li>
              Member of the Indian Association of Gastrointestinal Endo
              Surgeons, Kolkata, India
            </li>
            <li>
              Member of the American Society of Colon and Rectal Surgeons, USA
            </li>
            <li>Member of the American Latin Society of Rectal Diseases </li>
            <li>Member of the Egyptian Society of Surgeons, Egypt </li>
          </ul>
        </div>

        <div className="text-center">
          <button className="m-4 py-1 px-3 rounded buttonStyle text-light">
            Book an appointment
          </button>
        </div>
      </section>

      {/* <Homedetails /> */}
      {/* <Services /> */}
      <Certificates />
      {/* <HomeContectUs /> */}
    </section>
  );
};

export default Home;
