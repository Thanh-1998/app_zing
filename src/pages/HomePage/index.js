import React from "react";
import Gallery from "./CompGallery/Gallery";
import Release from "./CompRelease/Release";
import Relax from "./CompRelax/Relax";
import ChartNew from "./CompChart/ChartNew";

const HomePage = () => {
  return (
    <div className="container">
      <Gallery />

      <section className="section">
        <Release />
      </section>

      <section className="section">
        <Relax />
      </section>

      <section className="section">
        <ChartNew />
      </section>
    </div>
  )
};

export default HomePage;