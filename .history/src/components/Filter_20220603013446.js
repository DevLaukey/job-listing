import React, { useState } from 'react'
import icon from "./images/icon-remove.svg";
function Filter() {

    

    const [people, setPeople] = useState([
      [
        {
          name: "James",
          age: 31,
        },
        {
          name: "John",
          age: 45,
        },
        {
          name: "Paul",
          age: 65,
        },
        {
          name: "Ringo",
          age: 49,
        },
        {
          name: "George",
          age: 34,
        },
      ],
    ]);
const filtered = people
  .filter( name => name.name.includes("J"))
    .map((filteredPerson) =>
    <div className="tablet filter">
      <div className="option">
        <p className="front-end">{filteredPerson.name}</p>
        <div className="icon">
          <img src={icon} alt="" />
        </div>
      </div>
     
      <div className="clear">
        <p>Clear</p>
      </div>
    </div>
    );
    return (
        <>
            { filtered}</>
  );
}

export default Filter
  