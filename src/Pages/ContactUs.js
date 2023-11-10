import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import LiveLocationMap from "../MapLocation.js/Map";
const ContactUs = () => {
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
    </div>
  );
};

export default ContactUs;
