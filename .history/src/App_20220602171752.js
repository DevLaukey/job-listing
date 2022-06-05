import "./App.css";
import Header from "./components/Header";
import Tablet from "./components/Tablet";
import data from "./assets/data.json"

function App() {
  const tablets = data.map((data) => 
    <Tablet img={data.logo} />);
  return (
    <div className="App">
      <Header />
      <div className="content">
       {tablets}
      </div>
    </div>
  );
}

export default App;
