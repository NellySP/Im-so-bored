import Button from "../Button";
import React, { useState, useEffect } from "react";
import "./specify.css";

const SpecifyActivity = ({
  activity,
  setActivity,
  type,
  setType,
  participants,
  setParticipants,
  show,
  setShow,
}) => {
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
    setShow(true);
  };

  function changeType(e) {
    setInputType(e.target.value);
  }

  useEffect(() => {
    function getActivity() {}
    getActivity();
  }, []);

  return (
    <div>
      <p>Want someting more specific?</p>
      <div className="participants-form">
        <div className="wrapper">
          <select
            onChange={(event) => setinputParticipants(event.target.value)}
            type="number"
            name="participants"
            id="participants"
          >
            <option value="">Number of participants</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="wrapper">
          <select name="type" id="type" onChange={changeType}>
            <option>Type of activity</option>
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
        </div>
      </div>
      <Button
        buttonText="Give me someting new!"
        type="submit"
        handleClick={() => getActivity()}
      />
    </div>
  );
};

export default SpecifyActivity;
