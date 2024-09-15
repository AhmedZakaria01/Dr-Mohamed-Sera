import React, { useEffect, useState } from "react";
import Dr_Mohamed_Img from "../../assets/mohamed-sera-home-image.png";
import Services from "./../Services/Services";
import HomeContectUs from "../HomeContectUs/HomeContectUs";
import Certificates from "../Certificates/Certificates";
import YourHealthHome from "../YourHealthHome/YourHealthHome";
import "../../index.css";
import "./Home.Module.css";
import Loading from "../Loading/Loading";

const Home = () => {
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
      <section className="vh-100 text-white healthPriority col-lg-12 col-md-12 m-0 col-sm-12 row d-flex align-items-center align-content-start ">
        <h1
          className={`doctorName text-center fw-bold py-4 mt-4 main-font h1 `}
        >
          Dr Mohamed Sera
        </h1>
        <div className="col-12 text-center col-md-6 position-relative p-0 rounded-2 mx-auto">
          <img
            src={Dr_Mohamed_Img}
            alt="Dr Mohamed Sera"
            className="w-75"
          ></img>
        </div>
        <YourHealthHome />
      </section>

      <Services />
      <Certificates />
      <HomeContectUs />
    </section>
  );
};

export default Home;
