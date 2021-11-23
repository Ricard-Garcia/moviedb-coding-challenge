import React from "react";
import { useSelector } from "react-redux";

// Components
import ThemeToggle from "../ThemeToggle";

// Utils
import setTheme from "../../utils/theme";

export default function Header() {
  // Redux
  const globalState = useSelector((state: any) => state.global);

  // Theme colors
  const [primary, secondary] = setTheme(globalState.isLight);

  return (
    <header
      className={`flex-between-center p-3 px-5 bg-${primary} ft-${secondary}`}
    >
      {/* Title */}
      <p className="fw-bold m-0">The MovieDB Challenge</p>
      {/* Theme toggle */}
      <ThemeToggle />
    </header>
  );
}
