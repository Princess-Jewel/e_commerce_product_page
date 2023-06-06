"use client";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { HiMenu } from "react-icons/hi";
import styles from "./MobileNavbar.module.css";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.mobileHeader}>
      <div className={styles.sub_header}>
        {/* BRAND LOGO */}

        <div className={styles.mobileBrandLogo}>
          {!isOpen && (
            <img
              src="../images/icon-menu.svg"
              alt="open button"
              onClick={() => setIsOpen(true)}
              className={styles.openMenu}
            />
          )}
          <img src="../images/logo.svg" alt="brand logo" />
        </div>
        {/* NAV LIST */}

        {isOpen && (
          <div className={styles.mobileNav}>
            {isOpen && (
              <img
                src="../images/icon-close.svg"
                alt="close button"
                onClick={() => setIsOpen(false)}
                className={styles.closeMenu}
              />
            )}
            <ul className={styles.navList}>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
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
  );
};

export default MobileNavbar;
