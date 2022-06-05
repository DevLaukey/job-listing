import "./App.css";
import Header from "./components/Header";
import Tablet from "./components/Tablet";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Tablet />
      </div>
    </div>
  );
}

export default App;
