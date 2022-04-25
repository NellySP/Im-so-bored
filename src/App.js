import "./App.css";
import RandomActivity from "./components/RandomActivity";
import Button from "./components/Button";

function App() {
  return (
    <div className="app">
      <RandomActivity />
      <Button buttonText="Testa en annan!"></Button>
    </div>
  );
}

export default App;
