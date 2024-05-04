import React from "react";
import "./TopBody.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function TopBody() {
  return (
    <div className="topbody">
      <div className="topbody-left-side">
        <div className="body-home-social-icons">
          <a href="https://www.instagram.com" target="blanck">
            <FaInstagram className="socialIcon" />
          </a>
          <a href="https://www.twitter.com" target="blanck">
            <FaTwitter className="socialIcon" />
          </a>
          <a href="https://www.facebook.com" target="blanck">
            <FaFacebookF className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com" target="blanck">
            <FaLinkedinIn className="socialIcon" />
          </a>
          <span className="vertical-line">|</span>
        </div>
        <div className="topbody-leftside-text">
          <span className="home-title">BUY an enbarr hourse</span>
          <span className="home-big-title">TODAY!</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            in mattis risus nam vitae.{" "}
          </p>
          <div className="topbody-leftside-btns">
            <Link to='/home/buyer' className="topbody-leftside-btn">A Buyer</Link>
            <Link to='/home/seller' className="topbody-leftside-btn">A seller</Link>
          </div>
        </div>
      </div>
      <div className="topbody-right-side">
        <img src="/images/homeImage.7be8e37aab02f5d4a9b0.png" className="topbody-right-side-img" />
      </div>
    </div>
  );
}
