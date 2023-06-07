"use client";
import React, { useContext, useMemo, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import { data } from "./data";
import styles from "./page.module.css";
import MobileNavbar from "@/components/mobileNavbar/MobileNavbar";
import Navbar from "@/components/navbar/Navbar";
import LightBox from "@/components/lightBox/LightBox";

const page = () => {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage} = products[value];
  const [amount, setAmount] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightBox, setShowLightBox] = useState(false);

  const { addToCart, cartItems, removeFromCart} = useContext(ShopContext);

  // const handleMinus = () => {
  //   setAmount((prevAmount) => {
  //     const newAmount = prevAmount - 1;
  //     return newAmount >= 0 ? newAmount : 0;
  //   });
  // };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  // const handleAddToCart = () => {
  //   addToCart(selectedItemId);
  //   console.log(selectedItemId);
  // };
  // const handleAddToCart = (itemId) => {
  //   addToCart(itemId);
  // };

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
  };

  return (
    <>
      <MobileNavbar />
      <Navbar />
      {showLightBox && (
        <LightBox
          products={products}
          previousSlide={previousSlide}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          setShowLightBox={setShowLightBox}
          value={value}
          setValue={setValue}
          mainImage={mainImage}
        />
      )}
      <section className={styles.section}>
        <article>
          <div className={styles.mobileSlide}>
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
                    onClick={() => setShowLightBox(true)}
                  />

                  <ul className={styles.mobileList}>
                    <li onClick={nextSlide}>
                      <button className={styles.mobileImageToggleLeftList}>
                        <img
                          src="../../images/icon-previous.svg"
                          alt="previous icon"
                        />
                        {/* <FaChevronLeft fontSize={16} /> */}
                      </button>
                    </li>
                    <li onClick={previousSlide}>
                      <button className={styles.mobileImageToggleRightList}>
                        <img src="../../images/icon-next.svg" alt="next icon" />
                        {/* <FaChevronRight fontSize={16} /> */}
                      </button>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>

          <div className={styles.desktopSlide}>
            <img
              src={mainImage}
              alt="image-product"
              className={styles.mainImage}
              onClick={() => setShowLightBox(true)}
            />
          </div>

          <ul className={styles.list}>
            {products &&
              products?.map((item, index) => {
                return (
                  <li onClick={() => {
                    setValue(index)
                  }} key={item.id}>
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
        </article>

        <article className={styles.productDetails}>
          <h2 className={styles.subHeading}>SNEAKER COMPANY</h2>
          <h1 className={styles.heading}>{`${products[value].title}`}</h1>
          <p className={styles.text}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole. They'll withstand everything
            the weather can offer
          </p>
          <div className={styles.amountAndPercentage}>
            <ul>
              <li className={styles.amount}>{`${products[value].price}`}</li>
              <li className={styles.amountSpan}>50%</li>
            </ul>
            <p className={styles.discount}>
              <s>$250.00</s>
            </p>
          </div>

          <div className={styles.counterAndAdd}>
            <ul className={styles.counterList}>
            <li onClick={() => removeFromCart(products[value].id)}>
                <img src="../../images/icon-minus.svg" alt="minus sign" />
              </li>
              <li>{cartItems[products[value].id]}</li>
              {/* <li>{cartItems[products.id]}</li> */}
              <li onClick={() => addToCart(products[value].id)}>
                <img src="../../images/icon-plus.svg" alt="plus sign" />
              </li>
            </ul>

            <button
              className={styles.button}
              onClick={() => handleAddToCart(products[value].id)}
              
            >
              <img src="../../images/icon-cart.svg" alt="cart icon" />
              {/* <AiOutlineShoppingCart fontSize={20} /> */}
              Add to cart
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default page;
