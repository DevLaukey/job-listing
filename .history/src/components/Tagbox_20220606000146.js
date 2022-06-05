import React from "react";

function Tagbox(Props) {
  function handleClick() {
    if (Props.tagList.includes(Props.tagName)) {
      return;
    } else {
      Props.onClick([...Props.tagList, Props.tagName]);
    }
  }
  return <div class="category" onClick={handleClick}> {Props.tagName}</div>;
}

export default Tagbox;
