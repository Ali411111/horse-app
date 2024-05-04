import React from "react";
import { GrDislike } from "react-icons/gr";
import { GrLike } from "react-icons/gr";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import "./MatchHorse.css";
import NavbarHome from "./../NavbarHome/NavbarHome";
import Footer from "./../Footer/Footer";

export default function MatchHorse() {
  return (
    <>
      <div className="match-horse-container">
        <NavbarHome />
        <form action="#" className="match-horse-form">
          <span className="matchhorse-title">ENBARR</span>
          <img src="/images/horse.06cffeec0cba217b0c75.png" alt="" className="match-horse-img"/>
          <div className="like-dislike-btns">
            <button className="dislike-button"> 
              <GrDislike className="dislike-icon"/>
            </button>
            <button className="like-button"> 
              <GrLike className="like-icon"/>
            </button>
          </div>
          <button className="viwe-details-container">
            <MdKeyboardDoubleArrowUp className="arrow-up-icon"/>
            <span>Click to view destails</span>
          </button>
          <button className="close-matchhorse-btn">Close</button>
        </form>
      <Footer />
      </div>
    </>
  );
}
