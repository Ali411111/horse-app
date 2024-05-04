import React, { useState,useEffect } from 'react'
import './Messages.css'
import NavbarHome from '../Home/NavbarHome/NavbarHome'
import { CiSearch } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { GrAttachment } from "react-icons/gr";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendIcon from '@mui/icons-material/Send';
import io from 'socket.io-client';
export default function Messages() {

const [messageOfUser,setMessageOfUser] = useState('')
const [answerOfAdmin,setAnswerOfAdmin] = useState('')

const socket = io('http://127.0.0.1:8000/api/v1/chat/conversation/');


useEffect(() => {
  socket.on('GET', (data) => {
    console.log('Received data:', data);
    // Update React state or perform other actions based on the data
  });

  // return () => {
    // Clean up socket connections if needed
    // socket.disconnect();
  // };
}, []);



const sendDataToServer = () => {
  const data = { message:messageOfUser};
  socket.emit('client-event', data);
};


  
  return (
    <>
      <NavbarHome/>
    <div className='messages-container'>
      <div className="messages-leftside">
        <span className='messages-leftside-title'>Message</span>
        <div className="messages-leftside-searchbox">
          <input type="text" />
          <CiSearch className='messages-leftside-search-icon'/>
        </div>
        <img src="/images/profileimage.713a51c0eb709f20c441.png" alt="" />
        <span className='online-users'>john Fox</span>
      <span className='messages-leftside-recent-title'>Recent</span>
    <div className="messages-leftside-recents">
      <img src="/images/profileimage.713a51c0eb709f20c441.png" alt="" />
      <div className='name-message-ofuser'>
        <span>james Fox</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div> 
      <div className='time-number-ofmessages'>
        <span>11:02pm</span>
        <span className='number-of-messages'>3</span>
      </div>
 
    </div>
      </div>
      <div className="messages-rightside">
        <div className="messages-rightside-toppart">
          <div className="toppart-items">
            <div className='toppart-leftside'>
              <img src="/images/profileimage.713a51c0eb709f20c441.png" alt="" />
              <span>james Fox</span>
            </div>
            <SlOptions className='toppart-icon'/>
          </div>
        </div>
      <div className="messages-rightside-mainpart">
        <div className="user-img-message">
          <img src="/images/profileimage.713a51c0eb709f20c441.png" alt="" />
          <div className='user-message'>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti fuga suscipit deserunt pariatur porro, corporis laborum, dolore voluptas nisi delectus atque minus iure nam nemo ipsum eaque ea magnam nostrum voluptate similique cum harum. Aspernatur veritatis vitae corrupti? Unde eveniet porro mollitia itaque ex, aliquam fugit velit doloribus recusandae!</span>
          </div>
          <span className='user-time-message'>11:25am</span>
        </div>
       
        <div className='admin-answer'>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A enim quibusdam eius rerum soluta ea eaque, maxime eos blanditiis repellat, libero repudiandae at omnis natus eligendi delectus voluptatem nihil. Totam consequuntur corrupti atque architecto ullam recusandae, quae praesentium quis modi nulla voluptatibus, sint fugit magnam dolorum et est expedita voluptas?</span>
          <span className='admin-time-message'>11:25am</span>
        </div>


      </div>
        <div className="send-message-box">
          <div className="input-icons">
          <GrAttachment className='attach-icon'/>
            <input type="text" value={messageOfUser} onChange={(event)=>setMessageOfUser(event.target.value)}/>
            <InsertEmoticonIcon className='emoji-icon'/>
            <CameraAltIcon className='camera-icon'/>
          </div>
          <div className="send-message">
            <button onClick={sendDataToServer}><SendIcon className='send-icon'/></button>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}
