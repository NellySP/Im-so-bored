import React from "react";
import "./App.css";
import RandomActivity from "./components/RandomActivity";
import SpecifyActivity from "./components/SpecifyActivity";
import { useState } from "react";

function App() {
  React.useEffect(() => {
    document.title = "Got nothing to do??";
  }, []);

  let date = new Date().getFullYear();
  const [activity, setActivity] = useState();
  const [type, setType] = useState();
  const [participants, setParticipants] = useState();

  const [show, setShow] = useState(false);

  return (
    <div className="app">
      <p>{document.title}</p>
      <div className="activity-wrapper">
        <h2>{activity}</h2>
        {show ? (
          <div className="specify-box">
            <p>Number of participants: {participants}</p>
            <p>Category: {type}</p>
          </div>
        ) : null}
      </div>
      <RandomActivity
        activity={activity}
        setActivity={setActivity}
        show={show}
        setShow={setShow}
      />
      <SpecifyActivity
        activity={activity}
        setActivity={setActivity}
        type={type}
        setType={setType}
        participants={participants}
        setParticipants={setParticipants}
        show={show}
        setShow={setShow}
      />
      <p>© {date}</p>
    </div>
  );
}

export default App;
