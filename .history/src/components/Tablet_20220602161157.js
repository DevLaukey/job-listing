import React from "react";
import "./styles.css";
import account from "../assets/account.svg";

function Tablet() {
  const img = account;

  return (
    <div className="tablet">
      <img className="image" src={img} alt="" />

      <div className="heading">
        <div className="company">Photosnap</div>
        <div className="new"> NEW!</div>
        <div className="featured">Featured</div>
      </div>
    </div>
  );
}

export default Tablet;
