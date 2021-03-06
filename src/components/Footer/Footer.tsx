import React from "react";
import { useSelector } from "react-redux";

// Routes
import { OUTSIDE } from "../../constants/routes";

// Utils
import setTheme from "../../utils/theme";

export default function Footer(): React.ReactElement {
  // Redux
  const globalState = useSelector((state: any) => state.global);

  // Theme colors
  const [primary, secondary] = setTheme(globalState.isLight);

  return (
    <footer
      className={`flex-between-center bg-${primary} ft-${secondary} row m-0 px-5`}
    >
      <p className="col-12 col-md-6 m-0 px-0" data-testid="footer-credits">
        Ricard Garcia @ 2021
      </p>
      <a
        href={OUTSIDE.REPOSITORY}
        className="d-none d-md-block fw-light text-end col-6 px-0"
        data-testid="footer-repository"
      >
        Site's Github repository
      </a>
    </footer>
  );
}
