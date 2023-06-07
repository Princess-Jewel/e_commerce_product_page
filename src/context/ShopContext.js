"use client";

import React, { createContext, useState } from "react";

import { data } from "../app/data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i <= data.length; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
// INCREASE THE AMOUNT OF SELECTED ITEMS IN THE CART
  const addToCart = itemId => {
    setCartItems(prevCartItems => ({
      ...prevCartItems,
      [itemId]: prevCartItems[itemId] + 1,
    }));
  };


  // REDUCE THE AMOUNT OF SELECTED ITEMS IN THE CART
  const removeFromCart = itemId => {
    setCartItems(prevCartItems => ({
      ...prevCartItems,
      [itemId]: prevCartItems[itemId] - 1,
    }));
  };

  // DELETE ITEMS FROM THE SHOPPING CART
  const deleteCartItem = itemId => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[itemId] > 0) {
        updatedCartItems[itemId] -= 1;
      }
      return updatedCartItems;
    });
  };
  

  const contextValue = { addToCart, cartItems, removeFromCart, deleteCartItem };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
