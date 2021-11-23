import React from "react";

// Utils
import { OnlyChildren } from "../../utils/types";

// Styles
import "./Layout.scss";

// Components
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

export default function Layout({ children }: OnlyChildren) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
