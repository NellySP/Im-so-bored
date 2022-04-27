import React from "react";
import "./App.css";
import RandomActivity from "./components/RandomActivity";
import SpecifyActivity from "./components/SpecifyActivity";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState();

  return (
    <div className="app">
      {/* <div className="activity-wrapper"> */}
      <h1>{activity}</h1>
      {/* </div> */}
      <RandomActivity activity={activity} setActivity={setActivity} />
      <SpecifyActivity activity={activity} setActivity={setActivity} />
    </div>
  );
}

export default App;
