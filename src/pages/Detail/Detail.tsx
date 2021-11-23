import React, { useState, useEffect } from "react";
import { useMatch, useLocation } from "react-router-dom";

// API
import { getMovieById } from "../../api/movies-api";
import { getShowById } from "../../api/shows-api";

// Utils
import { filterItem } from "../../utils/filters";

// Routes
import { PAGES } from "../../constants/routes";

// Components
import Layout from "../../components/Layout";

export default function Detail() {
  // State
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMovie, setIsMovie] = useState<boolean>(true);

  // Target id
  const { id } = useMatch(`${PAGES.DETAIL}/:id`)!.params;
  const location = useLocation();

  // Handlers & loaders
  const loadDetails = async () => {
    // Start loading
    setIsLoading(true);

    if (typeof id === "string") {
      // Movie
      if (isMovie) {
        const data = await getMovieById(id);
        const filteredItem = filterItem(data);
        console.log(filteredItem);
      }
      // Show
      else {
        // const data = await getShowById(id);
        // console.log(data.data);
      }
    }

    // Stop loading
    setIsLoading(false);
  };

  // Load/update component
  useEffect(() => {
    setIsMovie(location.state.isMovie);

    loadDetails();
  }, []);

  return (
    <Layout>
      {/* Top */}
      <div id="detailTop" className="flex-between-center px-5 pb-5">
        <h1 className="text-uppercase">Movie/Show name</h1>
      </div>
      {/* Bottom */}
      <div id="detailBottom">
        <p>Content goes here</p>
      </div>
    </Layout>
  );
}
