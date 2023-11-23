import React from "react";
import ReactDOM from "react-dom/client"; // Importing ReactDOM from the client module
import "./index.css";
import App from "./App";

import reducer, { initialState } from "./reduser"; // Importing the reducer and initialState from 'reduser'
import { StateProvider } from "./StateProvider"; // Importing the StateProvider component

// Using ReactDOM.createRoot to render the app
const root = ReactDOM.createRoot(document.getElementById("root")); // Creating a root element to render the React application
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
