import React from "react";
import "../css/About.css";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <p className="about__title">About</p>
        <p className="about__content">안녕하세요</p>
        <p className="about__content__textA">
          저는 코드스테이츠 부트캠프에서 31주간의 교육을 통해 팀원들과의 협업,
          페어프로그래밍, 2번의 프로젝트를 진행하였습니다.
        </p>
        <p className="about__content__textB">
          늘 새로운 Stack에 대해 관심이 많고, 호기심을 가지며 하나하나 직접
          시도해 보는 것을 좋아합니다.
        </p>
        <p className="about__content__textC">
          또한 학업과 꾸준한 자기 개발 및 계발을 통해서 성장을 멈추지 않으며
          실력있는 프론트 엔드 엔지니어가 되는게 저의 목표입니다.
        </p>
      </div>
    </div>
  );
}

export default About;
