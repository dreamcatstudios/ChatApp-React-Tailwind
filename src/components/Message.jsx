import React from 'react'
import "./Message.css"
const Message = (props) => {
  return (
    <div className="message">
        <div id="profile">
            <img src={props.profile} alt=""/>
        </div>
        <div id="message-text">{props.text}</div>
    </div>
  )
}

export default Message