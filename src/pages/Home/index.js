import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [activity, setActivity] = useState();
  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = async () => {
    const response = await fetch("http://www.boredapi.com/api/activity");
    const data = await response.json();
    setActivity(data.activity);
  };

  return (
    <div>
      <h1>{activity}</h1>
    </div>
  );
};

export default HomePage;
