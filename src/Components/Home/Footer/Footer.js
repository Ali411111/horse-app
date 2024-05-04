import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdHorizontalRule } from "react-icons/md";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-leftside">
          <span className="footer-leftside-title">ENBARR</span>
          <div className="footer-leftside-social-icons">
            <MdHorizontalRule className="horizontal-line" />
            <a href="#">
              <FaInstagram className="SocialIcon" />
            </a>
            <a href="#">
              <FaTwitter className="SocialIcon" />
            </a>
            <a href="#">
              <FaFacebookF className="SocialIcon" />
            </a>
            <a href="#">
              <FaLinkedinIn className="SocialIcon" />
            </a>
          </div>
        </div>
        <div className="footer-centerside">
          <div className="termsandpolicy">
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
          </div>
          <div className="footer-copyright">
            <span>© 2022 Enbarr, Inc.</span>
          </div>
        </div>
        <div className="footer-rightside">
          <div className="Btns">
            <button className="Appstore">
              <FaApple className="Appstore-icon" />
              <div className="Appstore-text">
                <span className="Appstore-firsttext">Download on the</span>
                <span className="Appstore-secondtext">App Store</span>
              </div>
            </button>
            <button className="Googleplay">
              <FaGooglePlay className="Googleplay-icon" />
              <div className="Googel-text">
                <span className="Google-firsttext">ANDROID APP ON</span>
                <span className="Google-secondtext">Google Play</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
