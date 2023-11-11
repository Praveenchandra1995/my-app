import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlinePhone,
  AiOutlineEdit,
  AiFillPhone,
} from "react-icons/ai";

import { LuPaintbrush2 } from "react-icons/lu";
import LiveLocationMap from "../MapLocation.js/Map";
const Home = () => {
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

  const handleClick = function () {
    navigate("/contactus");
  };
  const casesData = [
    {
      title: "Case dismissed: motion to suppress granted",
      result:
        "Felony drug possession, evidence thrown out due to illegal search",
    },
    {
      title: "Not guilty jury verdict",
      result: "Felony auto theft",
    },
    {
      title: "Charges reduced to reckless driving",
      result: "First offense DUI charge reduced to reckless driving",
    },
    {
      title: "offence against public property",
      result: "Case rejected due to no prrof of evidense",
    },
    // Add more cases as needed
  ];

  const [displayedCases, setDisplayedCases] = useState(casesData.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    const newIndex =
      direction === "left"
        ? Math.max(0, currentIndex - 1)
        : Math.min(casesData.length - 3, currentIndex + 1);

    setDisplayedCases(casesData.slice(newIndex, newIndex + 3));
    setCurrentIndex(newIndex);
  };
  return (
    <div className="home-bar">
      <div className="image-part">
        <div className="dots">
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
        <h2 className="title1">Criminal Defense & DUI Lawyer In Nebraska</h2>
        <h3 className="title2">
          Get Answers. Get Guidance. Get Your Life Back.
        </h3>
        <button className="available-btn" onClick={handleClick}>
          Available 24/7 For Calls
        </button>
      </div>
      <div className="criminal-description">
        <h1 className="criminal-title"> Fremont Criminal Defense Lawyer</h1>
        <p className="criminal-para">
          Getting arrested on criminal charges is a frightening experience. A
          criminal allegation may lead to jail time, harsh fines, and the loss
          of your rights. If you are in this position, it is crucial to get
          legal counsel as soon as possible. Assistance from a dedicated
          attorney could make all the difference in the outcome of your case.
          Reach out to a Fremont criminal defense lawyer to go over your case
          and begin preparing a strategy against the prosecution. It is your
          legal right to secure the best possible representation, so exercise
          that right and give us a call today.
        </p>
      </div>
      <div className="story">
        <h2 className="story-title">Peace Of Mind</h2>
        <p className="story-para">
          Criminal charges are stressful. Knowing what to expect and knowing
          that someone is on your side mean less stress and worry.
        </p>
        <h2 className="story-title">Upfront Pricing</h2>
        <p className="story-para">
          Because we work on a flat fee, you will know exactly what to expect.
          No hidden fees, no hourly billing, just certainty.
        </p>
        <h2 className="story-title">Access To Your Attorney</h2>
        <p className="story-para">
          With our secure client portal, you can view your case file anytime.
          Text message your attorney or set up a call or appointment with one
          click.
        </p>
      </div>
      <div className="story-image">
        <img src="/Images/img3.png" alt="img3" className="story-img1" />
        <img src="/Images/img4.png" alt="img4" className="story-img2" />
        <img src="/Images/img6.png" alt="img6" className="story-img4" />

        <img src="/Images/img5.png" alt="img5" className="story-img3" />
      </div>
      <div className="recognitions">
        <img src="/Images/img7.png" alt="logo" className="recog-img" />
        <img src="/Images/img8.png" alt="logo" className="recog-img" />
        <img src="/Images/img9.png" alt="logo" className="recog-img" />
        <img src="/Images/img10.png" alt="logo" className="recog-img" />
      </div>
      <div className="case-results">
        <div className="case-title-part" />
        <h1 className="case-title">Prior Criminal Case Results</h1>
        <div className="case-icon">
          <AiOutlineArrowLeft
            className="icon-left"
            onClick={() => handleArrowClick("left")}
          />
          <AiOutlineArrowRight
            className="icon-right"
            onClick={() => handleArrowClick("right")}
          />
        </div>
        <div className="cases-container">
          {displayedCases.map((caseItem, index) => (
            <div className="cases-display" key={index}>
              <h1 className="case-result-title">Title:{caseItem.title}</h1>
              <h1 className="case-result-result">Result:{caseItem.result}</h1>
            </div>
          ))}
        </div>
        <div className="Law-firm-intro">
          <h1 className="firm-ceo">
            "At Sopinski Law, we know what it feels like to have your world
            crashing down. We’ve helped hundreds of good people get through it
            and helped them get their lives back on track. Tim Sopinski CEO,
            Sopinski Law Office"
          </h1>
        </div>
        <div className="start-process">
          <div className="dots-1">
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
          <h1 className="heading">How Can We Get Started?</h1>
          <div className="heading-style">
            <div className="heading-part">
              <AiOutlinePhone className="icon-head" />
              <h2 className="call-info">Call Us Or Click Chat</h2>
              <p className="call-data">
                Call us anytime, 24/7 to set up an appointment. We can meet in
                person or over the phone. We will listen to you and find out
                what you want to happen.
              </p>
            </div>
            <div className="heading-part">
              <AiOutlineEdit className="icon-head" />
              <h2 className="call-info">We Create a Plan</h2>
              <p className="call-data">
                Using our years of experience and legal knowledge, we will build
                a plan tailored to what you want. This can include defenses,
                pretrial motions and negotiations.
              </p>
            </div>
            <div className="heading-part">
              <LuPaintbrush2 className="icon-head" />
              <h2 className="call-info">We Work For You</h2>
              <p className="call-data">
                Worry less knowing that we will be fighting for you and working
                on an outcome that works for you.
              </p>
            </div>
          </div>
          <div className="penalties">
            <div className="dots-2">
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
            </div>
            <h1 className="penalty-header">
              Misdemeanor And Felony Criminal Penalties
            </h1>
            <p className="penalty-para">
              When a person’s reputation, possessions, and freedom are at risk,
              they need the experience of a skillful criminal defense lawyer to
              successfully navigate the court proceedings. Any kind of
              conviction on a person’s record can carry serious consequences,
              whether misdemeanor or felony. While many refer to a misdemeanor
              as a minor offense, these charges still have the possibility of up
              to one year in jail with many other penalties. A felony conviction
              carries the possibility of up to life in prison. Classes of
              Misdemeanor Crimes in Fremont The criminal justice system is a
              highly complex system, requiring help from a knowledgeable defense
              lawyer in the area to successfully navigate. For instance,
              Nebraska Revised Statute § 28-106 states that the law divides
              misdemeanors into seven individual classes. An experienced
              criminal defense attorney could further explain the penalties for
              each class listed below: Class I misdemeanor: maximum of up to one
              year in jail, a fine of up to $1000, or both Class II misdemeanor:
              maximum of up to six months in prison, a fine of up to $1000, or
              both Class III misdemeanor: maximum of three-month imprisonment,
              or $500 fine, or both Class III: misdemeanor: maximum of seven-day
              imprisonment, $500 fine, or both Class IV and V misdemeanor:
              maximum of a $500 fine Class W misdemeanor: first conviction for
              driving under the influence or implied consent carries a maximum
              of sixty-day imprisonment and $500 fine; second conviction has a
              mandatory minimum of seven-day imprisonment and $500 fine
            </p>
          </div>
        </div>
        <div className="contact-experienced">
          <div className="dots-2">
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
          <h1 className="experience-header">
            Speak With An Experienced Fremont Criminal Defense Attorney Today
          </h1>
          <p className="experience-para">
            If you face conviction for a misdemeanor or felony crime, do not
            wait to speak with a seasoned Fremont criminal defense lawyer. Talk
            to legal counsel as soon as possible to prepare your defense. Find a
            trustworthy lawyer that understands every aspect of your case and
            will fight tirelessly on your behalf to build the best defense
            possible. A criminal arrest of any kind calls for legal advice and
            representation. An attorney at our firm could explain your rights
            and work to protect them, so give us a call today to set up a
            consultation.
          </p>
        </div>
      </div>
      <div className="consult">
        <h1 className="consult-title">
          Speak With An Experienced Fremont Criminal Defense Attorney Today
        </h1>
        <p className="consult-para">
          If you face conviction for a misdemeanor or felony crime, do not wait
          to speak with a seasoned Fremont criminal defense lawyer. Talk to
          legal counsel as soon as possible to prepare your defense. Find a
          trustworthy lawyer that understands every aspect of your case and will
          fight tirelessly on your behalf to build the best defense possible. A
          criminal arrest of any kind calls for legal advice and representation.
          An attorney at our firm could explain your rights and work to protect
          them, so give us a call today to set up a consultation.
        </p>
      </div>
      <div className="form-page">
        <div className="form">
          <h1 className="contact-paraa">Get a Free No-Risk Consultation</h1>
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
        <div className="map">{<LiveLocationMap />}</div>
      </div>
      <div className="location-detailes">
        <div className="links">
          <h2 className="link-title">Important-Links</h2>

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
          <h3 className="link-2" onClick={handleNavigate}>
            clientReviews
          </h3>
        </div>
        <div className="contact-uss">
          <h1 className="contact-title1">Call Us</h1>
          <p className="phone">
            <AiFillPhone />
            (402) 625-6325
          </p>
        </div>
        <div className="Visit-us">
          <h1 className="contact-title1">Visit-us</h1>
          <p className="para">
            Sopinski Law Office 33 W. 4th St.,Suite 1 Fremont NE 68025 Get
            Directions (402) 625-6325
          </p>
        </div>
      </div>
      <footer className="footer">
        <h3>
          © Sopinski Law Office 2023 | All Rights Reserved | Disclaimer Privacy
          Policy
        </h3>
      </footer>
    </div>
  );
};

export default Home;
