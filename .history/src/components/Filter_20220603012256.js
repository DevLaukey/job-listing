import React from "react";
import icon from "./images/icon-remove.svg";
function Filter() {
    const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
    
    return (
      {names.filter(name => name.includes('J')).map(filteredName => (
        <li>
          <div className="tablet filter">
      <div className="option">
        <p className="front-end">FilteredName</p>
        <div className="icon">
          <img src={icon} alt="" />
        </div>
      </div>

      <div className="clear">
        <p>Clear</p>
      </div>
    </div>
        </li>
      ))}
    
  );
}

export default Filter;
