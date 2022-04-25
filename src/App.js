import "./App.css";
import RandomActivity from "./components/RandomActivity";
import Button from "./components/Button";

function App() {
  const test = async () => {
    console.log("hej!");
  };

  return (
    <div className="app">
      <RandomActivity />
    </div>
  );
}

export default App;
