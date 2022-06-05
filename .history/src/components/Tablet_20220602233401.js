import React from "react";
import "./styles.css";
import id from "./images/insure.svg"

function Tablet({ company, logo ,neew ,featured, position, role, level, postedAt, contract, location,languages, tools}) {
console.log(logo)
    return (
       
    <div className="tablet">
      <div className="tablet_content">
        <img className="image" src={logo} alt="" />

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
              <hr className="line" />
              <div className="tags">
                 <p className="category">Frontend</p>
                 <p className="category">Senior</p>
                 <p className="category">HTML</p>
                 <p className="category">CSS</p>
                 <p className="category">JavaScript</p>
              </div>
      </div>
    </div>
  );
}

export default Tablet;
