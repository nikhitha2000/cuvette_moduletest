import React, { useState, useEffect } from "react";
import styles from "../components/Home.module.css";
import notebookImage from "../assets/Home.png";
import lock from "../assets/lock.png";
import CreateGroupForm from "./CreateGroupForm";
import Message from "../components/Message";
import add from "../assets/add.png";
import { getInitials } from "../utils/getInitials";

function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    console.log("Loaded groups:", storedGroups);
    setGroups(storedGroups);
  }, []);

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleGroupCreate = (group) => {
    console.log("Creating group:", group);
    const newGroups = [...groups, group];
    setGroups(newGroups);
    localStorage.setItem("groups", JSON.stringify(newGroups));
  };

  const handleGroupSelect = (group) => {
    console.log("Selected group:", group);
    console.log("Initials for the group:", getInitials(group.name));
    setSelectedGroup(group);
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h1 className={styles.header}>Pocket Notes</h1>
        <div className={styles.groupList}>
          {groups.map((group, index) => (
            <div
              key={index}
              className={`${styles.groupItem} ${
                selectedGroup === group ? styles.selectedGroup : ""
              }`}
              onClick={() => handleGroupSelect(group)}
            >
              <div
                className={styles.groupIcon}
                style={{ backgroundColor: group.color }}
              >
                {getInitials(group.name)}
              </div>
              <span className={styles.groupName}>{group.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        {selectedGroup ? (
          <Message group={selectedGroup} />
        ) : (
          <div className={styles.innercontent}>
            <img
              src={notebookImage}
              alt="Notebook"
              className={styles.notebookImage}
            />
            <h1 className={styles.heading}>Pocket Notes</h1>
            <p className={styles.info}>
              Send and receive messages without keeping your phone online.
            </p>
            <p className={styles.info}>
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
        )}
        <div className={styles.footer}>
          <img src={lock} alt="lock" className={styles.encryption} />
          <span>end-to-end encrypted</span>
        </div>
      </div>
      {isFormVisible && (
        <CreateGroupForm
          onClose={handleCloseForm}
          onGroupCreate={handleGroupCreate}
        />
      )}
     <img src={add}  alt="Create Notes Group"className={styles.floatingButton} onClick={handleOpenForm}/>
    </div>
  );
}

export default Home;
