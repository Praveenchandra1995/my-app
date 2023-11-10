import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = function () {
    navigate("/contactus");
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
    </div>
  );
};

export default Home;
