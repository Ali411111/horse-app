import React, { useContext, useEffect, useState } from "react";
import "./HorseDetails.css";
import CarouselsPart from "./CarouselsPart/CarouselsPart";
import { GoHeart } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import NavbarHome from "./../NavbarHome/NavbarHome";
import Footer from "./../Footer/Footer";
import { UserContext } from "../../Context/UserContext";
export default function HorseDetails() {
  const userContext = useContext(UserContext);

  let UserInfo = JSON.parse(localStorage.getItem("userInformation"));
  let horseIdDec = JSON.parse(localStorage.getItem("Horseid&dic"));
  let horseId = userContext.horseId;

    console.log(horseId);
  const [horseDetails, setHorseDetails] = useState([]);
  const [allDiscipline,setAllDiscipline] = useState([])
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", UserInfo[0].token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `http://127.0.0.1:8000/api/v1/horse/?horse-id=${horseId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if(result.id){

          console.log(result);
            setHorseDetails([result])
        }
        
      });




      var myHeaders = new Headers();
      myHeaders.append("Authorization",UserInfo[0].token);
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("http://127.0.0.1:8000/api/v1/disciplines/", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setAllDiscipline(result)})


  }, []);

  console.log(userContext.horseDisciplineId);

//  let objectOfHorseidDec =  horseIdDec.find(obj=>obj.id===horseId)

//  let horseDisciplineObject = allDiscipline.find(obj=>obj.id===objectOfHorseidDec.disciplineID)

  




  return (
      <div className="horse-details-container">
      <NavbarHome />
        {horseDetails.length>0 ? (

<form action="#" className="horsedetails-form">
<CarouselsPart />
<div className="profile-img-blur-part">
  <img src="/images/profileimage.713a51c0eb709f20c441.png" alt="" />
  <span>Mark Dan</span>
</div>
<div className="message-like-buttons">
  <button className="like-horse-btn">
    <GoHeart className="like-horse-icon" />
  </button>
  <button className="email-horse-btn">
    <TfiEmail className="email-horse-icon" />
  </button>
</div>
<span className="name-of-horse">{horseDetails[0].title}</span>
<div className="location-duration-container">
  <IoLocationOutline className="horse-location-icon" />
  <span>4.5km</span>
</div>
<span className="price-of-horse">${horseDetails[0].price}</span>
<p className="horsedetails-describtion">
{horseDetails[0].description}
</p>
<span className="Characteristics-title">Characteristics</span>
<div className="Characteristics-part">
  <div className="breed-part-container">
    <span className="breed-part-title">Breed</span>
    <span className="breed-part-value">{horseDetails[0].breed.breed}</span>
  </div>
  <div className="Gender-part-container">
    <span className="Gender-part-title">Gender</span>
    <span className="Gender-part-value">{horseDetails[0].gender}</span>
  </div>
  <div className="Age-part-container">
    <span className="Age-part-title">Age</span>
    <span className="Age-part-value">{horseDetails[0].age}</span>
  </div>
  <div className="Color-part-container">
    <span className="Color-part-title">Color</span>
    <span className="Color-part-value">{horseDetails[0].color.color}</span>
  </div>
  <div className="Height-part-container">
    <span className="Height-part-title">Height</span>
    <span className="Height-part-value">{horseDetails[0].height}ft</span>
  </div>
  <div className="Temperament-part-container">
    <span className="Temperament-part-title">Temperament</span>
    <span className="Temperament-part-value">{horseDetails[0].temperament.temperament}</span>
  </div>
  <div className="Discipline-part-container">
    <span className="Discipline-part-title">Discipline</span>
    {/* <span className="Discipline-part-value">{horseDisciplineObject.discipline}</span> */}
  </div>
  <div className="Price-part-container">
    <span className="Price-part-title">Price</span>
    <span className="Price-part-value">${horseDetails[0].price}</span>
  </div>
</div>
</form>

        ) : (   
        <form action="#" className="horsedetails-form">
        <CarouselsPart />
        <div className="profile-img-blur-part">
          <img src="/images/profileimage.713a51c0eb709f20c441.png" alt="" />
          <span>Mark Dan</span>
        </div>
        <div className="message-like-buttons">
          <button className="like-horse-btn">
            <GoHeart className="like-horse-icon" />
          </button>
          <button className="email-horse-btn">
            <TfiEmail className="email-horse-icon" />
          </button>
        </div>
        <span className="name-of-horse">Rohear</span>
        <div className="location-duration-container">
          <IoLocationOutline className="horse-location-icon" />
          <span>4.5km</span>
        </div>
        <span className="price-of-horse">$4,500</span>
        <p className="horsedetails-describtion">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          feugiat arcu, at vivamus tristique tristique cursus nec. Ipsum, auctor
          porttitor massa pellentesque varius donec placerat massa ac. Mattis
          purus sit urna sollicitudin posuere cursus amet, ultricies. In
          pharetra at vitae in aenean fames ullamcorper egestas. Tempus id duis
          neque, eget aliquet venenatis metus placerat tortor. Ac aliquam est
          nisi adipiscing molestie sed sagittis. Tellus tincidunt mi nulla
          molestie leo risus faucibus integer. Eget odio aliquam non id sed id
          quis natoque. Habitasse morbi convallis metus, non amet nunc arcu sed.
          Nec eleifend gravida non hendrerit nulla. Morbi volutpat arcu egestas
          ultricies tristique elit pellentesque pellentesque.
        </p>
        <span className="Characteristics-title">Characteristics</span>
        <div className="Characteristics-part">
          <div className="breed-part-container">
            <span className="breed-part-title">Breed</span>
            <span className="breed-part-value">In porttitor.</span>
          </div>
          <div className="Gender-part-container">
            <span className="Gender-part-title">Gender</span>
            <span className="Gender-part-value">Male</span>
          </div>
          <div className="Age-part-container">
            <span className="Age-part-title">Age</span>
            <span className="Age-part-value">18</span>
          </div>
          <div className="Color-part-container">
            <span className="Color-part-title">Color</span>
            <span className="Color-part-value">Brown</span>
          </div>
          <div className="Height-part-container">
            <span className="Height-part-title">Height</span>
            <span className="Height-part-value">6 ft</span>
          </div>
          <div className="Temperament-part-container">
            <span className="Temperament-part-title">Temperament</span>
            <span className="Temperament-part-value">In porttitor.</span>
          </div>
          <div className="Discipline-part-container">
            <span className="Discipline-part-title">Discipline</span>
            <span className="Discipline-part-value">In porttitor.</span>
          </div>
          <div className="Price-part-container">
            <span className="Price-part-title">Price</span>
            <span className="Price-part-value">$4500</span>
          </div>
        </div>
      </form>
      )}
   
      <Footer />
    </div>
  );
}
