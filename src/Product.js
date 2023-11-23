import React from "react";

import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue(); // Accesses the global state

  // Function to add the product to the basket
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET", // Specifies the action type
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
        title: title,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt={title} />

      <div className="product__info">
        <p>{title}</p> {/* Displays the product title */}
        <div className="product__rating">
          {/* Renders the product rating */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={`${id}-star-${i}`}>&#11088;</p> // Displays rating stars
            ))}
        </div>
        {/* Displays the product price */}
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      {/* Button to add the product to the basket */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
