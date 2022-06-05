import React from "react";
import "./styles.css";
import account from "../assets/account.svg";

function Tablet() {
  const img = account;

  return (
    <div className="tablet">
      <img className="image" src={img} alt="" />

      <div className="heading">
        <div className="company">
          <p>Photosnap</p>
        </div>
        <div className="new">
          <p>NEW!</p>
        </div>
        <div className="featured">
          <p>FEATURED</p>
        </div>
      </div>
      <div className="title"></div>
    </div>
  );
}

export default Tablet;
