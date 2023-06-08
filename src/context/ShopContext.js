"use client";

import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

const existingItem = (prevCartItems, nextCartItem) => {
	return prevCartItems.some((item) => {
		return item.id === nextCartItem.id;
	});
};

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

const handleReduceCartItem = (prevCartItems, currentItem) => {
	return prevCartItems.map((item) => {
		return item.id === currentItem.id
			? {
					...item,
					quantity: item.quantity - 1,
			  }
			: item;
	});
};

export const ShopContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	// INCREASE THE AMOUNT OF SELECTED ITEMS IN THE CART
	const addToCart = (selectedItem) => {
		const updatedCartItems = handleAddToCart(cartItems, selectedItem);
		setCartItems(updatedCartItems);
    console.log(updatedCartItems);
	};

	// REDUCE THE AMOUNT OF SELECTED ITEMS IN THE CART
	const removeFromCart = (item) => {
		const updatedCartItems = handleReduceCartItem(cartItems, item);
		setCartItems(updatedCartItems);
	};

	// DELETE ITEMS FROM THE SHOPPING CART
	const deleteCartItem = (itemId) => {
		const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
		setCartItems(updatedCartItems);
	};


	const contextValue = { addToCart, cartItems, removeFromCart, deleteCartItem };

	return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};
