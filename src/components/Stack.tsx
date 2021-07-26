import React from "react";
import "../css/Stack.css";
import Scroll from "../modules/scroll";

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

function Stack() {
  return (
    <div className="stack">
      <div className="stack__title">스택을 소개합니다!</div>
      <div className="stack__list">
        <div className="stack__mostBox">
          <p className="stack__mostBoxTitle">프로젝트 경험이 있습니다</p>
          <div className="stack__most">
            <img src={react} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={reactRouter} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={reactHooks} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={redux} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={typescript} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={html} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={javascript} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={css} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={github} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={awsEc2} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={awsRoute53} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={awsS3} {...Scroll("up", 1, 0.5)} alt="" />
          </div>
        </div>

        <div className="stack__lastBox">
          <p className="stack__lastBoxTitle">꾸준히 학습 중 입니다</p>
          <div className="stack__last">
            <img src={firebase} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={mysql} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={nodejs} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={sass} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={sequelize} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={reactNative} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={mongoDB} {...Scroll("up", 1, 0.5)} alt="" />
            <img src={jwt} {...Scroll("up", 1, 0.5)} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
