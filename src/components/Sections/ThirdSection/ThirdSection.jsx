import React from "react";
import styles from "./ThirdSection.module.scss";
import tsLogo from './../../../images/about-img.png'

const ThirdSection = () => {
  return (
    <div className={styles.tsContainer}>
      <div className={styles.tsImage}>
        <img src={tsLogo} alt="" />
      </div>
      <div className={styles.tsText}>
        <h1>Globally Connected <br /> by Large Network</h1>
        <p>We are here to listen from you deliver exellence</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
          minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor.
        </span>
        <button>GET DETAILS</button>
      </div>
    </div>
  );
};

export default ThirdSection;
