import React from "react";

import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider"; // Importing the state hook
import { getBasketTotal } from "./reduser"; // Importing a function to calculate the total

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue(); // Accessing the state

  return (
    <div className="subtotal">
      {/* Render the subtotal with formatted currency */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item): <strong>{value}</strong>
            </p>

            {/* Checkbox for gift option */}
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Calculates the total based on the items in the basket
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button> {/* Button to proceed to checkout */}
    </div>
  );
}

export default Subtotal;
