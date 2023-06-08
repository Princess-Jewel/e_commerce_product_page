"use client";
import React from "react";
import styles from "./LightBox.module.css";

const LightBox = ({
  products,
  nextSlide,
  previousSlide,
  setShowLightBox,
  value,
  setValue,
  currentImage
}) => {
  return (
    <article className={styles.main}>
      <div className={styles.section}>
        <div className={styles.mobileImageToggle}>
          <button
            className={styles.lightBoxButton}
            onClick={() => setShowLightBox(false)}
          >
            <img
              src="/../../images/icon-close.svg"
              alt="light box button"
              className={styles.lightButtonImage}
            />
          </button>
          <img
            src={currentImage}
            alt="image-product"
            className={styles.mainImage}
          />
          

          <ul className={styles.mobileToggleList}>
            <li onClick={nextSlide}>
              <button className={styles.mobileImageToggleLeftList}>
                <img
                  src="/../../images/icon-previous.svg"
                  alt="prev button"
                  
                />
              </button>
            </li>
            <li onClick={previousSlide}>
              <button className={styles.mobileImageToggleRightList}>
                <img
                  src="/../../images/icon-next.svg"
                  alt="prev button"
               
                />
              </button>
            </li>
          </ul>

          <ul className={styles.list}>
            {products &&
              products?.map((item, index) => {
                return (
                  <li onClick={() => setValue(index)} key={item.id}>
                    <img
                      src={item.thumbnail}
                      alt={item.alt}
                      className={
                        index === value ? styles.selected : styles.default
                      }
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default LightBox;
