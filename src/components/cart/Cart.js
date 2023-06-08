"use client";
import React, { useContext, useState } from "react";
import { data } from "@/app/data";
import { ShopContext } from "@/context/ShopContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const [products] = useState(data);
  // const [products] = useState(data);
  const [value, setValue] = useState(0);
  // const { id} = products[value];
  const { id } = products[value];
  const { cartItems, deleteCartItem } = useContext(ShopContext);
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Cart</h2>

      {data.map(product => {
        if (cartItems[product.id] !== 0) {
          console.log(product.price);
          console.log(cartItems[products[value].id]);
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
                  {/* ({cartItems[product.id]}) */}
                  {`$${product.price} x ${cartItems[product.id]}`}
                  &nbsp;
                  <span>
                    <b>
                      {Number(product.price) *
                        Number(cartItems[products[value].id])}
                    </b>
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
        } else return null;
      })}

      <button className={styles.button}>Checkout</button>
    </div>
  );
};

export default Cart;
