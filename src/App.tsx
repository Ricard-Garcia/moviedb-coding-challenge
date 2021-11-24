import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toggle/style.css";
import "./sass/main.scss";

// Components
import Router from "./components/Router";

function App() {
  return (
    <div id="appWrapper">
      <HelmetProvider>
        {/* Dynamic document title */}
        <Helmet
          titleTemplate="%s | MovieDb"
          defaultTitle="MovieDb Coding Challenge"
        >
          <meta
            name="description"
            content="Check popular movies and tv shows"
          />
        </Helmet>
        {/* App router */}
        <Router />
      </HelmetProvider>
    </div>
  );
}

export default App;
