import React from "react";

import "./Header.css";

import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { Link } from "react-router-dom"; // Importing Link from react-router-dom to handle routing
import { useStateValue } from "./StateProvider"; // Importing the useStateValue hook

function Header() {
  const [{ basket }, dispatch] = useStateValue(); // Destructuring basket from StateProvider

  return (
    <div className="header">
      {/* Link to the home page */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StoreIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2> {/* eShop title */}
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <Link to="/checkout">
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount">
              {basket.length} {/* Display the number of items in the basket */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
