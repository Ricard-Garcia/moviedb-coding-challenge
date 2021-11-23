import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// API
import { getPopularMovies } from "../../api/movies-api";
import { getPopularShows } from "../../api/shows-api";

// Utils
import { filterData } from "../../utils/filters";

// Components
import Layout from "../../components/Layout";
import ViewToggle from "../../components/ViewToggle";
import Spinner from "../../components/Spinner";
import MovieCard from "../../components/MovieCard";

export default function Home() {
  // State
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showMovies, setShowMovies] = useState<boolean>(true);
  const [contentArray, setContentArray] = useState<any>([]);

  // Handlers & loaders
  const handleToggleView = (): void => {
    setShowMovies(!showMovies); // Component state
  };

  const loadPopularMovies = async () => {
    // Start loading
    setIsLoading(true);

    const data = await getPopularMovies();
    const filteredArray = filterData(data);
    setContentArray(filteredArray);
    console.log("MOVIES", filteredArray);

    // Stop loading
    setIsLoading(false);
  };

  const loadPopularShows = async () => {
    // Start loading
    setIsLoading(true);

    const data = await getPopularShows();
    console.log(data.data);
    // const filteredArray = filterData(data);
    // setContentArray(filteredArray);
    // console.log("SHOWS", filteredArray);

    // Stop loading
    setIsLoading(false);
  };

  // Load/Update component
  useEffect(() => {
    loadPopularMovies();
  }, []);

  useEffect(() => {
    if (showMovies) {
      loadPopularMovies();
    } else {
      loadPopularShows();
    }
  }, [showMovies]);

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
      <div id="homeBottom" className="row p-0">
        {isLoading ? (
          <Spinner />
        ) : (
          // TODO solve bug (MovieObject | ShowObject title)
          contentArray.map((item: any) => <MovieCard item={item} />)
        )}
      </div>
    </Layout>
  );
}
