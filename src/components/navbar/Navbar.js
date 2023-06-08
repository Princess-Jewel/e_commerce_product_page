"use client";
import React, { useContext, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import styles from "./Navbar.module.css";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const { cartItems} = useContext(ShopContext);

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
            <li className={styles.navItem}>Collections</li>
            <li className={styles.navItem}>Men</li>
            <li className={styles.navItem}>Women</li>
            <li className={styles.navItem}>About</li>
            <li className={styles.navItem}>Contact</li>
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
          <li className={styles.profileImage}>
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
