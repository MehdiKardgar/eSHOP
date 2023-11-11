import React from "react";

import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Title</p>
        <p className="product__price">
          <small>$</small>
          <strong>30</strong>
        </p>
        <div className="product__rating"></div>
      </div>

      <img src="/bag.jpg" alt="" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
