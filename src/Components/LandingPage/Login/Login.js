import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const userContext = useContext(UserContext);
  let navigate = useNavigate();
  const changeSignUp = () => {
    document.querySelector(".sign-up").classList.add("active");
    document.querySelector(".login").classList.remove("active");
  };

  const changeLogin = () => {
    document.querySelector(".login").classList.add("active");
    document.querySelector(".sign-up").classList.remove("active");
  };

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  if (userEmail.length > 0 && userPassword.length > 0) {
    document.querySelector(".error-false-password").classList.remove("active");
  }

  const submitLoginHandler = (event) => {
    event.preventDefault();



    var formdata = new FormData();
    formdata.append("username", userEmail);
    formdata.append("password", userPassword);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/users/login/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.token) {
          
          let newUser = {
            token:`Token ${result.token}`,
            email: userEmail,
            password: userPassword,
          };
          localStorage.setItem('userInformation',JSON.stringify([newUser]))
         
            toast.success("You have successfully logged in", {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setTimeout(() => {
              userContext.setIsLogin(true)
              navigate("/home", { replace: true });
              
            }, 2000);
          
        } else {
          document
            .querySelector(".error-false-password")
            .classList.add("active");
          setUserEmail("");
          setUserPassword("");
        }
      });
  };

  return (
    <>
      <ToastContainer/>
      <div className="login-container">
        <div className="left-side">
          <Link to="/" className="left-side-logo">
            <img src="/images/logo.0b8d00dc33b5773961348211261b0a9b.svg" />
            <span className="navbar-leftside-text">ENBARR</span>
          </Link>

          <div className="login-left-side-form">
            <div className="Top-leftside">
              <Link className="sign-up" to="/sign up">
                <div onClick={changeSignUp}>Sign up</div>
              </Link>
              <div onClick={changeLogin} className="login active">
                Login
              </div>
            </div>
            <form className="login-form">
              <span className="form-title">Login</span>
              <div className="email-container">
                <span>Email</span>
                <input
                  type="email"
                  className="email"
                  placeholder="Email"
                  value={userEmail}
                  onChange={(event) => setUserEmail(event.target.value)}
                />
              </div>
              <div className="password-container">
                <div>
                  <span className="password-title">Password</span>
                  <input
                    type="password"
                    placeholder="password"
                    className="password"
                    value={userPassword}
                    onChange={(event) => setUserPassword(event.target.value)}
                  />
                  <span className="error-false-password">
                    The Email Or Password Entered Is Incorrect
                  </span>
                </div>
              </div>
              <div className="forget-pass">
                <a href="#" className="reset-pass">
                  Forgot Password
                </a>
              </div>
              <button
                className="form-submit-btn"
                type="submit"
                onClick={submitLoginHandler}
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="right-side">
          <div className="images">
            <div className="first-bg-img"></div>
            <div className="second-bg-img"></div>
            <img
              className="hourse-img"
              src="/images/landingImage.59c1250ddffd868f86c9.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
