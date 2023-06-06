import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import {close} from "../../public/images/icon-cart.svg";
import styles from "./LightBox.module.css";

const LightBox = ({
  products,
  nextSlide,
  slideIndex,
  previousSlide,
  setShowLightBox,
}) => {
  return (
    <article className={styles.main}>
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
      <div className={styles.section}>
        {products.map((item, index) => {
          return (
            <div
              className={
                slideIndex === index + 1
                  ? styles.mobileImageToggle
                  : styles.hideImageToggle
              }
              key={index}
            >
              <img
                src={item.mainImage}
                alt="image-product"
                className={styles.mainImage}
              />

              <ul>
                <li onClick={nextSlide}>
                  <button className={styles.mobileImageToggleLeftList}>
                    <FaChevronLeft fontSize={16} />
                  </button>
                </li>
                <li onClick={previousSlide}>
                  <button className={styles.mobileImageToggleRightList}>
                    <FaChevronRight fontSize={16} />
                  </button>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default LightBox;
