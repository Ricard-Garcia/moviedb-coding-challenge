import React, { useEffect, useState } from "react";

// Components
import Layout from "../../components/Layout";

export default function Home() {
  // State
  const [showMovies, setShowMovies] = useState<boolean>(true);
  const [contentArray, setContentArray] = useState<any>([]);

  // Handlers & loaders
  const handleToggleView = () => {
    setShowMovies(!showMovies);
    console.log(showMovies);
  };

  // Load/Update component
  useEffect(() => {
    console.log("Loaded default");
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
      <button type="button" onClick={handleToggleView}>
        Toggle
      </button>
    </Layout>
  );
}
