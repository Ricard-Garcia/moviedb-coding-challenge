import React from "react";
import { Link } from "react-router-dom";

// Routes
import { PAGES } from "../../constants/routes";

// Utils
import { MovieCardProps } from "../../utils/types";

// Styles
import "./MovieCard.scss";

export default function MovieCard({
  item,
}: MovieCardProps): React.ReactElement {
  let isMovie: boolean = false;

  if (item.title) {
    isMovie = true;
  }

  return (
    <Link
      className="movie-card-wrapper flex-column flex-center-center col col-12 col-sm-6 col-md-3"
      to={`${PAGES.DETAIL}/${item.id}`}
      state={{ isMovie: isMovie }}
    >
      {/* Image */}
      <div className="movie-card-image-wrapper">
        <img className="movie-card-image" src={item.image} alt={item.id} />
      </div>
      {/* Text */}
      <div className="movie-card-text text-center fs-medium ft-light text-uppercase">
        <h5 className="fw-bold text-truncate">
          {isMovie ? item.title : item.name}
        </h5>
        <h5 className="fw-light">{item.year}</h5>
      </div>
    </Link>
  );
}
