import React from "react";
import "./Buyer.css";
import NavbarHome from "./../NavbarHome/NavbarHome";
import Footer from "./../Footer/Footer";
import { NavLink } from "react-router-dom";
export default function Buyer() {
  return (
    <>
      <div className="buyer-body">
        <NavbarHome />

        <form action="#" className="buyer-form">
          <h1 className="buyer-form-title">Buyer</h1>
          <div className="location-container">
            <span>Location</span>
            <select name="" id=""></select>
          </div>
          <div className="breed-container">
            <span>Breed</span>
            <select name="" id=""></select>
          </div>
          <div className="age-container">
            <span>Age</span>
            <div className="age-min-max-inputs">
              <div className="age-min-input">
                <span>Min</span>
                <input type="text" />
              </div>
              <div className="age-max-input">
                <span>Max</span>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="buyer-height-container">
            <span>Height</span>
            <div className="height-min-max-inputs">
              <div className="height-min-input">
                <span>Min</span>
                <input type="text" />
              </div>
              <div className="height-max-input">
                <span>Max</span>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="buyer-price-container">
            <span>Price</span>
            <div className="price-min-max-inputs">
              <div className="price-min-input">
                <span>Min</span>
                <input type="text" />
              </div>
              <div className="price-max-input">
                <span>Max</span>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="discipline-container">
            <span>Discipline</span>
            <select name="" id=""></select>
          </div>
          <div className="gender-container">
            <span>Gender</span>
            <div className="gender-inputs">
              <div className="gelding-input">
                <input type="radio" />
                <span>Gelding</span>
              </div>
              <div className="mare-input">
                <input type="radio" />
                <span>Mare</span>
              </div>
              <div className="stallion-input">
                <input type="radio" />
                <span>Stallion</span>
              </div>
            </div>
          </div>
          <div className="color-container">
            <span>Color</span>
            <select name="" id=""></select>
          </div>
          <div className="Temperament-container">
            <span>Temperament</span>
            <select name="" id=""></select>
          </div>
          <div className="input-keywords-container">
            <span>input keyword</span>
            <div className="input-keyword">
              <input type="text" />
              <span>+</span>
            </div>
          </div>
          <div className="save-edit-btns">
            <buttom className="save-btn">Save</buttom>
            <buttom className="edit-btn">Edit</buttom>
          </div>
          <div className="clear-match-btns">
            <buttom className="clear-btn">Clear</buttom>
            <NavLink to='/home/matchhorse' className="match-btn">Match</NavLink>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}
