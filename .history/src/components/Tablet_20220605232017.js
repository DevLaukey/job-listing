import React, { useState } from "react";
import "./styles.css";

function Tablet({
  key,
  company,
  logo,
  neew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) {
  return (
    <div className="tablet boarder">
      <div className="tablet_content">
        <div className="desktop">
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
      </div>
      <div className="tags">
        <p className="category">{level}</p>
        <p className="category">{role}</p>
        {languages.map((language) => (
          <p key={language} className="category" id="category">
            {language}
          </p>
        ))}
        {tools.map((tool) => (
          <p key={tool} className="tool" id="category">
            {tool}
          </p>
        ))}
        </div>
        </div>
    </div>
  );
}

export default Tablet;
