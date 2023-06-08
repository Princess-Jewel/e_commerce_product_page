"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { ShopContext } from "@/context/ShopContext";
import { data } from "./data";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./page.module.css";
import MobileNavbar from "@/components/mobileNavbar/MobileNavbar";
import Navbar from "@/components/navbar/Navbar";
import LightBox from "@/components/lightBox/LightBox";

const DEFAULT_QUANTITY = 0;

const page = () => {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  const [slideIndex, setSlideIndex] = useState(DEFAULT_QUANTITY);
  const [showLightBox, setShowLightBox] = useState(false);
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY);

  const { addToCart, cartItems, removeFromCart, deleteCartItem } =
    useContext(ShopContext);

  const checkItemInCart = (items, itemID) => {
    return items.find(item => item.id === itemID);
  };

  useEffect(() => {
    const item = checkItemInCart(cartItems, products[value].id);
    if (item) {
      setQuantity(item.quantity);
    } else {
      setQuantity(DEFAULT_QUANTITY);
    }
  }, [value, cartItems]);

  return (
    <>
      <MobileNavbar />
      <Navbar />
      {showLightBox && (
        <LightBox
          products={products}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
          setShowLightBox={setShowLightBox}
          value={value}
          setValue={setValue}
          mainImage={mainImage}
        />
      )}
      <section className={styles.section}>
        <article>
          <div className={styles.desktopSlide}>
            <img
              src={mainImage}
              alt="image-product"
              className={styles.mainImage}
              onClick={() => {
                setShowLightBox(true);
              }}
            />
          </div>

          <ul className={styles.list}>
            {products &&
              products?.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      setValue(index);
                    }}
                    key={item.id}
                  >
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
              <li className={styles.amount}>{`$${products[value].price}.00`}</li>
              <li className={styles.amountSpan}>50%</li>
            </ul>
            <p className={styles.discount}>
              <s>$250.00</s>
            </p>
          </div>

          <div className={styles.counterAndAdd}>
            <ul className={styles.counterList}>
              <li
                onClick={() => {
                  if (quantity === 0 && item) {
                    deleteCartItem(products[value].id);
                    return;
                  }
                  removeFromCart(products[value]);
                }}
              >
                <img src="../../images/icon-minus.svg" alt="minus sign" />
              </li>

              <li>{quantity}</li>

              <li onClick={() => setQuantity(quantity + 1)}>
                <img src="../../images/icon-plus.svg" alt="plus sign" />
              </li>
            </ul>

            <button
              className={styles.button}
              onClick={() =>
                addToCart({
                  ...products[value],
                  quantity,
                })
              }
            >
              <AiOutlineShoppingCart fontSize={22} />
              Add to cart
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default page;
