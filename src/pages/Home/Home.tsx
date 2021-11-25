import React, { useEffect, useState } from "react";

// API
import { getPopularMovies } from "../../api/movies-api";
import { getPopularShows } from "../../api/shows-api";

// Utils
import { filterMoviesArray } from "../../utils/filters";
import { MovieObject, ShowObject } from "../../utils/types";

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
    const filteredArray = filterMoviesArray(data);
    setContentArray(filteredArray);

    // Stop loading
    setIsLoading(false);
  };

  const loadPopularShows = async () => {
    // Start loading
    setIsLoading(true);

    const data = await getPopularShows();
    const filteredArray = filterMoviesArray(data);
    setContentArray(filteredArray);

    // Stop loading
    setIsLoading(false);
  };

  // Load/update component
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
    <Layout docTitle={showMovies ? "Popular movies" : "Popular shows"}>
      {/* Top */}
      <div id="homeTop" className="flex-between-center p-5">
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
          contentArray.map((item: MovieObject | ShowObject) => (
            <MovieCard key={item.id} item={item} />
          ))
        )}
      </div>
    </Layout>
  );
}
