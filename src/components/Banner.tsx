import React, { useEffect, useState } from "react";
import Scroll from "../modules/scroll";
import "../css/Banner.css";
import Front from "../img/front.png";

function Banner() {
  const text = "주니어 프론트엔드 엔지니어";
  const [Text, setText] = useState<string>("");
  const [Count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + text[Count]);
      setCount(Count + 1);
    }, 200);

    if (Count === text.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [Count]);

  return (
    <div className="Banner">
      <div className="Banner__info">
        <img className="Banner__names" src={Front} alt="" />
        <div className="Banner__title" {...Scroll("up", 1, 0.5)}>
          <span>새로운 시도</span>와 <span>도전</span>을 좋아하는{" "}
          <p className="Banner__content">{Text}</p>
          <span>나원빈</span>입니다.
        </div>
      </div>
      <div className="Banner__scroll">&#60; &#60;</div>
    </div>
  );
}

export default Banner;
