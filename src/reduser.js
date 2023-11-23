// here we define all the application level states and define actions to make the changes to the state

// Definition of the initial state of the application
export const initialState = {
  basket: [], // Initial state with an empty basket
};

// Selector function to calculate the total price of items in the basket
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

// Reducer function defining how state changes in response to actions
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Adds an item to the basket in the state
      return {
        ...state,
        basket: [...state.basket, action.item], // Adds the new item to the basket
      };

    case "REMOVE_FROM_BASKET":
      // Removes an item from the basket based on its ID
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); // Removes the item from the basket
      } else {
        console.warn(
          `can't remove product(id: ${action.id}) as its not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state; // Return default state if action type doesn't match
  }
};

export default reducer;
