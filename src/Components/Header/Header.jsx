import React from "react";
import "./Header.css";
import logo from "../../assets/image/amazon_logo.png";
import icon from "../../assets/image/icon.png";
import drop_down from "../../assets/image/drop-down-icon.jpg";
import search from "../../assets/image/search.png";
import cart from "../../assets/image/cart2.png";
import menu from "../../assets/image/menu-icon.png";
import flag from "../../assets/image/flag.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
  console.log(basket.length);
  return (
    <section>
      <div>
        <nav>
          <Link to="/">
            <img src={logo} width="50" alt="" />
          </Link>
          <div className="nav-country">
            <img src={icon} height="20" alt="" />
            <div>
              <p>Deliver To</p>
              <h1>Ethiopia</h1>
            </div>
          </div>
          <div className="nav-search">
            <div className="nav-search-category">
              <p>All</p>
              <img src={drop_down} height="12" alt="" />
            </div>
            <input
              type="text"
              className="nav-search-input"
              placeholder="Search Amazon"
            />
            <img src={search} height="20" alt="" />
          </div>
          <div className="nav-language">
            <img src={flag} width="20px" alt="" />
            <p>Eth</p>

            <img src={drop_down} width="8px" alt="" />
          </div>
          <div className="nav-text">
            <p>Hello, Sign in</p>
            <h1>
              Account and List
              <img src={drop_down} width="8px" alt="" />
            </h1>
          </div>
          <Link to="/orders" className="nav-text">
            <p>Return</p>
            <h1>&Orders</h1>
          </Link>

          <Link to="/cart" className="nav-cart">
            <img src={cart} width="20" alt="" />
            <h4>Cart</h4>
            <span>{basket.length}</span>
          </Link>
        </nav>
      </div>
      <div className="nav-bottom">
        <div>
          <img src={menu} width="20" alt="" />
          <p>All</p>
        </div>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registory</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </section>
  );
};

export default Header;
