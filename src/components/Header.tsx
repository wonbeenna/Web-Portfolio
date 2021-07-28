import React, { useCallback, useEffect, useState } from "react";
import "../css/Header.css";

function Header() {
  const [ScrollY, setScrollY] = useState<number>(0);
  const [Header, setHeader] = useState(false);
  const [open, setOpen] = useState<Boolean>(false);
  const openContainer = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    setScrollY(window.pageYOffset);
    console.log(ScrollY);
  });

  const ScrollHandler = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 830) {
      setHeader(true);
    } else {
      setHeader(false);
    }
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
    <div className={Header ? "whiteHeader" : "header"}>
      <div className="header__container">
        <div className="header__left">Been</div>
        <div className="header__right">
          <p className="header__contact" onClick={openContainer}>
            CONTACT
          </p>
          {open ? (
            <div className="header__list">
              <a
                className="header__git"
                href="https://github.com/wonbeenna"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
              <a
                className="header__blog"
                href="https://www.notion.so/Been-38c479097c3e4ebcb6d5ede959f5d5c3"
                target="_blank"
                rel="noreferrer noopener"
              >
                Blog
              </a>
              <a
                className="header__resume"
                href="https://www.notion.so/Resume-3d25edd559ee4f46a3832e3d51c586dd"
                target="_blank"
                rel="noreferrer noopener"
              >
                Resume
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
