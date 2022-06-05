import React from 'react'
import "./styles.css"
import account from "../assets/accounts"


function Tablet() {
    const img =  account

  return (
      <div className="tablet">
          <img src={img} alt="" />
    </div>
  )
}

export default Tablet