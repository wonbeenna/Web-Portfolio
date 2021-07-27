import React, { useEffect, useRef, useState } from "react";
import "../css/Projects.css";
import first from "../img/first.png";
import final from "../img/final.png";
import firstLogo from "../img/firstLogo.png";
import finalLogo from "../img/finalLogo.png";
import github from "../img/github.png";

function Projects() {
  // const TOTAL_SLIDES = 1;
  const [currentSlide, setCurrentSlide] = useState<any>(0);
  const slideRef = useRef<any>(null);

  const firstPage = () => {
    setCurrentSlide(0);
  };
  const finalPage = () => {
    setCurrentSlide(-100);
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  // const changePage = () => {
  //   clearTimeout(setTimeout(changePage, 10000));
  //   currentSlide === -100 * TOTAL_SLIDES
  //     ? setCurrentSlide(0)
  //     : setCurrentSlide(currentSlide - 100);
  // };
  // useEffect(() => {
  //   setTimeout(changePage, 10000);
  //   return () => {
  //     clearTimeout(setTimeout(changePage, 10000));
  //   };
  // }, [currentSlide]);

  return (
    <div className="projects">
      <div className="projects__title">Projects</div>

      <div className="projects__buttons">
        {currentSlide === 0 ? (
          <button className="projects__button">First Project</button>
        ) : (
          <button className="projects__button__invalid" onClick={firstPage}>
            First Project
          </button>
        )}
        {currentSlide === -100 ? (
          <button className="projects__button">Final Project</button>
        ) : (
          <button className="projects__button__invalid" onClick={finalPage}>
            Final Project
          </button>
        )}
      </div>

      <div className="projects__box" ref={slideRef}>
        {currentSlide === 0 ? (
          <div className="projects__contents">
            <div className="projects__content">
              <div className="projects__names">
                <img src={firstLogo} alt="" />
                <div className="projects__name">Don't Stop</div>
              </div>

              <div className="projects__introduce">
                스터디 모집 및 공부시간 체크
              </div>

              <div className="projects__date">
                <img src={firstLogo} alt="" />
                <p>4명</p>
                <img src={firstLogo} alt="" />
                <p>2주</p>
              </div>

              <div className="projects__Stacks">
                <img src={firstLogo} alt="" />
                <p>Javascript, React, Redux, AWS(S3)</p>
              </div>

              <div className="projects__url">
                <img src={firstLogo} alt="" />
                <a href="" target="_blank" rel="noreferrer noopener">
                  Link
                </a>
                <img src={github} alt="" />
                <a
                  className="projects__github"
                  href=""
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
              </div>
            </div>
            <img src={first} alt="" />
          </div>
        ) : null}
        {currentSlide === -100 ? (
          <div className="projects__contents">
            <div className="projects__content">
              <div className="projects__names">
                <img src={finalLogo} alt="" />
                <div className="projects__name">TMT</div>
              </div>

              <div className="projects__introduce">
                국내 여행일정 및 경로 설정
              </div>

              <div className="projects__date">
                <img src={finalLogo} alt="" />
                <p>4명</p>
                <img src={finalLogo} alt="" />
                <p>4주</p>
              </div>

              <div className="projects__Stacks">
                <img src={finalLogo} alt="" />
                <p>
                  TypeScript, JavaScript, React, Redux, AWS(S3, Cloud Front,
                  Route53)
                </p>
              </div>

              <div className="projects__url">
                <img src={finalLogo} alt="" />
                <a
                  href="https://tmtrips.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Link
                </a>
                <img src={github} alt="" />
                <a
                  className="projects__github"
                  href=""
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
              </div>
            </div>
            <img src={final} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Projects;
