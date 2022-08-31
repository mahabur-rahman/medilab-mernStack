import React from "react";
// link
import { Link } from "react-router-dom";
// react bootstrap
import { Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const SubForm = ({ title, text }) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lz1rjp5", // service_id
        "template_tkvyu6k", // TEMPLATE_ID
        e.target,
        "nrzgXz-uoq-iTmkPn" // public_key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="sub_form mt-4 mt-lg-0">
      <h4>{title}</h4>
      <p>{text}</p>
      {/* <form action="" method="post">
        <input type="email" name="email" />
        <input type="submit" value="Subscribe" />
      </form> */}

      <form onSubmit={sendEmail}>
        <div className="mx-auto row">
          <div className="mx-auto  form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="pt-2 mx-auto  form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="pt-2 mx-auto  form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="pt-2 mx-auto  form-group">
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="3"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>

          <div className="pt-3 mx-auto ">
            <input
              type="submit"
              className="btn btn-info py-2"
              value="Send Message"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubForm;
