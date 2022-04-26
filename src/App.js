import "./App.css";
import PeopleActivity from "./components/ActivityByParticipants";
import RandomActivity from "./components/RandomActivity";

function App() {
  return (
    <div className="app">
      <RandomActivity />
      <PeopleActivity />
    </div>
  );
}

export default App;
