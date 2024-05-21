import React from "react";
import styles from "./Footer.module.scss";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { FaInternetExplorer } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>
        Copyright ©2024 All rights reserved | This template is made with{" "}
        <CiHeart /> by
        <span> Colorlib</span>
      </p>
      <div>
        <button>
          <FaFacebookF />
        </button>
        <button><IoLogoInstagram /></button>
       <button> <CiTwitter /></button>
        <button><FaInternetExplorer /></button>
      </div>
    </div>
  );
};

export default Footer;
