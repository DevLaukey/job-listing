import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import JobItem from "./components/JobItem";
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
  // const tablets = data.map((data) =>
  // (<Tablet
  //   key={data.id}
  //   company={data.company}
  //   neew={data.new}
  //   featured={data.featured}
  //   position={data.position}
  //   role={data.role}
  //   level={data.level}
  //   postedAt={data.postedAt}
  //   contract={data.contract}
  //   location={data.location}
  //   languages={data.languages}
  //   tools={data.tools}
  //   logo={data.logo} />));
  
  
  return (
    <div className="App">
      <Header />

      {data
        .filter((e) => filterTag(e))
        .map((e, id) => (
          <Tablet onClick={setTagList} tagList={tagList} key={id} data={e} />
        ))}
      {/* <Filter />
      <div className="content">{tablets}</div> */}
    </div>
  );
}

export default App;
