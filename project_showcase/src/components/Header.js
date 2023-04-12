import React, {useState} from "react";

const Header = ({handleClick}) => {
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>Dark Mode</button>
    </header>
  );
}

export default Header;
