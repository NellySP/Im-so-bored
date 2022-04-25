import Button from "../Button";
import React, { useState, useEffect } from "react";

const RandomActivity = () => {
  const [activity, setActivity] = useState();

  const getActivity = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity");
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
      <Button handleClick={() => getActivity()} />
    </div>
  );
};

export default RandomActivity;
