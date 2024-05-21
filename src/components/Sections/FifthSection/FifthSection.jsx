import React from "react";
import styles from "./FifthSection.module.scss";
import fifthSectionImg from "./../../../images/b1.jpg";

const FifthSection = () => {
  return (
    <div>
      <div className={styles.fifthSectionContainer}>
        <div className={styles.fifthSectionText}>
          <h1>Latest News from our Blog</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={styles.fifthSectionImages}>
          <div className={styles.fifthSectionImageBox}>
            <img src={fifthSectionImg} alt="" />
            <div className={styles.fifthSectionButtons}>
              <button>Travel</button>
              <button>Life Style</button>
            </div>
            <h2>Portable latest Fashion for young women</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </span>
            <p>31st January, 2018</p>
          </div>
          <div className={styles.fifthSectionImageBox}>
            <img src={fifthSectionImg} alt="" />
            <div className={styles.fifthSectionButtons}>
              <button>Travel</button>
              <button>Life Style</button>
            </div>
            <h2>Portable latest Fashion for young women</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </span>
            <p>31st January, 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
