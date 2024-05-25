import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import background from "../../assets/appointment.jpg";
import "../../index.css";
import "./ContactUs.Module.css";
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

  return (
    <>
      <div className="appointment-background-container">

      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-4 col-sm-12 col-md-6 col-lg-6 mx-auto"
      >
        <div className="form-group mb-3">
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
        <div className="form-group mb-3">
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
        <div className="form-group mb-3">
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
        <div className="form-group mb-3">
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
        <button type="submit" className="btn btn-primary px-5 py-2">
          Send
        </button>
      </form>

      <div className="text-center ">
        <h2 className="sectionHeader py-3 mb-4"> Adress </h2>
        <h4 className="text-cneter">
          Maadi Clinic: 11 Al-Nasr Street, above Carrier Building, Sokkakta, 2nd
          floor.
        </h4>
        <h4>
          Helwan Clinic: 32 Mohamed Sayed Ahmed Pasha Street - Above Jad
          Restaurant - First Floor
        </h4>
      </div>
    </>
  );
};

export default ContactUs;
