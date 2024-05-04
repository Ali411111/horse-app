import React,{useContext, useState} from "react";
import './SettingFeedback.css'
import NavbarHome from './../../Home/NavbarHome/NavbarHome'
import Footer from './../../Home/Footer/Footer'
import { Container, Row, Col } from "react-bootstrap";
import SettingLeftSidePart from "../SettingLeftSidePart/SettingLeftSidePart";
import {UserContext} from './../../Context/UserContext'
export default function SettingFeedback() {
  const userContext = useContext(UserContext)
 
  let UserInfo = JSON.parse(localStorage.getItem('userInformation'))

  const [message , setMessage] = useState()
  const [email , setEmail] = useState(UserInfo[0].email)
  
  

  var myHeaders = new Headers();
  myHeaders.append("Authorization",UserInfo[0].token  );

  let formdata = new FormData();
formdata.append("message", message);
formdata.append("email", email);

const submitFeedbackHandler = (event)=>{
  event.preventDefault()
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:8000/api/v1/feedback/feedback/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    setMessage('')
}


  return (
    <>
    <NavbarHome/>
      <Container className="setting-container" fluid>
        <Row>
        <Col
            xl="3"
            lg="4"
            md="5"
            sm="6"
            xs="auto"
            className="left-column"
          >
      <SettingLeftSidePart/>
          </Col>
          <Col xl="9" lg='8' md="7" sm="6" xs="auto">
              <form action="#" className="feedback-form">
                <span className="feeedback-form-title"> Support/ Send Feedback</span>
                <div className="feedback-email-container">
                  <span className="feedback-email-title">Email</span>
                  <input type="text" value={UserInfo[0].email}/>
                </div>
                <div className="feedback-messages-container">
                  <span className="feedback-messages-title">Message</span>
                  <textarea cols="30" rows="10" value={message} onChange={(event)=>setMessage(event.target.value)}></textarea>
                </div>
               <div className="feedback-form-button">
                <button className="feedback-form-btn" onClick={submitFeedbackHandler}>Submit</button>
                </div> 
              </form>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}
