import Slider from "react-slick";
import cert_1 from "../../assets/1.png";
import cert_2 from "../../assets/2.png";
import cert_3 from "../../assets/3.png";
import cert_4 from "../../assets/4.png";
import "../../index.css";

// Slider Settings
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

function Certificates() {
  return (
    <>
      {/* Second Section */}
      {/* <section className="slider">
        <h2 className="text-center py-5   h1  "> Certificates</h2>
        <Slider
          className="w-100 m-auto d-flex justify-content-center"
          {...settings}
        >
          <div className="text-center px-3 w-75 d-block mx-auto">
            <img src={cert_2} className=" w-50 mx-auto" alt="cert_2" />
            <h3 className="text-center">Colon surgeries</h3>
            <p>
              Surgical removal of the colon, either completely or partially,
              using laparoscopic techniques, and excision of benign and
              malignant colon tumors.
            </p>
          </div>

          <div className="text-center px-3 d-block mx-auto">
            <img
              src={cert_3}
              className=" w-50 mx-auto"
              alt="cert_3"
            />
            <h3 className="text-center"> Anal fissure surgery.</h3>
            <p className="">
              Surgical treatments for chronic constipation disorders, excision
              of rectal pockets, surgical procedures for anal hemorrhoids, anal
              fistulas, anal abscesses, and Hirschsprung's disease.
            </p>
          </div>

          <div className="text-center px-3 w-75 d-block mx-auto">
            <img
              src={cert_1}
              className=" w-50 mx-auto"
              alt="cert_1"
            />
            <h3 className="text-center"> Hemorrhoid surgery</h3>
            <p>
              The intended meaning is: abnormal dilation of blood vessels
              located at the end of the rectum and anus.
            </p> 
          </div>

          <div className=" w-100 mx-auto">
            <img
              src={cert_4}
              className="w-100 mx-auto"
              alt="cert_4"
            />
            <h3 className="text-center">Ingrown toenail surgeries.</h3>
          </div>


        </Slider>
      </section> */}
      <div className="text-center pb-4 ">
        <p style={{ color: "#BF7E00", fontWeight: "500", fontSize: "2rem" }}>
          Certificates
        </p>
      </div>
      <section className="d-flex mb-5 pb-3 ">
        <div className="container text-center d-flex flex-column flex-md-row">
          <div className="col-12 col-md-3">
            <img src={cert_1} alt="" className="pb-4" width={"40%"} />
            {/* <p>Cairo University</p> */}
          </div>
          <div className="col-12 col-md-3 pt-4 py-md-0">
            <img src={cert_2} alt="Cairo University logo" width={"30%"} />
            {/* <p>Cairo University</p> */}
          </div>
          <div className="col-12 col-md-3 py-1 py-md-0">
            <img src={cert_3} alt="" width={"45%"} />
          </div>
          <div className="col-12 col-md-3 py-1 py-md-0">
            <img src={cert_4} alt="" width={"25%"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificates;
