import React, {useState} from "react";

const Header = ({onClick}) => {
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={onClick}>Dark Mode</button>
    </header>
  );
}

export default Header;
