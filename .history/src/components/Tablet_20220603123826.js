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
    <div className="tablet boarder" key={key}>
      <div className="tablet_content">
        <img className="image" key={key} src={logo} alt="" />

        <div className="heading">
          <div className="company">
            <p key={key}>{company}</p>
          </div>
          <div key={key}>{neew && <p className="new">NEW!</p>}</div>
          <div key={key}>
            {featured && <p className="featured">FEATURED</p>}
          </div>
        </div>
        <div className="title">
          <p key={key}>{position}</p>
        </div>
        <div className="details">
          <p key={key}>{postedAt}</p>
          <ul className="list">
            <li key={key}>{contract}</li>
            <li key={key} className="country">
              {location}
            </li>
          </ul>
        </div>
        <hr className="line" />
      </div>
      <div className="tags">
        <p className="category" key={key}>
          {level}
        </p>
        <p className="category" key={key}>
          {role}
        </p>
        {languages.map((language) => (
          <p key={language} className="category" id="category">
            {language}
          </p>
        ))}
        {tools.map((tool) => (
          <p key={tool} className="category">{tool}</p>
        ))}
      </div>
    </div>
  );
}

export default Tablet;
