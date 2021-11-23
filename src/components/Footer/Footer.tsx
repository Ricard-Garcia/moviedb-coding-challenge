import React from "react";

// Routes
import { OUTSIDE } from "../../constants/routes";

export default function Footer() {
  return (
    <footer className="row m-0">
      <p className="col-12 col-md-6 px-0">Ricard Garcia © 2021</p>
      <a
        href={OUTSIDE.REPOSITORY}
        className="d-none d-md-block fw-bold text-end col-6 px-0"
      >
        Site's Github repository
      </a>
    </footer>
  );
}
