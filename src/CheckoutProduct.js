import React from "react";

import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img src="/bag.jpg" alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">Some info about product</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>20</strong>
        </p>

        <div className="checkoutProduct__rating">
          <p>&#11088;</p>
        </div>

        <button>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
