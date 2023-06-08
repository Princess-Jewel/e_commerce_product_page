"use client";

import React, { createContext, useState } from "react";

import { data } from "../app/data";

export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < data.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i <= data.length; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

const handleAddToCart = (prevCartItems, nextCartItem) => {
  const itemExists = existingItem(prevCartItems, nextCartItem);

  if (itemExists) {
    return prevCartItems.map((item) => {
      return item.id === nextCartItem.id
        ? {
            ...item,
            quantity: item.quantity + nextCartItem.quantity,
          }
        : item;
    });
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
    },
  ];
};



export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
// INCREASE THE AMOUNT OF SELECTED ITEMS IN THE CART
  const addToCart = selectedItem => {
  const updatedCartItems = handleAddToCart(cartItems, selectedItem)
  setCartItems(updatedCartItems);
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

  // onClick={() => handleCheck(link.id)}
  // const [checkedValue, setCheckedValue] = useState([]);

  // const deleteCartItem = itemId => {
 
  //   if (cartItems.includes(itemId)) {
  //     updatedList = updatedList.filter(item => item !== itemId);
  //   } else {
  //     updatedList = [...cartItems, itemId];
  //   }

  //   setCartItems(prevCartItems => ({
  //     ...prevCartItems,
  //     updatedList
  //   }));

 
  // };
  

  const contextValue = { addToCart, cartItems, removeFromCart, deleteCartItem };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
