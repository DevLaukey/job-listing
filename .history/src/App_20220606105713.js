import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tablet from "./components/Tablet";
import data from "./data.json";

function App() {
  const [tagList, setTagList] = useState([]);

  function filterTag(e) {
    if (tagList.length === 0) {
      return true;
    } else {
      let jobTags = [e.role, e.level, ...e.languages, ...e.tools];

      return tagList.every((tag) => jobTags.includes(tag));
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  return (
    <div className="App">
      <Header onClick={setTagList} tagList={tagList} />
      {data
        .filter((e) => filterTag(e))
        .map((e, id) => (
          <Tablet onClick={setTagList} tagList={tagList} key={id} data={e} />
        ))}
    </div>
  );
}

export default App;
