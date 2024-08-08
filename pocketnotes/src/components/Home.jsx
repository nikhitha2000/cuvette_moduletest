import React, { useState } from 'react';
import styles from '../components/Home.module.css';
import notebookImage from '../assets/Home.png';
import lock from '../assets/lock.png';
import CreateGroupForm from './CreateGroupForm';

function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };
  return (
    <div className={styles.container}>
     <div className={styles.sidebar}>
     <h1 className={styles.header}>Pocket Notes</h1>
     <button className={styles.GroupButton} onClick={handleOpenForm}>+ Create Notes group</button>
     </div>
        <div className= {styles.right}>
            <div className={styles.innercontent}>
              <img src={notebookImage} alt="Notebook" className={styles.notebookImage} />
              <h1 className={styles.heading}>Pocket Notes</h1>
              <p className={styles.info}>Send and receive messages without keeping your phone online.</p>
              <p className={styles.info}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            </div>
            <div className={styles.footer}>
              <img src={lock} alt="lock" className={styles.encryption}/>
              <span>end-to-end encrypted</span>
            </div>
        </div>
        {isFormVisible && <CreateGroupForm onClose={handleCloseForm} />}
    </div>
  )
}

export default Home