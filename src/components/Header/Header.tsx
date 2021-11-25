import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import ThemeToggle from "../ThemeToggle";

// Utils
import setTheme from "../../utils/theme";
import { PAGES } from "../../constants/routes";

export default function Header(): React.ReactElement {
  // Redux
  const globalState = useSelector((state: any) => state.global);

  // Theme colors
  const [primary, secondary] = setTheme(globalState.isLight);

  return (
    <header
      className={`flex-between-center p-3 px-5 bg-${primary} ft-${secondary}`}
    >
      {/* Title */}
      <Link data-testid="home-link" className="fw-bold m-0" to={PAGES.HOME}>
        The MovieDB Challenge
      </Link>
      {/* Theme toggle */}
      <ThemeToggle />
    </header>
  );
}
