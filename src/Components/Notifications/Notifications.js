import React, { useState } from "react";
import "./Notifications.css";
import NavbarHome from "./../Home/NavbarHome/NavbarHome";
import Footer from "./../Home/Footer/Footer";
import { SlOptions } from "react-icons/sl";
import { useEffect } from "react";
export default function Notifications() {
  
  let UserInfo = JSON.parse(localStorage.getItem("userInformation"));
  const [allUnreadNotifications , setAllUnreadNotifications] = useState()
  useEffect(()=>{
    var myHeaders = new Headers();
myHeaders.append("Authorization",UserInfo[0].token);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/api/v1/notifications/notifications/", requestOptions)
  .then(response => response.json())
  .then(result =>{
    console.log(result);
    setAllUnreadNotifications(result)} )
  },[])
  
  return (
    <>
      <NavbarHome />
      {allUnreadNotifications ?(
           <div className="notifications-container">
           <span className="notification-title">Notification</span>
           <div className="notifications-title-container">
             <span className="notifications-left-title">All notifications</span>
             <span className="notifications-right-title">Mark all as read</span>
           </div>
           <div className='notification-main-items'>
                {allUnreadNotifications.results.map(obj=>(
               <div className="img-message-container">
                   <img src={obj.user_profile.profile_photo} alt="" />
                   <span>{obj.description}</span>
               </div>
                ))}
               <SlOptions className="check-notification-icon"/>
           </div>
        
          
         </div>
      ):(
        <span className="no-data-found">No Data Found...</span>
      )}
   
      <Footer />
    </>
  );
}
