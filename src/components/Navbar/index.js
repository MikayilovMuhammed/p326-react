import React from "react";
import "./index.scss";

function Navbar() {
  // const handleClickNavbar = () => {
  //   console.log("Hello P326");
  // };

  function test() {
    console.log("Salam");
  }

  return (
    <>
      <h1>Navbar</h1>
      {/* <button
        onClick={() => {
          console.log("salam");
          handleClickNavbar();
        }}
      >
        Click
      </button> */}
      <button onClick={test}>Click</button>
    </>
  );
}

export default Navbar;
