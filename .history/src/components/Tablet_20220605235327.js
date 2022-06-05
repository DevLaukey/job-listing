import React, { useState } from "react";
import "./styles.css";

function Tablet(props) {
    let {logo, company,neew, featured, position, postedAt, contract, location,level, role, languages, tools} = props.data;

  return (
    <div className="tablet ">
      <div className="tablet_content">
        <div className="desktop">
          <img className="image" src={logo} alt="" />
          <div className="block">
            <div className="heading">
              <div className="company">
                <p>{company}</p>
              </div>
              <div>{new && <p className="new">NEW!</p>}</div>
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
          </div>
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
          <p key={tool} className="category" id="category">
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Tablet;
