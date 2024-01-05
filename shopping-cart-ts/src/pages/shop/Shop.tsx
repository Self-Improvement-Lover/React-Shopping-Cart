

import React, { useContext } from "react";
import { ShopContext } from "../../context/product-context";
import './Shop.css'
function Shop() {
  const {cart, addToCart } = useContext(ShopContext);
  return (
    <main className="shop">
      <h1>Shop</h1>
      <ul className="shop-list">
        {cart.map((product) => {
          const { id, productName, price, productImage, quantity } = product;
          return (
            <li key={id} className="shop-product">
              <img className="product-image" src={productImage} />
              <p className="product-name">{productName}</p>
              <p className="price">${price}</p>
              <button
                className="add-to-cart"
                onClick={() => {
                  addToCart(id);
                }}>
                Add To Cart{quantity === 0 ? "" : ` (${quantity})`}
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Shop;
