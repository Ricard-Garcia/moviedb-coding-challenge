import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import { PAGES } from "../../constants/routes";

// Pages
import Home from "../../pages/Home";
import Detail from "../../pages/Detail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGES.DETAIL} element={<Detail />} />
        <Route path={PAGES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
