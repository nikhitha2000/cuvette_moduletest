import React from 'react'
import styles from '../components/Home.module.css';
import notebookImage from '../assets/Home.png';
import lock from '../assets/lock.png';

function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.sidebar}>
     <h1 className={styles.header}>Pocket Notes</h1>
     <button className={styles.GroupButton}>+ Create Notes group</button>
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
    </div>
  )
}

export default Home