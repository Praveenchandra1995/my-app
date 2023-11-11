import React from "react";
import { useNavigate } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import LiveLocationMap from "../MapLocation.js/Map";
import { AiFillCaretDown } from "react-icons/ai";
const ContactUs = () => {
  const navigate = useNavigate();

  const handleNavigate = function () {
    return navigate("/home");
  };
  const handleContactUs = function () {
    return navigate("/Contactus");
  };
  const handleAbout = function () {
    return navigate("/about");
  };

  const handleLocation = function () {
    navigate("/Contactus");
  };
  return (
    <div className="contact-us">
      <div className="contact-img">
        <h2 className="contact-title">CONTACT-US</h2>
      </div>
      <div className="contact-body">
        <h1 className="contact-heading">Let Us Know How We Can Help</h1>
        <h1 className="contact-heading2">
          Contact The Sopinski Law Office Today
        </h1>
      </div>

      <div className="contact-bar">
        <div className="contact-address">
          <HiLocationMarker className="loc-img" />
          <div className="address">
            <h2 className="address-title">Our Address</h2>
            <p className="address-detailes">
              33 W. 4th St., Suite 1, NE 68025, United States
            </p>
          </div>
        </div>
        <div className="contact-address">
          <AiFillPhone className="loc-img" />
          <div className="address">
            <h2 className="address-title">Call Us</h2>
            <p className="address-detailes">(402) 810-8568</p>
          </div>
        </div>
      </div>
      <div className="form-page">
        <div className="map">{<LiveLocationMap />}</div>

        <div className="form">
          <div>
            <input
              type="text"
              placeholder="First name*"
              className="form-name"
            />

            <input type="text" placeholder="Last name*" className="form-last" />
          </div>
          <div>
            <input type="text" placeholder="Phone*" className="form-phone" />
            <input type="text" placeholder="Email*" className="form-email" />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Message"
              className="text-area"
            ></textarea>
          </div>
          <div>
            <input
              type="text"
              placeholder="Which County or City Did This Happen"
              className="form-county"
            />
          </div>
          <div className="guess">
            4*3=?
            <input type="text" className="form-guess" />
          </div>
          <button className="submit">Submit</button>
        </div>
      </div>
      <div className="location-detailes">
        <div className="links">
          <h2 className="link-title">
            Important-Links <AiFillCaretDown />
          </h2>

          <h3 className="link-1" onClick={handleNavigate}>
            Home
          </h3>
          <h3 className="link-2" onClick={handleNavigate}>
            blog
          </h3>
          <h3 className="link-3" onClick={handleAbout}>
            About
          </h3>
          <h3 className="link-4" onClick={handleContactUs}>
            ContactUs
          </h3>
          <h3 className="link-2" onClick={handleLocation}>
            clientReviews
          </h3>
        </div>
        <div className="contact-uss">
          <h1 className="contact-title1">
            Call Us
            <AiFillCaretDown />
          </h1>
          <p className="phone">
            <AiFillPhone />
            (402) 625-6325
          </p>
        </div>
        <div className="Visit-us">
          <h1 className="contact-title1">
            Visit-us
            <AiFillCaretDown />
          </h1>
          <p className="para">
            Sopinski Law Office 33 W. 4th St.,Suite 1 Fremont NE 68025 Get
            Directions (402) 625-6325
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
