import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../index.css";
import "./ContactUs.Module.css";
import ReactWhatsapp from "react-whatsapp";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Email Js
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wf8ohhq",
        "template_hzbb8ce",
        form.current,
        "1InObnAdV9uIYDDzc"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);

          // Send auto-reply email
          emailjs
            .send(
              "service_wf8ohhq",
              "template_6447v3a",
              {
                user_name: formData.user_name,
                user_email: formData.user_email,
                user_phone: formData.user_phone,
              },
              "1InObnAdV9uIYDDzc"
            )
            .then(
              (result) => {
                console.log("Auto-reply sent!", result.text);

                // Clear the form fields by resetting the state
                setFormData({
                  user_name: "",
                  user_email: "",
                  user_phone: "",
                  message: "",
                });
              },
              (error) => {
                console.log("Failed to send auto-reply...", error.text);
              }
            );
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // Location

  return (
    <section className="contact-us vh-100 m-0 d-flex align-items-center p-5">
      <div className="p-5">
        <h1 className="pb-5 mb-5"> Contact Us </h1>
        <h4 className="pb-3">
          <strong> Maadi Clinic :</strong> 11 Al-Nasr Street, above Carrier
          Building, Sokkakta, 2nd floor.
        </h4>
        <h4 className="pb-3">
          <strong> Helwan Clinic :</strong> 32 Mohamed Sayed Ahmed Pasha Street
          - Above Jad Restaurant - First Floor
        </h4>
        <h4 className="pb-3">
          <strong> Maadi Clinic :</strong> 11 Al-Nasr Street, above Carrier
          Building, Sokkakta, 2nd floor.
        </h4>
        <h4 className="pb-3">
          <strong> Helwan Clinic :</strong> 32 Mohamed Sayed Ahmed Pasha Street
          - Above Jad Restaurant - First Floor
        </h4>
        <ReactWhatsapp
          className=" border-0 bg-transparent "
          number="+20 1095521277"
          message="Hello, is there is anyone available to chat with !"
        >
          <i className="fab mx-2 fa-whatsapp social_icon"></i>
        </ReactWhatsapp>
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
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-5 col-sm-12 col-md-6 col-lg-6 mx-auto rounded-4  "
      >
        <div className="form-group my-5 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="form-control py-1 px-2"
          />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            className="form-control py-1 px-2"
          />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            name="user_phone"
            value={formData.user_phone}
            onChange={handleChange}
            required
            className="form-control py-1 px-2"
          />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="form-control py-1 px-2"
          />
        </div>
        <div className="text-center mb-5">
          <button type="submit" className="px-5 py-2 navy-btn ">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
