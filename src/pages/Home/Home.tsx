import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// API
import { getPopularMovies } from "../../api/movies-api";

// Utils
import { filterData } from "../../utils/filters";

// Components
import Layout from "../../components/Layout";
import ViewToggle from "../../components/ViewToggle";

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

  const loadPopularMovies = async () => {
    const data = await getPopularMovies();
    const filteredArray = filterData(data);
    console.log("Popular movies: ", filteredArray);
  };

  // Load/Update component
  useEffect(() => {
    loadPopularMovies();
  }, []);

  return (
    <Layout>
      {/* Top */}
      <div id="homeTop" className="flex-between-center px-5 pb-5">
        <h1 className="text-uppercase">
          {showMovies ? "Popular movies" : "Popular shows"}
        </h1>
        <ViewToggle handleChange={handleToggleView} />
      </div>

      {/* Bottom */}
      <div id="homeBottom">
        <p>Content goes here</p>
      </div>
    </Layout>
  );
}
