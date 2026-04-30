import React from "react";

function Header({ name }) {
  console.log(Header); // This will log the header component to the console for debugging purposes
  return (
    <header>
        <h1>{name}</h1>
    </header>
  );
}
    

export default Header;