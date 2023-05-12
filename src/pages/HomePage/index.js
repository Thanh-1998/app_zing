import React from "react";
import Gallery from "./components/Gallery";
import Release from "./components/Release";

const HomePage = () => {
  return (
    <div className="container">
      <Gallery />

      <section className="section">
        <Release />
      </section>
    </div>
  )
};

export default HomePage;