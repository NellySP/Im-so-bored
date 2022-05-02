import React, { useEffect } from "react";
import Button from "../Button";

const RandomActivity = ({
  activity,
  setActivity,
  show,
  setShow,
  hide,
  setHide,
}) => {
  const getActivity = async () => {
    const response = await fetch("https://www.boredapi.com/api/activity");
    const data = await response.json();
    setActivity(data.activity);
    setShow(false);
    setHide(false);
  };

  useEffect(() => {
    function getActivity() {}
    getActivity();
  }, []);

  return (
    <div>
      <Button buttonText="Choose for me!" handleClick={() => getActivity()} />
    </div>
  );
};

export default RandomActivity;
