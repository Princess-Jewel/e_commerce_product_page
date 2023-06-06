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
  value,
  setValue,
  mainImage,
}) => {
  return (
    <article className={styles.main}>
      <div className={styles.section}>
        {/* {products.map((item, index) => {
          return ( */}
        <div
          className={styles.mobileImageToggle}
          // key={index}
        >
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
            src={mainImage}
            alt="image-product"
            className={styles.mainImage}
          />

          <ul>
            <li onClick={nextSlide}>
              <button className={styles.mobileImageToggleLeftList}>
                <FaChevronLeft
                  fontSize={16}
                  onMouseOver={({ target }) => (target.style.color = "#eb9651")}
                  onMouseOut={({ target }) => (target.style.color = "#000")}
                />
              </button>
            </li>
            <li onClick={previousSlide}>
              <button className={styles.mobileImageToggleRightList}>
                <FaChevronRight
                  fontSize={16}
                  onMouseOver={({ target }) => (target.style.color = "#eb9651")}
                  onMouseOut={({ target }) => (target.style.color = "#000")}
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
        {/* );
        })} */}
      </div>
    </article>
  );
};

export default LightBox;
