import Button from "../Button";
import React, { useEffect } from "react";

const RandomActivity = ({ activity, setActivity }) => {
  const getActivity = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const data = await response.json();
    setActivity(data.activity);
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <div>
      <Button handleClick={() => getActivity()} />
    </div>
  );
};

export default RandomActivity;
