import React from "react";
import styles from './../FirstSection/FirstSection.module.scss'
import fsImages from '../../../images/banner-img.png'

const FirstSection = () => {
  return (
    <div className={styles.fsContainer}>
      <div className={styles.fsText}>
        <h1>Improved Production level with Robotics</h1>
        <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
        <button>VIEW DETAILS</button>
      </div>
      <div className={styles.fsImg}>
        <img src={fsImages} alt="" />
      </div>
    </div>
  );
};

export default FirstSection;
