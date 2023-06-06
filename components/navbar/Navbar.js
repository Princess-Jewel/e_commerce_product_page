"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);

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
          <li
            className={styles.cartIcon}
            onClick={() => setOpenCart(!openCart)}
          >
            <img src="../images/icon-cart.svg" alt="cart icon" />
          </li>
          <li>
            <img
              src="../images/image-avatar.png"
              alt="avatar"
              className={styles.avatar}
            />
          </li>
        </ul>
        {openCart && <Cart />}
      </div>
    </header>
  );
};

export default Navbar;
