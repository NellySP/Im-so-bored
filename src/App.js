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
  const [hide, setHide] = useState(true);

  return (
    <div className="app">
      <p>{document.title}</p>
      <div className="activity-wrapper">
        <h1>{activity}</h1>
        {hide ? <h2>Click button for randomly generated suggestion!</h2> : null}
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
        hide={hide}
        setHide={setHide}
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
