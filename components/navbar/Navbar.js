
"use client";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { HiMenu } from "react-icons/hi";
// import styles from "./Header.module.css";
// import Navbar from "../navbar/Navbar";
// import MobileNavbar from "../mobileNavbar/MobileNavbar";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
    <div className={styles.sub_header}>
      {/* BRAND LOGO */}
      <div className={styles.brandLogo}>
        <img src="../images/logo.svg" alt="brand logo" />
      </div>

      {/* NAV LIST */}
      <div className={styles.nav}>
        <ul className={styles.navList}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div className={styles.profile}>
      <ul>
        <li>
          {/* <button className={styles.button}> */}
          <AiOutlineShoppingCart color="#727474" fontSize={28} />
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
  )
}

export default Navbar