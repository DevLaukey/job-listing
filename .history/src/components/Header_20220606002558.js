import React from 'react'
import Filter from './Filter'
import "./styles.css"

function Header() {
  return (
    <>
      <header className="header"></header>
      <Filter onClick={Props.onClick} tagList={Props.tagList} />
    </>
  );
}

export default Header