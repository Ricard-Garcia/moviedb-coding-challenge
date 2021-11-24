import React, { useState, useEffect } from "react";
import { useMatch, useLocation } from "react-router-dom";
import { MdStarBorder } from "react-icons/md";

// API
import { getMovieById } from "../../api/movies-api";
import { getShowById } from "../../api/shows-api";

// Utils
import { filterItem } from "../../utils/filters";
import { CastObject } from "../../utils/types";

// Routes
import { PAGES } from "../../constants/routes";

// Styles
import "./Detail.scss";

// Components
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import CastCard from "../../components/CastCard";
import MovieCard from "../../components/MovieCard";

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
        setShownItem(filteredItem);
      }
      // Show
      else {
        const data = await getShowById(id);
        const filteredItem = filterItem(data);
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

  useEffect(() => {
    loadDetails();
  }, [location]);

  return (
    <Layout>
      {/* Top */}
      <div
        id="detailTop"
        data-testid="detail-top"
        className="flex-between-center container-fluid p-0"
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <img src={shownItem.image} alt={shownItem.image} />
        )}
      </div>

      {/* Middle */}
      <div
        id="detailMiddle"
        data-testid="detail-middle"
        className="container-fluid row m-0 p-0 p-5"
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {/* Middle top */}
            {/* Title & year */}
            <div className="row p-0 m-0 mb-5">
              <div className="col-12 col-md-9 col-lg-10 ft-large fw-bold text-uppercase text-truncate">
                {isMovie ? shownItem.title : shownItem.name}
                <span className="ms-4 col-12 col-md-2 text-end ft-large fw-light">
                  ({shownItem.year})
                </span>
              </div>
              {/* Vote */}
              <div className="col-12 col-md-3 col-lg-2 text-end ft-large fw-light flex-center-end p-0">
                {shownItem.vote} <MdStarBorder className="fs-large mb-3" />
              </div>
            </div>

            {/* Middle left */}
            <div className="col col-12 col-md-6 p-0 pe-3 row p-0 m-0">
              {/* Overview */}
              <div className="col-12 col-md-8 mb-5">
                <h5 className="ft-medium fw-bold mb-4">Overview</h5>
                <p className="ft-small">{shownItem.overview}</p>
              </div>
              {/* Genres */}
              <div className="col-12 col-md-4 mb-5">
                <h5 className="ft-medium fw-bold mb-4">Genres</h5>
                <div>
                  {shownItem.genres.map((genre: string) => (
                    <p key={genre} className="ft-small">
                      {genre}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle right */}
            <div className="col col-12 col-md-6 p-0 ps-3">
              {/* Cast */}
              <div className="mb-5">
                <h5 className="ft-medium fw-bold mb-4">Cast</h5>
                <div className="row p-0 m-0 row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2">
                  {shownItem.cast.map((cast: CastObject) => (
                    <CastCard key={cast.name} cast={cast} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Bottom */}
      <div id="detailBottom" data-testid="detail-bottom">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="mb-5">
            <h5 className="ft-medium fw-bold mb-4 px-5">Similar</h5>
            <div className="row m-0">
              {shownItem.similar.map((item: any) => (
                <MovieCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
