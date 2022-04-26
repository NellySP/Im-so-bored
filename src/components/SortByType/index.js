import React, { useState, useEffect } from "react";

const SortByType = () => {
  const [type, setType] = useState();

  const getType = async () => {
    const response = await fetch(
      "http://www.boredapi.com/api/activity?type={type}"
    );
    const data = await response.json();
    console.log(data);
    setType(data.type);
  };
  console.log(type);

  function changeType(e) {
    setType(e.target.value);
  }

  useEffect(() => {
    getType();
  }, []);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="type">Type of activity</label>
          <select name="type" id="type" value={type} onChange={changeType}>
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
      <h1>{type}</h1>
    </div>
  );
};

export default SortByType;
