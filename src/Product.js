import React from "react";

import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <img src={image} alt="" />

      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
