"use client";
import React, { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems, deleteCartItem } = useContext(ShopContext);
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Cart</h2>

      {cartItems.length > 0 ? (
        cartItems.map(product => {
          return (
            <div className={styles.cartDetails} key={product.id}>
              <img
                src={product.thumbnail}
                alt="product image"
                className={styles.productImage}
              />

              <div className={styles.textDetails}>
                <p className={styles.name}>{`${product.title.substring(
                  0,
                  28
                )}...`}</p>
                <p className={styles.amount}>
                  {`$${product.price} x ${product.quantity}`}
                  &nbsp;
                  <span>
                    <b>{Number(product.price) * Number(product.quantity)}</b>
                  </span>
                </p>
              </div>

              <img
                src="/../../images/icon-delete.svg"
                alt="product image"
                className={styles.delete}
                onClick={() => deleteCartItem(product.id)}
              />
            </div>
          );
        })
      ) : (
        <div>
          <p className={styles.empty}>Your cart is empty</p>
        </div>
      )}

      {cartItems.length > 0 && (
        <button className={styles.button}>Checkout</button>
      )}
    </div>
  );
};

export default Cart;
