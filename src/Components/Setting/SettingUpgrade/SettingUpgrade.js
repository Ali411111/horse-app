import React,{useState} from "react";
import "./SettingUpgrade.css";
import NavbarHome from "../../Home/NavbarHome/NavbarHome";
import Footer from "../../Home/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegCreditCard } from "react-icons/fa6";
import SettingLeftSidePart from "../SettingLeftSidePart/SettingLeftSidePart";
export default function SettingUpgrade() {


  return (
    <>
      <NavbarHome />
      <Container className="setting-container" fluid>
        <Row>
        <Col
            xl="3"
            lg="auto"
            md="auto"
            sm="auto"
            xs="auto"
            className="left-column"
          >
       <SettingLeftSidePart/>
          </Col>
          <Col xl="9" lg="auto" md="auto" sm="auto" xs="auto">
            <form action="#" className="upgrade-form">
              <span className="upgrade-form-title">Subscription</span>
              <div className="boxes-container">
                <div className="free-box">
                  <input type="radio" />
                  <span className="title-of-box">Basic Offer</span>
                  <span className="price-of-box">Free</span>
                </div>
                <div className="premium-box"> 
                  <input type="radio" />
                  <span className="title-of-box">Premium offer</span>
                  <span className="price-of-box">$50</span>
                </div>
                <div className="platinum-box">
                  <input type="radio" />
                  <span className="title-of-box">Platinum offer</span>
                  <span className="price-of-box">$100</span>
                </div>
              </div>
              <button className='upgrade-form-add-card-btn'>
                <FaRegCreditCard className="upgrade-form-add-card-btn-icon"/>
                Add Card
              </button>
              <div className="cardnumber-container">
                <span className="cardnunber-title">Card Number</span>
                <input type="text" />
              </div>
              <div className="date-cvv-container">
                <div className="Expirationdate-container">
                    <span className="Expirationdate-title">Expiration date</span>
                    <input type="text" />
                </div>
                <div className="cvv-container">
                    <span className="cvv-title">Cvv</span>
                    <input type="text" />
                </div>
              </div>
              <div className="Cardholdername-container">
                <span className="Cardholdername-title">Card holder name </span> 
                <input type="text" />
              </div>
            <div className="upgrade-buttons-container">
               <button className="upgrade-form-edit-btn">Edit</button>
              <button className="upgrade-form-confirm-btn">Confirm</button>
              <button className="upgrade-form-cancel-btn">Cancel</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
