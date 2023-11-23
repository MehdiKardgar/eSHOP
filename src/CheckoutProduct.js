import React from "react";

import { useStateValue } from "./StateProvider"; //

import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue(); // Destructuring basket and dispatch from StateProvider

  const removeFromBasket = () => {
    // Dispatches an action to remove the product from the basket when the button is clicked
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id, // Sending the product ID to identify which item to remove
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        {/* Title of the product */}
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong> {/* Displaying the price of the product */}
        </p>

        <div className="checkoutProduct__rating">
          {/* Displaying star ratings based on the 'rating' value */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={`${id}-star-${i}`}>&#11088;</p>
            ))}
        </div>

        {/* Button to remove the product from the basket */}
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
