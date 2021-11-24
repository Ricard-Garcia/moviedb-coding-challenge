import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// Routes
import { OUTSIDE } from "../../constants/routes";

// Redux
import ReduxProvider from "../../redux/provider";

// Pages
import Footer from "../../components/Footer";

describe("Render Header", () => {
  afterEach(cleanup);

  test("Creditest are loaded", () => {
    render(
      <Router>
        <ReduxProvider>
          <Footer />
        </ReduxProvider>
      </Router>
    );
    // Footer credits
    const credits = screen.getByTestId("footer-credits");
    expect(credits).toBeInTheDocument();
  });

  test("Link to repository is rendered and working", () => {
    render(
      <Router>
        <ReduxProvider>
          <Footer />
        </ReduxProvider>
      </Router>
    );
    // Repository link
    const repoLink = screen.getByTestId("footer-repository");
    expect(repoLink).toHaveAttribute("href", OUTSIDE.REPOSITORY);
  });
});
