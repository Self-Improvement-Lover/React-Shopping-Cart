

import React, { useState, useContext} from "react";
import { ShopContext } from "../../context/product-context";
import { Product } from "../../products";
import './cart-product.css'

export function CartProduct({ product }: { product: Product }) {
  const { id, productName, price, productImage, quantity } = product;
  const [quantityInput, setQuantityInput] = useState(quantity);
  const { cart, setCart, addToCart, deleteFromCart } = useContext(ShopContext);

  function handleIncrement(id:number) {
    setQuantityInput(Math.min(quantityInput + 1, 99));
    addToCart(id);
  }
  function handleDecrement(id:number) {
    setQuantityInput(Math.max(quantityInput - 1, 0));
    deleteFromCart(id);
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    const newValue = Math.min(Math.max(Number(e.target.value), 0), 99);
    setQuantityInput(newValue);
    const updatedQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: newValue } : item
    );
    setCart(updatedQuantity);
  }
  return (
    <li key={id} className="cart-product">
  
      <img src={productImage} alt="error showing image" />
      <div className="cart-product-info">
        <h2>{productName}</h2>
        <p>${price}</p>
        <div className="cart-item-amounts">
          <button className="add" onClick={() => handleIncrement(id)}>
            +
          </button>
          <input
            type="number"
            className="quantity-input"
            min={0}
            max={99}
            value={quantityInput}
            onChange={(e) => onInputChange(e, id)}
          />
          <button className="take-away" onClick={() => handleDecrement(id)}>
            -
          </button>
        </div>
      </div>
    </li>
  );
}

