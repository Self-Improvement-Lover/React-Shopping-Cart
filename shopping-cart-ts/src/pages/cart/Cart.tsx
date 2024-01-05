
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/product-context";
import "./Cart.css";

import { CartProduct } from "./cart-product";
function Cart() {
  const { cart, calculateTotalAmount, checkOut } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <main className="cart">
      <h2>Your Cart Items</h2>
      <ul className="cart-product-list">
        {cart.map((product) => {
          if (product.quantity > 0) {
            return <CartProduct key={product.id} product={product} />;
          }
          return null;
        })}
      </ul>
      <span className="total">Total: ${calculateTotalAmount()}</span>

      <div className="cart-buttons">
        <button className="checkout" onClick={checkOut}>
          Checkout
        </button>
        <button className="continue-shopping" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </div>
    </main>
  );
}

export default Cart;
/*
Now, as for the cart, we will have a cart folder in pages folder, which will have a cart component and its css file. 
Hmm, ok this is going to need to take in all the clicked products and simply them, and then show the total
number, total price for everything. now, question is how is it going to get this data? well, if i want to have 
pages in this project then i am going to have to use useContext and define a state that would be track the amount of
times that product has been clicked, probably say that in a quantity object. so i need to do that. then the cart, it 
will also i have two buttons, the continue shopping-which will make it go back to shop page, and the checkout button- 
which would simply go to a blank page. 
*/
