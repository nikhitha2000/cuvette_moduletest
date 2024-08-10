import React, { useState } from "react";
import styles from "./CreateGroupForm.module.css";

const colors = ["#B38BFA","#FF79F2","#43E6FC","#F19576","#0047FF","#6691FF"];

function CreateGroupForm({ onClose }) {
    const [selectedColor, setSelectedColor] = useState('');
    const [groupName, setGroupName] = useState('');

  const handleSubmit = () => {
    if (selectedColor && groupName) {
      console.log(`Group created: ${groupName}, Color: ${selectedColor}`);
      onClose();
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.innercontainer}>
        <h2 className={styles.title}>Create New Notes group</h2>
        <div className={styles.inputContainer}>
        <label className={styles.label}>Group Name</label>
        <input type="text" className={styles.input} value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder="Enter your group name..." />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Choose colour</label>
        <div className={styles.colorButtons}>
            {colors.map((color, index) => (
              <button
              key={index}
              className={`${styles.selectcolor} ${selectedColor === color ? styles.selected : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
            ))}
        </div>
        </div>
        <button className={styles.createButton} onClick={handleSubmit}>Create</button>
        </div>
        </div>
    
  );
}

export default CreateGroupForm;
