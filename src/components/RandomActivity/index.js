import Button from "../Button";
import React, { useState, useEffect } from "react";

const RandomActivity = () => {
  const [activity, setActivity] = useState();
  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    const response = await fetch("http://www.boredapi.com/api/activity");
    const data = await response.json();
    console.log(data);
    setActivity(data.activity);
  };

  return (
    <div>
      <h1>{activity}</h1>
      <Button />
    </div>
  );
};

export default RandomActivity;
