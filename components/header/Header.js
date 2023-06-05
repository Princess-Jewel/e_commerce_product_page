"use client";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./Header.module.css";


const Header = () => {
 
  return (
    <header className={styles.header}>
      <div className={styles.sub_header}>
        {/* BRAND LOGO */}
        <div className={styles.brandLogo}>
          <img src="../images/logo.svg" alt="brand logo" />
        </div>
        {/* NAV LIST */}
        <nav className={styles.nav}>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className={styles.profile}>
        <ul>
          <li>
            {/* <button className={styles.button}> */}
              <AiOutlineShoppingCart color="#727474"  size="28px" />
            {/* </button> */}
          </li>
          <li>
            <img
              src="../images/image-avatar.png"
              alt="avatar"
              className={styles.avatar}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
