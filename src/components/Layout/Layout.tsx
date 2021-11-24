import React from "react";
import { Helmet } from "react-helmet-async";

// Utils
import { LayoutProps } from "../../utils/types";

// Styles
import "./Layout.scss";

// Components
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

export default function Layout({
  docTitle,
  children,
}: LayoutProps): React.ReactElement {
  return (
    <>
      {/* Dynamic header */}
      <Helmet>
        <title>{docTitle}</title>
      </Helmet>
      {/* Actual layout */}
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
