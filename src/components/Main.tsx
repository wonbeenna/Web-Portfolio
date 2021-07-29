import React, { useEffect, useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Projects from "./Projects";
import "../css/Main.css";
import About from "./About";
import Footer from "./Footer";

function Main() {
  const [ScrollY, setScrollY] = useState<number>(0);
  const [scrollBtn, setScrollBtn] = useState<boolean>(false);

  const ScrollHandler = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 500) {
      setScrollBtn(true);
    } else {
      setScrollBtn(false);
    }
  };

  const TopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setScrollBtn(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", ScrollHandler);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", ScrollHandler);
    };
  });

  return (
    <div className="Main">
      <button
        className={scrollBtn ? "Main__topBtn active" : "Main__topBtn"}
        onClick={TopHandler}
      >
        <p>Top</p>
      </button>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Main;
