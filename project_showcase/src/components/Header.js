import React, {useState} from "react";

const Header = ({isDarkMode, onClick}) => {
  function handleClick(){
    onClick()
  }

  const buttonColor = isDarkMode ? "Light Mode" : "Dark Mode"

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{buttonColor}</button>
    </header>
  );
}

export default Header;
