import React from "react";
import "./Body.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
export default function Body() {
  return (
    <>
      <NavBar />
      <div className="landing-body">
       
          <div className="main-Body">
            <div className="body-social-icons">
              <a href="#">
                <FaInstagram className="socialIcon" />
              </a>
              <a href="#">
                <FaTwitter className="socialIcon" />
              </a>
              <a href="#">
                <FaFacebookF className="socialIcon" />
              </a>
              <a href="#">
                <FaLinkedinIn className="socialIcon" />
              </a>
              <span className="vertical-line">|</span>
            </div>
            <div className="main-body-items">
              <span className="main-body-title">
                ENBARR HORSES<span className="horizontal-line">-</span>
              </span>
              <span className="main-body-text">
                The history of mankind is carried on the back of a horse.
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque in mattis risus nam vitae. Facilisis morbi purus
                vitae in quisque habitant ipsum, sollicitudin lacinia.
              </p>
              <div className="btns">
                <button className="googleplay">
                  <FaGooglePlay className="googleplay-icon" />
                  <div className="googel-text">
                    <span className="google-firsttext">ANDROID APP ON</span>
                    <span className="google-secondtext">Google Play</span>
                  </div>
                </button>
                <button className="appstore">
                  <FaApple className="appstore-icon" />
                  <div className="appstore-text">
                    <span className="appstore-firsttext">Download on the</span>
                    <span className="appstore-secondtext">App Store</span>
                  </div>
                </button>
              </div>
              <Link to="/sign up" className="singup-btn">
                Sign up
              </Link>

              <div className="laws">
                <div>
                  <a className="terms" href="#">
                    Terms and Conditions
                  </a>

                  <a className="privacy" href="#">
                    Privacy Policy
                  </a>
                </div>

                <div className="typography">
                  <a className="copyright" href="#">
                    © 2022 Enbarr, Inc.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="body-image">
            <div className="first-Bg-Img"></div>
            <div className="second-Bg-Img"></div>
          
            <img
              className="body-Img"
              src="/images/landingImage.59c1250ddffd868f86c9.png"
            />
           
          </div>
        
      </div>
    </>
  );
}
