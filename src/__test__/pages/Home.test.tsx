import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { act } from "react-dom/test-utils";

import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

// Redux
import ReduxProvider from "../../redux/provider";

// Pages
import Home from "../../pages/Home";
import ViewToggle from "../../components/ViewToggle";

describe("Render Home", () => {
  afterEach(cleanup);

  test("View toggle is rendered", () => {
    render(
      <ReduxProvider>
        <ViewToggle />
      </ReduxProvider>
    );
    // View toggle
    const viewToggle = screen.getByTestId("view-toggle");
    expect(viewToggle).toBeInTheDocument();
  });

  test("Default home title is rendered", async () => {
    await waitFor(() => {
      render(
        <Router>
          <ReduxProvider>
            <Home />
          </ReduxProvider>
        </Router>
      );

      // Home title
      const homeTitle = screen.getByText(/Popular movies/i);
      expect(homeTitle).toBeInTheDocument();
    });
  });
});
