import React from "react";
import logo from "./../../images/logo (4).png";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <div className={styles.headerContainer}>
        <img src={logo} alt="" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </nav>
        <button className={styles.hamburgerMenu}>
          <GiHamburgerMenu/>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default Header;
