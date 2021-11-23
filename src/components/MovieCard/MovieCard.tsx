import React from "react";
import { Link } from "react-router-dom";

// Routes
import { PAGES } from "../../constants/routes";

// Utils
import { MovieCardProps } from "../../utils/types";

// Styles
import "./MovieCard.scss";

export default function MovieCard({ item }: MovieCardProps) {
  return (
    <Link
      className="movie-card-wrapper flex-column flex-center-center col col-12 col-sm-6 col-md-3"
      to={`${PAGES.DETAIL}/${item.id}`}
    >
      {/* Image */}
      <img className="movie-card-image" src={item.image} alt={item.id} />

      {/* Text */}
      <div className="movie-card-text text-center ft-dark">
        <h5 className="fw-bold text-truncate">
          {item.title ? item.title : item.name}
        </h5>
        <h5 className="fw-light">{item.year}</h5>
      </div>
    </Link>
  );
}
