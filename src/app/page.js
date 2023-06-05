"use client";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { data } from "./data";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./page.module.css";

const page = () => {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  const [amount, setAmount] = useState(0);

  return (
    <>
      <Header />
      <section className={styles.section}>
        <article>
          <img
            src={mainImage}
            alt="image-product"
            className={styles.mainImage}
          />
          <ul className={styles.list}>
            {products &&
              products?.map((item, index) => {
                return (
                  <li onClick={() => setValue(index)} key={item.id}>
                    <img
                      src={item.thumbnail}
                      alt={item.alt}
                      className={index === value && styles.selected}
                    />
                  </li>
                );
              })}
          </ul>
        </article>

        <article className={styles.productDetails}>
          <h2 className={styles.subHeading}>SNEAKER COMPANY</h2>
          <h1 className={styles.heading}>Fall Limited Edition Sneakers</h1>
          <p className={styles.text}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole. They'll withstand everything
            the weather can offer
          </p>
         <div>
          <ul>
            <li className={styles.amount}>$125.00</li>
            <li className={styles.amountSpan}>50%</li>
          </ul>
          <p className={styles.discount}><s>$250.00</s></p>
         </div>
        

          <div className={styles.counterAndAdd}>
            <div className={styles.counter}>
              <ul>
                <li><img src="../../images/icon-minus.svg" alt="minus sign"/></li>
                <li>{amount}</li>
                <li><img src="../../images/icon-plus.svg" alt="plus sign"/></li>
              </ul>
            </div>
            <button>
              <AiOutlineShoppingCart />
              Add to cart
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default page;
