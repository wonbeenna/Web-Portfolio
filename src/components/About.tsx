import React from "react";
import "../css/About.css";
import Scroll from "../modules/scroll";

import leftQuote from "../img/leftQuote.png";
import rightQuote from "../img/rightQuote.png";
import react from "../img/react.png";
import reactRouter from "../img/reactRouter.png";
import reactHooks from "../img/reactHooks.png";
import redux from "../img/redux.png";
import typescript from "../img/typescript.png";
import html from "../img/html.png";
import javascript from "../img/javascript.png";
import css from "../img/css.png";
import github from "../img/github.png";
import awsEc2 from "../img/aws-ec2.png";
import awsRoute53 from "../img/aws-route53.png";
import awsS3 from "../img/aws-s3.png";

import firebase from "../img/firebase.png";
import mysql from "../img/mysql.png";
import nodejs from "../img/nodejs.png";
import sass from "../img/sass.png";
import sequelize from "../img/sequelize.png";
import reactNative from "../img/reactNative.png";
import mongoDB from "../img/mongodb.png";
import jwt from "../img/jwt.png";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <p className="about__title">ABOUT</p>
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
          실력있는 프론트엔드 엔지니어가 되는게 저의 목표입니다.
        </p>
      </div>

      <div className="stack">
        <div className="stack__list">
          <p className="stack__mostBoxTitle">
            <img className="stack__titleImg" src={leftQuote} alt="" />
            <span>프로젝트 경험</span>이 있습니다
            <img className="stack__titleImg" src={rightQuote} alt="" />
          </p>
          <div className="stack__mostBox">
            <div className="stack__most">
              <img src={react} {...Scroll("up", 1, 0.3)} alt="" />
              <img src={reactHooks} {...Scroll("up", 1, 0.2)} alt="" />
              <img src={redux} {...Scroll("up", 1, 0.5)} alt="" />

              <img src={reactRouter} {...Scroll("up", 1, 0.5)} alt="" />
              <img src={typescript} {...Scroll("up", 1, 0.4)} alt="" />
              <img src={github} {...Scroll("up", 1, 0.2)} alt="" />

              <img src={html} {...Scroll("up", 1, 0.5)} alt="" />
              <img src={javascript} {...Scroll("up", 1, 0.5)} alt="" />
              <img src={css} {...Scroll("up", 1, 0.5)} alt="" />

              <img src={awsEc2} {...Scroll("up", 1, 0.5)} alt="" />
              <img src={awsRoute53} {...Scroll("up", 1, 0.5)} alt="" />
              <img src={awsS3} {...Scroll("up", 1, 0.1)} alt="" />
            </div>
          </div>
        </div>

        <div className="stack__list">
          <p className="stack__lastBoxTitle">
            <img className="stack__titleImg" src={leftQuote} alt="" />
            <span>꾸준히 학습 중</span>입니다
            <img className="stack__titleImg" src={rightQuote} alt="" />
          </p>
          <div className="stack__lastBox">
            <div className="stack__last">
              <img src={reactNative} {...Scroll("up", 1, 0.5)} alt="" />
              <img src={sass} {...Scroll("up", 1, 0.4)} alt="" />
              <img src={nodejs} {...Scroll("up", 1, 0.5)} alt="" />

              <img src={mysql} {...Scroll("up", 1, 0.2)} alt="" />
              <img src={sequelize} {...Scroll("up", 1, 0.3)} alt="" />
              <img src={mongoDB} {...Scroll("up", 1, 0.5)} alt="" />

              <img src={jwt} {...Scroll("up", 1, 0.1)} alt="" />
              <img src={firebase} {...Scroll("up", 1, 0.5)} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
