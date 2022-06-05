import React from "react";
import "./styles.css";
import logos from "./images/photosnap.svg";
function Tablet({ key, company, logo, neew, featured, position, role, level, postedAt, contract, location, languages, tools }) {
    // console.log(logo);
    // const logos = require(logo).default;
    // console.log(logos)

    const handleFilter =  (e) => {
        console.log(e.target.value);
    }
    return (
      <div className="tablet boarder">
        <div className="tablet_content" >
          <img className="image" src={logos} alt="" />

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
        </div>
          <div className="tags">
            <p className="category" onClick={handleFilter}>{role}</p>
            <p className="category" onClick={handleFilter}>{level}</p>
            {languages.map((language) => (
              <p className="category" onClick={handleFilter}> {language}</p>
            ))}
            {tools.map((tool) => (
              <p className="category" onClick={handleFilter}> {tool}</p>
            ))}
          </div>
      </div>
    );
}

export default Tablet;
