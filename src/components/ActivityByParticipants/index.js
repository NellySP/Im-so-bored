import Button from "../Button";
import React, { useState, useEffect } from "react";

const PeopleActivity = () => {
  const [activity, setActivity] = useState();
  const [participants, setParticipants] = useState();

  const getActivity = async () => {
    const response = await fetch(
      "http://www.boredapi.com/api/activity?participants=:participants"
    );
    const data = await response.json();
    console.log(data);
    setActivity(data.activity);
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div>
      <h1>{activity}</h1>
      <div className="participants-form">
        <label htmlFor="participants">Number of participants</label>
        <input
          onChange={(event) => setParticipants(event.target.value)}
          type="number"
          name="participants"
          id="participants"
          min="1"
          max="5"
          defaultValue={1}
        />
      </div>
      <Button handleClick={() => getActivity()} />
    </div>
  );
};

export default PeopleActivity;
