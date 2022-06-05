import React from "react";
import "./styles.css";

function Tablet({ company, logo, neew, featured, position, role, level, postedAt, contract, location, languages, tools }) {
 const logo = require('./logo.jpeg').default
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
              <li className="country">{location}</li>
            </ul>
          </div>
          <hr className="line" />
          <div className="tags">
            <p className="category">{role}</p>
            <p className="category">{level}</p>
            {languages.map((language) => (
              <p className="category"> {language}</p>
            ))}
            {tools.map((tool) => (
              <p className="category"> {tool}</p>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Tablet;
