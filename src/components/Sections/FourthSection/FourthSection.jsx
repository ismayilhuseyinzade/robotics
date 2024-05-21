import React from "react";
import styles from "./FourthSection.module.scss";
import { CiUser } from "react-icons/ci";

const FourthSection = () => {
  return (
    <div className={styles.fourthSectionContainer}>
      <div className={styles.fourthSectionText}>
        <h1>Some Features that Made us Unique</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className={styles.fourthSectionBottom}>
        <div className={styles.fourthSectionBox}>
          <h2> <span><CiUser/></span> Professional Service</h2>
          <span>
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </span>
        </div>
        <div className={styles.fourthSectionBox}>
          <h2> <span><CiUser/></span> Professional Service</h2>
          <span>
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </span>
        </div>
        <div className={styles.fourthSectionBox}>
          <h2> <span><CiUser/></span> Professional Service</h2>
          <span>
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </span>
        </div>
        <div className={styles.fourthSectionBox}>
          <h2> <span><CiUser/></span> Professional Service</h2>
          <span>
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </span>
        </div>
        <div className={styles.fourthSectionBox}>
          <h2> <span><CiUser/></span> Professional Service</h2>
          <span>
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </span>
        </div>
        <div className={styles.fourthSectionBox}>
          <h2> <span><CiUser/></span> Professional Service</h2>
          <span>
            Usage of the Internet is becoming more common due to rapid
            advancement of technology and power.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
