import React, { useState } from "react";
import "./Setting.css";
import NavbarHome from "./../Home/NavbarHome/NavbarHome";
import Footer from "./../Home/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import SettingLeftSidePart from "./SettingLeftSidePart/SettingLeftSidePart";
import { useNavigate } from "react-router-dom";
export default function Setting() {
 let navigate = useNavigate()
  const goToSettingUpgrade = (event)=>{
    event.preventDefault()
    navigate('/Setting/upgrade',{replace:true})
  }

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
            <SettingLeftSidePart />
          </Col>
          <Col xl="9" lg="auto" md="auto" sm="auto" xs="auto" className="right-column">
            <div className="title-boxes">
              <span className="main-title-title-boxes">Subscriptions</span>
              <div className="all-boxes">
                <div className="box-items">
                  <span className="first-box-title">Basic offer</span>
                  <div className="box-details">
                    <span className="box-details-price">Free</span>
                    <p className="box-details-describtion">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At at elit in risus vestibulum vulputate enim ultrices.
                    </p>
                    <div className="box-options">
                      <CheckIcon className="check-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CloseIcon className="close-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CloseIcon className="close-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CloseIcon className="close-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CloseIcon className="close-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CloseIcon className="close-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <button className="box-btn">Get Started</button>
                  </div>
                </div>
                <div className="box-items">
                  <span className="first-box-title">Premium offer</span>
                  <div className="box-details-second">
                    <span className="box-details-price">$50</span>
                    <p className="box-details-describtion">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At at elit in risus vestibulum vulputate enim ultrices.
                    </p>
                    <div className="box-options">
                      <CheckIcon className="check-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CheckIcon className="check-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CheckIcon className="check-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CloseIcon className="close-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CloseIcon className="close-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CloseIcon className="close-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>

                    <button className="box-btn">Get Started</button>
                  </div>
                </div>
                <div className="box-items">
                  <span className="first-box-title">Platinum offer</span>
                  <div className="box-details-third">
                    <span className="box-details-price">$100</span>
                    <p className="box-details-describtion">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At at elit in risus vestibulum vulputate enim ultrices.
                    </p>
                    <div className="box-options">
                      <CheckIcon className="check-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CheckIcon className="check-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CheckIcon className="check-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CheckIcon className="check-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CheckIcon className="check-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>
                    <div className="box-options">
                      <CheckIcon className="check-icon" />
                      <p>Lorem ipsum Enim dolor a vel aliquam.</p>
                    </div>

                    <button className="box-btn">Get Started</button>
                  </div>
                </div>
              </div>
             <div className="title-boxes-close-btn-container">

              <button className="title-boxes-close-btn" onClick={goToSettingUpgrade}>Close</button>
             </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />

     
    </>
  );
}
