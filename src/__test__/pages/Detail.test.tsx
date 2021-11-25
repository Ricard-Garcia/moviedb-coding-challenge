import React from "react";
import { screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// Utils
import { renderWithRouter } from "../test-utils/utils";

// Routes
import { PAGES } from "../../constants/routes";

// Pages
import Detail from "../../pages/Detail";

describe("Render Detail", () => {
  afterEach(cleanup);

  test("Default detail blocks are rendered", () => {
    //! FIX read location state
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
