import React from 'react'
import icon from "./images/icon-remove.svg";
function Filter() {
  return (
      <div className="tablet filter">
          <div className="option">
              <p className="frontend">Frontend</p>
              <div className="icon">

              <img src={icon } alt="" />
              </div>
          </div>
    </div>
  )
}

export default Filter