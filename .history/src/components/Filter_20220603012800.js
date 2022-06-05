import React from 'react'
import icon from "./images/icon-remove.svg";
function Filter() {

    const people = [
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
    ];
const filtered  = people.filter(person => person.age < 60).map(filteredPerson => (
    <li>
      {filteredPerson.name}
    </li>
  ))
    return (
        <>
            { filtered}</>
  );
}

export default Filter
    // <div className="tablet filter">
    //   <div className="option">
    //     <p className="front-end">Frontend</p>
    //     <div className="icon">
    //       <img src={icon} alt="" />
    //     </div>
    //   </div>
     
    //   <div className="clear">
    //     <p>Clear</p>
    //   </div>
    // </div>