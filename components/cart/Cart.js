import React from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  const text = "Fall Limited Edition Sneakers";
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Cart</h2>
      <div className={styles.cartDetails}>
        <img
          src="/../../images/image-product-1-thumbnail.jpg"
          alt="product image"
          className={styles.productImage}
        />

        <div className={styles.textDetails}>
          <p className={styles.name}>{`${text.substring(0, 28)}...`}</p>
          <p className={styles.amount}>
            $125.00 x 3{" "}
            <span>
              <b>$375.00</b>
            </span>
          </p>
        </div>

        <img
          src="/../../images/icon-delete.svg"
          alt="product image"
          className={styles.delete}
        />
      </div>

      <button className={styles.button}>Checkout</button>
    </div>
  );
};

export default Cart;
