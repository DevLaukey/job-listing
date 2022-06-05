import React, { useState } from 'react'
import icon from "./images/icon-remove.svg";
function Filter() {

    

    const [people, setPeople] = useState(
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
      ]
    );
    // setTheArray([...theArray, newElement]);

const filtered = people
  .filter( name => name.name.includes("J"))
    .map((filteredPerson) =>
    <div className="tablet filter">
      <div className="option">
        <p className="front-end">{filteredPerson.name}</p>
          <div className="icon" onClick={() => {
                filtered.shift(filteredPerson)
                console.log(people)
              }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
          
        </div>
      </div>
     
      <div className="clear">
                <p onClick={() => setPeople([])}>Clear</p>
      </div>
    </div>
    );
    return (
        <>
            { filtered}</>
  );
}

export default Filter
  