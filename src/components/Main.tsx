import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Projects from "./Projects";
import Stack from "./Stack";
import "../css/Main.css";
import About from "./About";

function Main() {
  return (
    <div className="Main">
      <Header />
      <Banner />
      <About />
      <Stack />
      <Projects />
    </div>
  );
}

export default Main;
