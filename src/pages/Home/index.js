import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [data, setFetch] = useState[null];

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setFetch(data));
  }, []);

  return <h1>{data.activity}</h1>;
};

export default HomePage;
