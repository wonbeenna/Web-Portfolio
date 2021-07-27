import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Projects from "./Projects";
import "../css/Main.css";
import About from "./About";
import Footer from "./Footer";

function Main() {
  return (
    <div className="Main">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Main;
