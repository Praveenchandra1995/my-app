import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlinePhone,
  AiFillCaretDown,
} from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [practise, setPractise] = useState(false);
  const [resource, setResource] = useState(false);
  const navigate = useNavigate();

  const handleDirection = () => {
    setOpen(!open);
  };
  const handlePractise = () => {
    setPractise(!practise);
  };
  const handleResources = () => {
    setResource(!resource);
  };

  const handleClick = function () {
    return navigate("/home");
  };
  return (
    <div className="header">
      <div className="img-logo">
        <img
          src="/Images/img1.png"
          alt="img1"
          className="logo"
          onClick={handleClick}
        />
      </div>
      <nav className="menu">
        <ul>
          <div>
            <Link to="/home">
              <ol>Home</ol>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <ol>About</ol>
            </Link>
          </div>
          <div>
            <Link to="/areasserved">
              <ol onClick={handleDirection}>
                {open && (
                  <div className="menu-inner">
                    <Link to="/fremond">
                      {" "}
                      <h3 className="fremond">Fremont</h3>
                    </Link>
                    <Link to="/lincoln">
                      {" "}
                      <h3 className="lincoln">Lincoln</h3>
                    </Link>
                  </div>
                )}
                AreasServed
                <AiFillCaretDown className="icon2" />
              </ol>
            </Link>
          </div>
          <div>
            <Link to="/practisedareas">
              <ol onClick={handlePractise}>
                {practise && (
                  <div className="practise-inner">
                    <div>
                      <Link to="/assault">
                        <h3 className="fremond">Assault</h3>
                      </Link>
                    </div>
                    <div>
                      <Link to="/domesticviolence">
                        <h3 className="domestic">Domestic Violence</h3>
                      </Link>
                    </div>
                    <div>
                      <Link to="/dui">
                        <h3 className="dui">DUI</h3>
                      </Link>
                    </div>
                    <div>
                      <Link to="/felonydefence">
                        <h3 className="felony">felonydefence</h3>
                      </Link>
                    </div>
                    <div>
                      <Link to="/theft">
                        <h3 className="felony">theft</h3>
                      </Link>
                    </div>
                    <div>
                      <Link to="/juveniledefence">
                        <h3 className="juvenile">Defence</h3>
                      </Link>
                    </div>
                    <div>
                      <Link to="/traffic">
                        <h3 className="traffic">traffic</h3>
                      </Link>
                    </div>
                  </div>
                )}
                PractisedAreas
                <AiFillCaretDown className="icon2" />
              </ol>
            </Link>
          </div>
          <div>
            <Link to="/resources">
              <ol onClick={handleResources}>
                {resource && (
                  <div className="resources-inner">
                    <div>
                      <Link to="/blog">
                        {" "}
                        <h3 className="blog">Blog</h3>
                      </Link>
                    </div>
                    <div>
                      <Link to="/clientreviews">
                        {" "}
                        <h3 className="client">Client Reviews</h3>
                      </Link>
                    </div>
                  </div>
                )}
                Resources
                <AiFillCaretDown className="icon2" />
              </ol>
            </Link>
          </div>
          <div>
            <Link to="/contactus">
              <ol>
                Contact Us
                <AiFillCaretDown className="icon2" />
              </ol>
            </Link>
          </div>
        </ul>
      </nav>
      <div className="icons">
        <AiOutlineSearch className="icon1" />
        <AiOutlineMenu className="icon1" />
        <div className="contact">
          <AiOutlinePhone className="icon3" />
          <small>(402) 625-6325</small>
        </div>
      </div>
    </div>
  );
}
