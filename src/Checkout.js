import React from "react";

import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="/ocean credit card.jpg" alt="" className="checkout__ad" />

        <div>
          <h2 className="checkout__title">Your Shoping Basket</h2>

          <CheckoutProduct />
          <CheckoutProduct />
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
