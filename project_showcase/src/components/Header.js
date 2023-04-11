import React, {useState} from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  function handleClick(){
    console.log(isDarkMode)
    setIsDarkMode(!isDarkMode)
    console.log(isDarkMode)
  }
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
