import React from "react";

import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider"; // Importing the StateProvider for managing state
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue(); // Destructuring basket and dispatch from StateProvider

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="/ocean credit card.jpg" alt="" className="checkout__ad" />

        <div>
          <h2 className="checkout__title">Your Shoping Basket</h2>

          {/* Mapping through the basket items and rendering each CheckoutProduct */}
          {basket.map((item, index) => (
            <CheckoutProduct
              key={`${item.id}-${index}`} // Using item.id and index for a unique key
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
