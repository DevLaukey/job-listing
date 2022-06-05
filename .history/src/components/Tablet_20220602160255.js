import React from 'react'
import "./styles.css"
import account from "../assets/account.svg"


function Tablet() {
    const img =  account

  return (
      <div className="tablet">
          <img className="image" src={img} alt="" />
    </div>
  )
}

export default Tablet