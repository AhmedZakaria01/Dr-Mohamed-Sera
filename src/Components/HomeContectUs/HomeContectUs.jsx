import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

function HomeContectUs() {
  return (
    <section className="text-center">
      <div className="py-4">
        <h2 className=" py-3 my-5 h1  "> CONTACT US </h2>
        <div className="contact-us-info text-center">
          <div className="px-3">
            <h4 className="pb-3">
              <strong> Maadi Clinic :</strong> 11 Al-Nasr Street, above Carrier
              Building, Sokkakta, 2nd floor.
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
          <Link to={"https://www.instagram.com/dr.mohamed_sera/"} target="self">
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
  );
}

export default HomeContectUs;
