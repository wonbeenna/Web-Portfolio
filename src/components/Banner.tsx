import React, { useEffect, useState } from "react";
import Scroll from "../modules/scroll";
import "../css/Banner.css";
import profile from "../img/profile.png";

function Banner() {
  const text = "주니어 프론트엔드 엔지니어 나원빈 입니다.";
  const [Text, setText] = useState<string>("");
  const [Count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + text[Count]);
      setCount(Count + 1);
    }, 100);
    if (Count === text.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="Banner">
      <div className="Banner__info">
        <div className="Banner__title" {...Scroll("up", 1, 0.5)}>
          <span>새로운 시도</span>와 <span>도전</span>을 좋아하는
        </div>
        <p className="Banner__content">{Text}</p>
      </div>
      <div className="Banner__img">
        <img src={profile} alt="" />
      </div>
    </div>
  );
}

export default Banner;
