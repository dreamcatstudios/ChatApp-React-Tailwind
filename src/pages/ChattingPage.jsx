import React, { useState } from 'react'
import SidePannel from '../components/SidePannel'
import "./ChattingPage.css"
import Message from '../components/Message'


const ChattingPage = () => {
  const objects={
      profile : "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      name : "Harsh Vardhan",
      text : "Hey How you Doing?"
    }
  return (
     <div className="Chatting-Page">
        <SidePannel/>
        <div className="profile-Sec">
          <i class="ri-menu-2-line"></i>
          <p>Chatting App</p>
            <div id="profile-dp">
                <img src={objects.profile} alt="" />
            </div>
            <h1>{objects.name}</h1>
        </div>
        <div className="chatting-container">
            <div id="message-display-container">
              <Message profile = {objects.profile} text = {objects.text}/>
            </div>
            <div className="write-message">
              <input type="text" className = "message-input" />
              <i class="ri-mic-line"></i>
              <i class="ri-send-plane-fill"></i>
            </div>
        </div>
     </div>
  )
}

export default ChattingPage