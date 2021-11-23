import React from "react";

// Components
import Layout from "../../components/Layout";

export default function Detail() {
  return (
    <Layout>
      {/* Top */}
      <div id="detailTop" className="flex-between-center px-5 pb-5">
        <h1 className="text-uppercase">Movie/Show name</h1>
      </div>
      {/* Bottom */}
      <div id="detailBottom">
        <p>Content goes here</p>
      </div>
    </Layout>
  );
}
