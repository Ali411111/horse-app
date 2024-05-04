import React,{useState} from "react";
import "./SettingChangePassword.css";
import NavbarHome from "../../Home/NavbarHome/NavbarHome";
import Footer from "../../Home/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import SettingLeftSidePart from "../SettingLeftSidePart/SettingLeftSidePart";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function SettingChangePassword() {
 const [password , setPassword] = useState('')
 const [confirmpassword , setConfirmPassword] = useState('')
  

  let navigate = useNavigate()
  if(password.length>0 && confirmpassword.length>0){
    document.querySelector('.error-pass-confirm').classList.remove('active')
    document.querySelector('.password-chareckter').classList.remove('active')
  }

  let UserInfo = JSON.parse(localStorage.getItem('userInformation'))
  var myHeaders = new Headers();
  myHeaders.append("Authorization",UserInfo[0].token);
  
  var formdata = new FormData();
  formdata.append("current_password", UserInfo[0].password);
  formdata.append("password1", password);
  formdata.append("password2", confirmpassword);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
const changePasswordHandler = (event)=>{
  event.preventDefault()
  if(password.length>= 8 && confirmpassword.length >=8){

    if(password===confirmpassword){
      fetch("http://127.0.0.1:8000/api/v1/users/reset-password/", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      toast.success("Your Password Has Been Successfully Changed", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    
      navigate('/login',{replace:true})
      
      setPassword('')
     setConfirmPassword('')
    }else{
      document.querySelector('.error-pass-confirm').classList.add('active')
      setPassword('')
      setConfirmPassword('')
    }
  }else{
    document.querySelector('.password-chareckter').classList.add('active')
    setPassword('')
    setConfirmPassword('')
  }
  

}






  return (
    <>
    <ToastContainer/>
      <NavbarHome />
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
          <Col xl="9" lg="8" md="7" sm="6" xs="auto">
            <form action="#" className="settingchangepassword-form">
              <span className="changepass-form-title">Change password</span>
              <div className="current-pass-container">
                <span className="current-pass-title">Current password</span>
                <input type="text" value={UserInfo[0].password} disabled/>
              </div>
              <div className="new-pass-container">
                <span className="new-pass-title">New Password</span>
                <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                <span className="password-chareckter">Password Should Be Minimum Of 8 Characters</span>
              </div>
              <div className="confirm-pass-container">
                <span className="confirm-pass-title">Confirm Password</span>
                <input type="password" value={confirmpassword} onChange={(event)=>setConfirmPassword(event.target.value)}/>
              </div>
              <span className="error-pass-confirm">Please Enter Your Confirm Password Corectly</span>
              <div className='changepassword-button'>
                <button className="changepassword-btn" onClick={changePasswordHandler}>Change Password</button>
                </div>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
