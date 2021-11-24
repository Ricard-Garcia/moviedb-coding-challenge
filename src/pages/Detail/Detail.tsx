import React, { useState, useEffect } from "react";
import { useMatch, useLocation } from "react-router-dom";

// API
import { getMovieById } from "../../api/movies-api";
import { getShowById } from "../../api/shows-api";

// Utils
import { filterItem } from "../../utils/filters";

// Routes
import { PAGES } from "../../constants/routes";

// Styles
import "./Detail.scss";

// Components
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";

export default function Detail() {
  // State
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shownItem, setShownItem] = useState<any>({});

  // Target id
  const { id } = useMatch(`${PAGES.DETAIL}/:id`)!.params;
  const location = useLocation();
  const isMovie = location.state.isMovie;

  // Handlers & loaders
  const loadDetails = async () => {
    // Start loading
    setIsLoading(true);

    // Movie
    if (typeof id === "string") {
      if (isMovie) {
        const data = await getMovieById(id);
        const filteredItem = filterItem(data);
        console.log("MOVIE", filteredItem);
        setShownItem(filteredItem);
      }
      // Show
      else {
        const data = await getShowById(id);
        const filteredItem = filterItem(data);
        console.log("SHOW", filteredItem);
        setShownItem(filteredItem);
      }
    }

    // Stop loading
    setIsLoading(false);
  };

  // Load/update component
  useEffect(() => {
    loadDetails();
  }, []);

  return (
    <Layout>
      {/* Top */}
      <div
        id="detailTop"
        className="flex-between-center container-fluid p-0 pb-5"
      >
        <img src={shownItem.image} alt={shownItem.image} />
      </div>
      {/* Bottom */}
      <div id="detailBottom">
        {isLoading ? (
          <Spinner />
        ) : (
          <div id="itemWrapper" className="row px-5 m-0">
            {/* Left */}
            <div id="itemLeft" className="col col-12 col-md-6 p-0">
              {/* Title & year */}
              <h1 className="fw-bold">
                {isMovie ? shownItem.title : shownItem.name} | {shownItem.year}
              </h1>
            </div>

            {/* Right */}
          </div>
        )}
      </div>
    </Layout>
  );
}
