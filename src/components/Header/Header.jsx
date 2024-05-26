import React from "react";
import logo from "./../../images/logo (4).png";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";

const Header = () => {
   
  const navigation = useNavigate('')



  return (
    <div className={styles.headerSection}>
      <div className={styles.headerContainer}>
        <img src={logo} alt="" />
        <nav>
          <ul>
            <li onClick={ () => navigation ('/')}>Homee</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </nav>
        <div className={styles.icns}>
          <FaHeart onClick={()=>navigation('/Wishlist')} />
          <FaShoppingBasket onClick={()=>navigation('/Basket')}/>
          <MdAdminPanelSettings onClick={()=>navigation('/Dashboard')} />
        </div>
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
