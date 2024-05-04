import React, { useContext, useState,useEffect } from "react";
import "./SingUpLogin.css";
import { Link, json, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { ToastContainer, toast } from "react-toastify";
export default function SingUpLogin() {
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
  const [userConfirmPassword, setUserConfirmPassword] = useState("");

  if (userPassword.length > 0 && userConfirmPassword.length > 0) {
    document.querySelector(".error-pass-confirm").classList.remove("active");
  }
  const submitSignUpHandler = (event) => {
    event.preventDefault();

    var formdata = new FormData();
    formdata.append("email", userEmail);
    formdata.append("password", userPassword);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/users/signup/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));
    if (userPassword === userConfirmPassword) {
      toast.success("Your account has been successfully created", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 4000);
    } else {
      document.querySelector(".error-pass-confirm").classList.add("active");
      setUserPassword("");
      setUserConfirmPassword("");
    }
  };

  
  return (
    <>
      <ToastContainer />
      <div className="signup-login">
        <div className="left-side">
          <Link to="/" className="Left-side-logo">
            <img src="/images/logo.0b8d00dc33b5773961348211261b0a9b.svg" />
            <span className="navbar-leftside-text">ENBARR</span>
          </Link>

          <div className="left-side-form">
            <div className="top-leftside">
              <div onClick={changeSignUp} className="sign-up active">
                Sign up
              </div>
              <Link to="/login" className="login">
                <div onClick={changeLogin}>Login</div>
              </Link>
            </div>
            <form className="form">
              <span className="form-title">Sign up</span>
              <div className="sign-up-email-container">
                <span>Email</span>
                <input
                  type="email"
                  className="sign-up-email"
                  placeholder="Email"
                  value={userEmail}
                  onChange={(event) => setUserEmail(event.target.value)}
                />
              </div>
              <div className="sign-up-password-container">
                <div>
                  <span className="sign-up-password-title">
                    Create Password
                  </span>
                  <input
                    type="password"
                    placeholder="password"
                    className="sign-up-password"
                    value={userPassword}
                    onChange={(event) => setUserPassword(event.target.value)}
                  />
                </div>
                <div>
                  <span className="sign-up-password-title">
                    Confirm Password
                  </span>
                  <input
                    type="password"
                    placeholder="password"
                    className="sign-up-password"
                    value={userConfirmPassword}
                    onChange={(event) =>
                      setUserConfirmPassword(event.target.value)
                    }
                  />
                </div>
              </div>
              <span className="error-pass-confirm">
                Please Confirm Your Password Corectly
              </span>
              <div className="first-checkbox">
                <input type="checkbox" />
                <span>I have read Terms and Conditions and Privacy Policy</span>
              </div>
              <div className="second-checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <button
                className="form-submit-btn"
                type="submit"
                onClick={submitSignUpHandler}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="right-side">
          <div className="body-images">
            <div className="First-bg-img"></div>
            <div className="Second-bg-img"></div>
            <img
              className="body-img"
              src="/images/landingImage.59c1250ddffd868f86c9.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
