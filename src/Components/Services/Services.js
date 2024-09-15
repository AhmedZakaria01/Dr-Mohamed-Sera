import Slider from "react-slick";
import bwaser from "../../assets/22.png";
import kawlon from "../../assets/6.png";
import shar5 from "../../assets/23.png";
import zefr from "../../assets/8.png";
import mnzar from "../../assets/10.png";
import "../../index.css";
import "./Services.Module.css";

// Slider Settings
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

function Services() {
  return (
    <>
      {/* Second Section */}
      <section className="slider">
        <h2 className="text-center py-5   h1  ">OUR SERVICES</h2>
        <Slider
          className="w-100 m-auto d-flex justify-content-center"
          {...settings}
        >
          <div className="text-center px-3 w-75 d-block mx-auto">
            <img src={kawlon} className=" w-50 mx-auto" alt="قولون" />
            <h3 className="text-center">Colon surgeries</h3>
            <p>
              Surgical removal of the colon, either completely or partially,
              using laparoscopic techniques, and excision of benign and
              malignant colon tumors.
            </p>
          </div>

          <div className="text-center px-3 d-block mx-auto">
            <img
              src={shar5}
              className=" w-50 mx-auto"
              alt="Anal fissure surgery."
            />
            <h3 className="text-center"> Anal fissure surgery.</h3>
            <p className="">
              Surgical treatments for chronic constipation disorders, excision
              of rectal pockets, surgical procedures for anal hemorrhoids, anal
              fistulas, anal abscesses, and Hirschsprung's disease.
            </p>
          </div>

          <div className="text-center px-3 w-75 d-block mx-auto">
            <img src={mnzar} className=" w-50 mx-auto" alt="جراحات المناظير" />
            <h3 className="text-center">Minimally invasive surgeries </h3>
            <p>
              Laparoscopic gallbladder removal surgeries, surgical appendectomy,
              repair of abdominal wall muscles, and laparoscopic hernia repair.
            </p>
          </div>

          <div className="text-center px-3 w-75 d-block mx-auto">
            <img
              src={bwaser}
              className=" w-50 mx-auto"
              alt="Hemorrhoid surgery"
            />
            <h3 className="text-center"> Hemorrhoid surgery</h3>
            <p>
              The intended meaning is: abnormal dilation of blood vessels
              located at the end of the rectum and anus.
            </p>
          </div>

          <div className="text-center px-3 w-75 d-block mx-auto">
            <img
              src={zefr}
              className=" w-50 mx-auto"
              alt="Ingrown toenail surgeries"
            />
            <h3 className="text-center">Ingrown toenail surgeries.</h3>
            <p>
              When the toenail curves inward and grows into the skin, it's
              called an ingrown toenail.
            </p>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default Services;
