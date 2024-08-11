import React, { useState, useEffect } from "react";
import styles from "../components/Message.module.css";
import send from "../assets/send.png";

function Messages({ group }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem(group.name)) || [];
    setMessages(storedMessages);
  }, [group]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
     handleSendMessage();
    }
  };
  const handleSendMessage = () => {
    if (newMessage.trim()) {
        const timestamp = new Date();
        const formattedTime = timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        const formattedDate = timestamp.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
  
        });
        const message = {
            text:newMessage,
            timestamp: `${formattedTime} ${formattedDate}`,
        };
      const updatedMessages = [...messages, message];
      setMessages(updatedMessages);
      localStorage.setItem(group.name, JSON.stringify(updatedMessages));
      setNewMessage("");
    }
  };

  return (
    <div className={styles.messageContainer}>
      <div className={styles.header}>
        <div
          className={styles.groupIcon}
          style={{ backgroundColor: group.color }}
        >
          {group.name.slice(0, 2).toUpperCase()}
        </div>
        <h2 className={styles.groupName}>{group.name}</h2>
      </div>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div key={index} className={styles.message}>
            <div className={styles.messageContent}>
            <div className={styles.timestamp}>
                <div className={styles.time}>{message.time}</div>
                <div className={styles.date}>{message.date}</div>
          </div>
          <div className={styles.text}>{message.text}</div>
          </div>
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
        <img src = {send} alt="send" onClick={handleSendMessage} />
      </div>
    </div>
  );
}

export default Messages;
