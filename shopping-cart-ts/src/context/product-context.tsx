
import React, { useContext, useState, createContext, ReactNode } from "react";
import { PRODUCTS } from "../products";
import { Product } from "../products";

type ShopContextValue = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  calculateTotalAmount: () => number | null;
  addToCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  checkOut: () => void;
};
export const ShopContext = createContext<ShopContextValue>({
  cart: [],
  setCart:() => {}, 
  calculateTotalAmount: () => 0,
  addToCart: (id: number) => {},
  deleteFromCart: (id: number) => {},
  checkOut: () => {},
});

export function ProductContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>(PRODUCTS);

  function calculateTotalAmount() {
    let totalAmount = cart
      .map((product) => {
        if (product.quantity > 0) {
          return product.quantity * product.price;
        }
        return null;
      })
      .filter((x) => x !== null)
      .reduce((acc, curr) => (acc || 0) + (curr || 0), 0);

    return totalAmount;
  }
  function addToCart(id: number) {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
  }

  function deleteFromCart(id: number) {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? { ...product, quantity: Math.max(0, product.quantity - 1) }
        : product
    );
    setCart(updatedCart);
  }
  function checkOut() {
    console.log("checkout");
    setCart(PRODUCTS);
  }

  const contextValue = {
    cart,
    setCart,
    calculateTotalAmount,
    addToCart,
    deleteFromCart,
    checkOut,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
// function - addToCart,DeleteFromCart, calculateTotalAmount,
// if you want to find a specific item in array then change it, use map, then each for that specific item, and then return an copy of an updateditem
// else return back item in array 
// lesson learnt, whilst using map whilst yes it makes a new array, the objects in that array still have the same reference. in that
// case you should first maker a new copy of object nad also then change it all whilst you are mapping over that array.
// also be extremely careful, filter wont return a different array if it filters nothing, ity will give array with same reference.
// when defining a createContext() you should pass it, and declare the type of whatever that context will return. e.g whatever will be 
// put in the value={} prop of the context.Provider component. 
// something like setStateFunction can just be called with an initial value of () => {}, so you can use that when defining initial value 
// of shopContext 
