import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Tablet from "./components/Tablet";
import data from "./data.json";

function App() {
  const tablets = data.map((data) => <Tablet
    key={data.id}
    company={data.company}
    neew={data.new}
    featured={data.featured}
    position={data.position}
    role={data.role}
    level={data.level}
    postedAt={data.postedAt}
    contract={data.contract}
    location={data.location}
    languages={data.languages}
    tools={data.tools}
    logo={data.logo} />);
  return (
    <div className="App">
      <Header />
      <Filter />
      <div className="content">{tablets}</div>
    </div>
  );
}

export default App;
