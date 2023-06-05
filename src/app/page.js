"use client";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import { data } from "./data";
import styles from "./page.module.css";

const page = () => {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  return (
    <>
      <Header />
      <section className={styles.section}>
        <article>
          <img src={mainImage} alt="image-product" className={styles.mainImage} />
          <ul className={styles.list}>
            {products &&
              products?.map((item, index) => {
                return (
                  <li onClick={() => setValue(index)} key={item.id} >
                    <img src={item.thumbnail} alt={item.alt}  className={index===value && styles.selected} />
                  </li>
                );
              })}
          </ul>
        </article>

        <article>princess is hereprincess is hereprincess is hereprincess is hereprincess is hereprincess is here</article>
      </section>
    </>
  );
};

export default page;
