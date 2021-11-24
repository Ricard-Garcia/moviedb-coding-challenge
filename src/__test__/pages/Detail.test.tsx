import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

// Utils
import { renderWithRouter } from "../test-utils/utils";

// Routes
import { PAGES } from "../../constants/routes";

// Redux
import ReduxProvider from "../../redux/provider";

// Pages
import Detail from "../../pages/Detail";

describe("Render Detail", () => {
  afterEach(cleanup);

  test("Default detail blocks are rendered", () => {
    // TODO read location state
    renderWithRouter(<Detail />, {
      route: `${PAGES.DETAIL}/505`,
    });

    // Top block
    const detailTop = screen.getByTestId("detail-top");
    expect(detailTop).toBeInTheDocument();
    // Middle bloc
    const detailMiddle = screen.getByTestId("detail-middle");
    expect(detailMiddle).toBeInTheDocument();
    // Bottom block
    const detailBottom = screen.getByTestId("detail-bottom");
    expect(detailBottom).toBeInTheDocument();
  });
});
