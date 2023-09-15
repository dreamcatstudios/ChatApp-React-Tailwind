import React, { useState } from 'react'
import SidePannel from '../components/SidePannel'
import "./ChattingPage.css"
import Message from '../components/Message'

const ChattingPage = () => {
  // const [state,setState] = useState(false);
  // function onClickMenuHandler(){  
  //   setState(!state);
  // }
  return (
     <div className="Chatting-Page">
        <SidePannel/>
        <div className="profile-Sec">
          {/* <i class="ri-menu-2-line" onClick={onClickMenuHandler()}></i> */}
          <p>Chatting App</p>
            <div id="profile-dp">
                <img src="" alt="" />
            </div>
            <h1>Alexa Joe</h1>
        </div>
        <div className="chatting-container">
            <div id="message-display-container">
              <Message/>
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