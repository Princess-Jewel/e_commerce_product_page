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
export const ShopContextProvider =  ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = itemId => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
console.log(data.length);
  const contextValue = {addToCart};
  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};



// export const YourContextNameProvider = ({ children }) => {
//   // Define the data or state you want to provide through the context
//   const contextValue = {
//     // Add your context values here
//   };

//   return (
//     <YourContextName.Provider value={contextValue}>
//       {children}
//     </YourContextName.Provider>
//   );
// };

