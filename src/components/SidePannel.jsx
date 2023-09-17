import React from 'react'
import "./SidePannel.css"
const SidePannel = () => {
  return (
    <div className="sidePannel">
        <div id="infoSection">
            <h2>Chatting App</h2>
            <div id="infoSection-div">
              <h1 id = "chatting"> <i class="ri-chat-1-line"></i>
              Chatting</h1>
              <h1 id = "setting">
              <i class="ri-settings-4-line" ></i>Setting</h1>
              <h1 id = "logoutsi"> <i class="ri-logout-circle-r-line"></i>Log Out</h1>
            </div>
        </div>
    </div>
  )
}

export default SidePannel