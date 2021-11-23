import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import Layout from "../../components/Layout";

export default function Home() {
  // State
  const [showMovies, setShowMovies] = useState<boolean>(true);
  const [contentArray, setContentArray] = useState<any>([]);

  // Redux
  const globalState = useSelector((state: any) => state.global);

  // Handlers & loaders
  const handleToggleView = (): void => {
    setShowMovies(!showMovies); // Component state
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
