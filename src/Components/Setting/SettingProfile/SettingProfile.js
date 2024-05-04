import React, { useContext, useEffect, useRef, useState } from "react";
import "./SettingProfile.css";
import NavbarHome from "../../Home/NavbarHome/NavbarHome";
import Footer from "../../Home/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { IoCameraOutline } from "react-icons/io5";
import SettingLeftSidePart from "../SettingLeftSidePart/SettingLeftSidePart";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { UserContext } from "../../Context/UserContext";
import Input from "@mui/material/Input";
import InputBase from '@mui/material/InputBase';
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
export default function SettingProfile() {
  const userContext = useContext(UserContext);
  const [userProfilePhoto, setUserProfilePhoto] = useState("");
  const [newUserProfilePhoto, setNewUserProfilePhoto] = useState([]);

  let EditBtn = useRef();
  let UserInfo = JSON.parse(localStorage.getItem("userInformation"));

  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userZipCode, setUserZipCode] = useState("");
  const [userState, setUserState] = useState("");
  const [userCountry, setUserCountry] = useState("");

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const editUserProfileHandler = (event) => {
    event.preventDefault();
    if (EditBtn.current.innerHTML === "Edit") {
      EditBtn.current.innerHTML = "Save";
      EditBtn.current.style.backgroundColor = "black";
      EditBtn.current.style.color = "#fff";
      document.querySelector(".profile-form-icon").classList.add("active");
      document
        .querySelector(".set-profile-photo")
        .classList.remove("Mui-disabled");
    } else {
      EditBtn.current.innerHTML = "Edit";
      EditBtn.current.style.backgroundColor = "#E1E1E1";
      EditBtn.current.style.color = "black";
      document.querySelector(".profile-form-icon").classList.remove("active");
      document
        .querySelector(".set-profile-photo")
        .classList.add("Mui-disabled");

      
      var myHeaders = new Headers();
      myHeaders.append("Authorization", UserInfo[0].token);
      var formdata = new FormData();
      if(newUserProfilePhoto.length){
        formdata.append(
        "profile_photo",
        newUserProfilePhoto[0],
        newUserProfilePhoto[0].name
      )
      }
      // formdata.append("email", userEmail);
      formdata.append("first_name", userFirstName);
      formdata.append("last_name", userLastName);
      formdata.append("bio", userBio);
      formdata.append("address", userAddress);
      formdata.append("city", userCity);
      formdata.append("zipcode", userZipCode);
      formdata.append("state", userState);
      formdata.append("country", userCountry);

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch("http://127.0.0.1:8000/api/v1/users/userprofile/", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result));

      setUserFirstName("");
      setUserLastName("");
      setUserBio("");
      setUserAddress("");
      setUserCity("");
      setUserZipCode("");
      setUserState("");
      setUserCountry("");
    }
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", UserInfo[0].token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/users/userprofile/", requestOptions)
      .then((response) => response.json())
      .then((result) => setUserProfilePhoto(result.profile_photo));
  }, []);

  return (
    <>
      <NavbarHome />
      <Container className="setting-container" fluid>
        <Row>
          <Col xl="3" lg="4" md="5" sm="auto" xs="auto" className="left-column">
            <SettingLeftSidePart />
          </Col>
          <Col xl="9" lg="8" md="7" sm="auto" xs="auto">
            <form action="#" className="setting-profile-form">
              <div className="profile-form-title-part">
                <span className="profile-form-title">Profile</span>
              </div>
              <div className="profile-form-img">
                <img src={userProfilePhoto} alt="" />
                <Button
                  component="label"
                  className="set-profile-photo"
                  disabled
                >
                  <IoCameraOutline className="profile-form-icon" />
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => {
                      setNewUserProfilePhoto([event.target.files[0]]);
                      console.log("aaaa", event.target.files[0]);
                    }}
                  />
                </Button>
              </div>
              <div className="fullname-container">
                <span className="fullname-title">First Name</span>
                <input
                  type="text"
                  value={userFirstName}
                  onChange={(event) => setUserFirstName(event.target.value)}
                />
              </div>
              <div className="fullname-container">
                <span className="fullname-title">Last Name</span>
                <input
                  type="text"
                  value={userLastName}
                  onChange={(event) => setUserLastName(event.target.value)}
                />
              </div>
              <div className="Email-container">
                <span className="Email-title">Email</span>
              
                  <InputBase className="EmailInput" value={UserInfo[0].email} disabled/>
              
              </div>
              <div className="bio-container">
                <span className="bio-title">Bio(optional)</span>
                <textarea
                  cols="30"
                  rows="10"
                  value={userBio}
                  onChange={(event) => setUserBio(event.target.value)}
                ></textarea>
              </div>
              <div className="Address-container">
                <span className="Address-title">Address</span>
                <input
                  type="text"
                  value={userAddress}
                  onChange={(event) => setUserAddress(event.target.value)}
                />
              </div>
              <div className="City-container">
                <span className="City-title">City</span>
                <input
                  type="text"
                  value={userCity}
                  onChange={(event) => setUserCity(event.target.value)}
                />
              </div>
              <div className="Zipcode-container">
                <span className="Zipcode-title">Zip code</span>
                <input
                  type="text"
                  value={userZipCode}
                  onChange={(event) => setUserZipCode(event.target.value)}
                />
              </div>
              <div className="State-container">
                <span className="State-title">State</span>
                <input
                  type="text"
                  value={userState}
                  onChange={(event) => setUserState(event.target.value)}
                />
              </div>
              <div className="Country-container">
                <span className="Country-title">Country</span>
                <input
                  type="text"
                  value={userCountry}
                  onChange={(event) => setUserCountry(event.target.value)}
                />
              </div>
              <div className="profile-form-edit-button">
                <button
                  ref={EditBtn}
                  className="profile-form-edit-btn"
                  onClick={editUserProfileHandler}
                >
                  Edit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
