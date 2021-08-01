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

import next from "../img/nextJs.png";
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
      <p className="about__title">ABOUT</p>

      <div className="about__container">
        <div className="about__profile">
          <img className="about__profileImg" alt="" />
        </div>
        <div className="about__contents">
          <p className="about__content__textA">
            안녕하세요
            <br /> 저는 IT기업에서 영업직으로 근무하던 중 개발자분들과 소통하는
            과정에서
            <br />
            처음 개발언어를 접하게 되며 개발자라는 직업에 큰 매력을 느끼게
            되었습니다.
          </p>
          <p className="about__content__textB">
            코드스테이츠 부트캠프에서 31주간의 교육을 통해
            <br />
            팀원들과의 협업, 페어프로그래밍, 2번의 프로젝트를 진행하였습니다.
          </p>
          <p className="about__content__textC">
            늘 새로운 Stack에 대해 관심이 많고, 호기심을 가지며 <br />
            하나하나 직접 시도해 보는 것을 좋아하며 현재는 React와 React
            Native에 대해
            <br />더 깊이있게 공부하고 있습니다.
          </p>
          <p className="about__content__textD">
            또한, 학업과 꾸준한 자기 개발 및 계발을 통해서 성장을 멈추지 않으며
            <br />
            실력있는 프론트엔드 엔지니어가 되는게 저의 목표입니다.
          </p>
        </div>
      </div>

      <div className="about__info">
        <div className="about__education">
          <div className="about__eduTitle">EDUCATION</div>

          <div className="about__eduList">
            <div className="about__eduNames">
              <div className="about__eduDate">2021. 03 ~</div>
              <div className="about__eduInfo">
                <div className="about__eduName">한국방송통신대학교</div>
                <div className="about__eduInt">컴퓨터과학과</div>
              </div>
            </div>

            <div className="about__eduNames">
              <div className="about__eduDate">2020. 12 ~ 2021. 07</div>
              <div className="about__eduInfo">
                <div className="about__eduName">코드스테이츠(Code States)</div>
                <div className="about__eduInt">
                  Advanced software engineering, Immersive program (28기)
                </div>
                <p>- JavaScript 기반 풀스택 과정</p>
                <p>- 프론트엔드는 React, 백엔드는 Node.Js 학습</p>
                <p>- 20주 동안 매일 알고리즘 문제 풀이</p>
                <p>
                  - 20주 동안 매일 강도 높은 과제 및 페어 프로그래밍, 코드리뷰
                </p>
                <p>- 협업 프로젝트 2회 진행</p>
              </div>
            </div>

            <div className="about__eduNames">
              <div className="about__eduDate">2009</div>
              <div className="about__eduInfo">
                <div className="about__eduName">대입 검정고시</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__experience">
          <div className="about__expTitle">EXPERIENCE</div>

          <div className="about__expList">
            <div className="about__expNames">
              <div className="about__expDate">2019. 11 ~ 2020. 12</div>
              <div className="about__expInfo">
                <div className="about__expName">진승정보기술</div>
                <div className="about__expInt">사원</div>
              </div>
            </div>

            <div className="about__expNames">
              <div className="about__expDate">2019. 09 ~ 2019. 11</div>
              <div className="about__expInfo">
                <div className="about__expName">멘토</div>
                <div className="about__expInt">사원</div>
              </div>
            </div>

            <div className="about__expNames">
              <div className="about__expDate">2018. 03 ~ 2018. 09</div>
              <div className="about__expInfo">
                <div className="about__expName">국민건강보험공단</div>
                <div className="about__expInt">사원</div>
              </div>
            </div>

            <div className="about__expNames">
              <div className="about__expDate">2015. 09 ~ 2016. 12</div>
              <div className="about__expInfo">
                <div className="about__expName">지에스리테일</div>
                <div className="about__expInt">사원</div>
              </div>
            </div>

            <div className="about__expNames">
              <div className="about__expDate">2010. 05 ~ 2010. 09</div>
              <div className="about__expInfo">
                <div className="about__expName">덕원산업</div>
                <div className="about__expInt">사원</div>
              </div>
            </div>
          </div>
        </div>
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
              <img src={next} {...Scroll("up", 1, 0.2)} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
