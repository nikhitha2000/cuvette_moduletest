import React, { useState, useEffect } from "react";
import styles from "../components/Message.module.css";
import send from "../assets/send.png";
import { getInitials , isMobileDevice } from "../utils/getInitials";
import back from "../assets/back.png";
function Messages({ group ,onBack }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem(group.name)) || [];
    setMessages(storedMessages);
  }, [group]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newMessage.trim()) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const timestamp = new Date();
      const formattedDate = timestamp.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const formattedTime = timestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
  
      const message = {
        text: newMessage,
        timestamp: `${formattedDate}  ${formattedTime}`,
      };
      
      const updatedMessages = [...messages, message];
      setMessages(updatedMessages);
      localStorage.setItem(group.name, JSON.stringify(updatedMessages));
      setNewMessage("");
    }
  };
  

  const handleImageClick = () => {
    if (newMessage.trim()) {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.messageContainer}>
      <div className={styles.header}>
      {isMobileDevice() && (
          <img
            src={back}
            alt="Back"
            className={styles.backButtonImage}
            onClick={onBack}
          />
        )}
        <div className={styles.groupIcon} style={{ backgroundColor: group.color }}>
        {getInitials(group.name)}
        </div>
        <h2 className={styles.groupName}>{group.name}</h2>
      </div>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div key={index} className={styles.message}>
            <p className={styles.text}>{message.text}</p>
            <div className={styles.timestamp}>{message.timestamp}</div>
          </div>
        ))}
      </div>
      <div className={styles.inputcontainer}>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Enter your text here..."
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={send} alt="send" onClick={handleImageClick} />
      </div>
    </div>
  );
}

export default Messages;
