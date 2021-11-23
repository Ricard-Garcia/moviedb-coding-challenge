import React from "react";

// Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sass/main.scss";

// Components
import Router from "./components/Router";

function App() {
  return (
    <div id="appWrapper">
      <Router />
    </div>
  );
}

export default App;
