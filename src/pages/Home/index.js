import React, { useState, useEffect } from "react";

const HomePage = () => {
    .fetch("http://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data => {
        document.getElementById("task").innerText = data.activity;
    })
;

  return (
    <div className="App">
      <p id="activity"></p>
    </div>
  );
  };

export default HomePage;
