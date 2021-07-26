import React, { useEffect, useState } from "react";
import Scroll from "../modules/scroll";
import "../css/Banner.css";

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
      <div className="Banner__container">
        <p className="Banner__title" {...Scroll("up", 1, 0.5)}>
          새로운 시도와 도전을 좋아하는
        </p>
        <p className="Banner__content">{Text}</p>
      </div>
    </div>
  );
}

export default Banner;
