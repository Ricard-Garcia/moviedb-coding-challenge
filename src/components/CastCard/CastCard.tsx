import React from "react";

// Utils
import { CastCardProps } from "../../utils/types";

// Styles
import "./CastCard.scss";

export default function CastCard({ cast }: CastCardProps): React.ReactElement {
  return (
    <div className="cast-card-wrapper flex-start-center p-0 m-0 mb-2">
      {/* Image */}
      <div className="me-3">
        <img src={cast.image} alt={cast.name} />
      </div>

      {/* Text */}
      <div>
        <p className="mb-0 fw-bold">{cast.name}</p>
        <p className="mb-0">{cast.character}</p>
      </div>
    </div>
  );
}
