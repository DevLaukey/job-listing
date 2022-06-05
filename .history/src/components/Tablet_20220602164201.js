import React from "react";
import "./styles.css";
import account from "../assets/account.svg";

function Tablet() {
  const img = account;

  return (
    <div className="tablet">
      <div className="tablet_content">
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
        <div className="title">
          <p>Senior frontend Developer</p>
        </div>
        <div className="details">
          <p>1d ago</p>
          <ul className="list">
            <li> Full Time</li>
            <li className="country"> USA only</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tablet;
