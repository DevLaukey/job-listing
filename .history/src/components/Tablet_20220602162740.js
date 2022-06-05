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
          <h2>Photosnap</h2>
        </div>
        <div className="new">
          <h2>NEW!</h2>
        </div>
        <div className="featured">
          <h2>FEATURED</h2>
        </div>
      </div>
      <div className="title"></div>
    </div>
  );
}

export default Tablet;
