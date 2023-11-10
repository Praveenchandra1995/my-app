import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlinePhone,
  AiFillCaretDown,
} from "react-icons/ai";
export default function Header() {
  return (
    <div className="header">
      <div className="img-logo">
        <img src="/Images/img1.png" alt="img1" className="logo" />
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
              <ol>
                Areas Served
                <AiFillCaretDown className="icon2" />
              </ol>
            </Link>
          </div>
          <div>
            <Link to="/practisedareas">
              <ol>
                PractisedAreas
                <AiFillCaretDown className="icon2" />
              </ol>
            </Link>
          </div>
          <div>
            <Link to="/resources">
              <ol>
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
