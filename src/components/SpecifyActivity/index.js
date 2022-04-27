import Button from "../Button";
import React, { useState, useEffect } from "react";

const SpecifyActivity = ({
  activity,
  setActivity,
  type,
  setType,
  participants,
  setParticipants,
}) => {
  // const [participants, setParticipants] = useState();
  const [inputParticipants, setinputParticipants] = useState();
  const [inputType, setInputType] = useState();

  const getActivity = async () => {
    const response = await fetch(
      "https://www.boredapi.com/api/activity?participants=" +
        inputParticipants +
        "&type=" +
        inputType
    );
    const data = await response.json();
    setActivity(data.activity);
    setParticipants(data.participants);
    setType(data.type);
  };

  function changeType(e) {
    setInputType(e.target.value);
  }

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div>
      {/* <p>Number of participants: {participants}</p>
      <p>category: {type}</p> */}
      <div className="participants-form">
        <label htmlFor="participants">Number of participants</label>
        <input
          onChange={(event) => setinputParticipants(event.target.value)}
          type="number"
          name="participants"
          id="participants"
          min="1"
          max="5"
          // defaultValue={1}
        />
        <label htmlFor="type">Type of activity</label>
        <select name="type" id="type" onChange={changeType}>
          <option value=""></option>
          <option value="">Random</option>
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
        <Button
          buttonText="Give me someting new!"
          type="submit"
          handleClick={() => getActivity()}
        />
      </div>
    </div>
  );
};

export default SpecifyActivity;
