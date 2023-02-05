import React from "react";
import hero from "../icons_assets/restauranfood.jpg";
function Header() {
  return (
    <>
      <header>
        <div className="left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <h3>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </h3>
          <button>Reserve a Table</button>
        </div>
        <div className="right">
          <img src={hero} alt="Restuarant Food" />
        </div>
      </header>
    </>
  );
}

export default Header;
