import React, { useEffect, useRef, useState } from "react";
import "../css/Projects.css";
import first from "../img/first.png";
import final from "../img/final.png";
import firstLogo from "../img/firstLogo.png";
import finalLogo from "../img/finalLogo.png";
import calendar from "../img/calendar.png";
import link from "../img/link.png";
import user from "../img/user.png";
import stack from "../img/stack.png";
import github from "../img/github.png";

function Projects() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
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

  return (
    <div className="projects">
      <p className="projects__title">Projects</p>

      <div className="projects__box" ref={slideRef}>
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
        {currentSlide === 0 ? (
          <div className="projects__contents">
            <div className="projects__content">
              <div className="projects__names">
                <img className="projects__contentImg" src={firstLogo} alt="" />
                <div className="projects__name">Don't Stop</div>
              </div>

              <p className="projects__introduce">
                스터디 모집 및 공부시간 체크
              </p>

              <div className="projects__date">
                <img className="projects__icon" src={user} alt="" />
                <p>4명</p>
                <img className="projects__icon" src={calendar} alt="" />
                <p>2주</p>
              </div>

              <div className="projects__Stacks">
                <img className="projects__icon" src={stack} alt="" />
                <p>Javascript, React, Redux, AWS(S3)</p>
              </div>

              <div className="projects__url">
                <img className="projects__icon" src={link} alt="" />
                <a
                  href="https://dontstop.site"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Web Site Link
                </a>
                <img className="projects__contentImg" src={github} alt="" />
                <a
                  className="projects__github"
                  href="https://github.com/codestates/DontStop-client"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
              </div>
            </div>
            <img className="project__Img" src={first} alt="" />
          </div>
        ) : null}
        {currentSlide === -100 ? (
          <div className="projects__contents">
            <div className="projects__content">
              <div className="projects__names">
                <img className="projects__contentImg" src={finalLogo} alt="" />
                <div className="projects__name">TMT</div>
              </div>

              <p className="projects__introduce">국내 여행일정 및 경로 설정</p>

              <div className="projects__date">
                <img className="projects__icon" src={user} alt="" />
                <p>4명</p>
                <img className="projects__icon" src={calendar} alt="" />
                <p>4주</p>
              </div>

              <div className="projects__Stacks">
                <img className="projects__icon" src={stack} alt="" />
                <p>
                  TypeScript, JavaScript, React, Redux, AWS(S3, Cloud Front,
                  Route53)
                </p>
              </div>

              <div className="projects__url">
                <img className="projects__icon" src={link} alt="" />
                <a
                  href="https://tmtrips.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Web Site Link
                </a>
                <img className="projects__contentImg" src={github} alt="" />
                <a
                  className="projects__github"
                  href="https://github.com/codestates/TMT-client"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
              </div>
            </div>
            <img className="project__Img" src={final} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Projects;
