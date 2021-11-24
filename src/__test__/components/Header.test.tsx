import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// Routes
import { PAGES } from "../../constants/routes";

// Redux
import ReduxProvider from "../../redux/provider";

// Pages
import Header from "../../components/Header";
import ThemeToggle from "../../components/ThemeToggle";

describe("Render Header", () => {
  afterEach(cleanup);

  render(
    <Router>
      <ReduxProvider>
        <Header />
      </ReduxProvider>
    </Router>
  );

  test("Link to home is rendered", () => {
    // Main link
    const homeLink = screen.getByTestId("home-link");
    expect(homeLink).toHaveAttribute("href", PAGES.HOME);
  });

  test("Theme toggle is rendered", () => {
    render(
      <ReduxProvider>
        <ThemeToggle />
      </ReduxProvider>
    );
    // Check that has theme toggler
    const themeToggle = screen.getByTestId("theme-toggle");
    expect(themeToggle).toBeInTheDocument();
  });
});
