import React, { useState, useEffect } from "react";
import Button from "../Button";
const SortByType = () => {
  const [activity, setActivity] = useState();
  const [type, setType] = useState();
  const [inputType, setInputType] = useState();

  const getType = async () => {
    const response = await fetch(
      "http://www.boredapi.com/api/activity?type=" + inputType
    );
    const data = await response.json();
    setActivity(data.activity);
    setType(data.type);
  };

  function changeType(e) {
    setInputType(e.target.value);
  }

  useEffect(() => {
    getType();
  }, []);

  return (
    <div>
      <form onSubmit={() => getType()}>
        <div>
          <label htmlFor="type">Type of activity</label>
          <select
            name="type"
            id="type"
            defaultValue={"social"}
            onChange={changeType}
          >
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
      </form>
      <Button buttonText={type} type="submit" handleClick={() => getType()} />
      <h3>{activity}</h3>
      <p>{type}</p>
    </div>
  );
};

export default SortByType;
