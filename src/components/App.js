import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <h3 data-ns-test="project-name">React app</h3>
      <h4 data-ns-test="project-description">Lots of Reactive apps</h4>
      <h3 data-ns-test="project-name">Food app</h3>
      <h4 data-ns-test="project-description">Realtime food delivery app</h4>
    </>
  );
};

export default App;
