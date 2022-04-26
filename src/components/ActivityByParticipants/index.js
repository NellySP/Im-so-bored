import Button from "../Button";
import React, { useState, useEffect } from "react";

const PeopleActivity = () => {
  const [activity, setActivity] = useState();
  const [participants, setParticipants] = useState();
  const [inputParticipants, setinputParticipants] = useState();

  const getActivity = async () => {
    const response = await fetch(
      "https://www.boredapi.com/api/activity?participants=" + inputParticipants
    );
    const data = await response.json();
    setActivity(data.activity);
    setParticipants(data.participants);
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div>
      <h2>{activity}</h2>
      <h2>{participants}</h2>
      <div className="participants-form">
        <label htmlFor="participants">Number of participants</label>
        <input
          onChange={(event) => setinputParticipants(event.target.value)}
          type="number"
          name="participants"
          id="participants"
          min="1"
          max="5"
          defaultValue={1}
        />

        <Button
          buttonText="Give me someting new!"
          type="submit"
          handleClick={() => getActivity()}
        />
      </div>
    </div>
  );
};

export default PeopleActivity;
