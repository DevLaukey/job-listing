import React from "react";
import "./styles.css";
// import id from "../assets/images/"

function Tablet({ company, logo ,neew ,featured, position, role, level, postedAt, contract, location,languages, tools}) {
console.log(logo)
    return (
      <div className="tablet">
        <div className="tablet_content">
          <img className="image" src={logo} alt="" />

          <div className="heading">
            <div className="company">
              <p>{company}</p>
            </div>
            <div>{neew && <p className="new">NEW!</p>}</div>
            <div>{featured && <p className="featured">FEATURED</p>}</div>
          </div>
          <div className="title">
            <p>{position}</p>
          </div>
          <div className="details">
            <p>{postedAt}</p>
            <ul className="list">
              <li>{contract}</li>
              <li className="country">location</li>
            </ul>
          </div>
          <hr className="line" />
          <div className="tags">
            <p className="category">{role}</p>
            <p className="category">{level}</p>
            {languages.map((language) => (
              <p className="category"> {language}</p>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Tablet;
