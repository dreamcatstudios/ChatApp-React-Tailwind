import React from 'react'
import SidePannel from '../components/SidePannel'
import "./ChattingPage.css"
const ChattingPage = () => {
  return (
     <div className="Chatting-Page">
        <SidePannel/>
        <div className="profile-Sec">
            <div id="profile-dp">
                <img src="" alt="" />
            </div>
            <h1>Alexa Joe</h1>
        </div>
        <div className="chatting-container">
            <div className="write-message">
              <input type="text" className = "message-input" />
            </div>
        </div>
     </div>
  )
}

export default ChattingPage