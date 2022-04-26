import "./App.css";
import PeopleActivity from "./components/ActivityByParticipants";
import RandomActivity from "./components/RandomActivity";
import SortByType from "./components/SortByType";

function App() {
  return (
    <div className="app">
      <RandomActivity />

      <SortByType />

      <PeopleActivity />
    </div>
  );
}

export default App;
