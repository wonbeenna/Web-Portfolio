import React, { useCallback, useState } from "react";
import "../css/Header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const openContainer = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className="header">
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
            >
              GitHub
            </a>
            <a
              className="header__blog"
              href="https://www.notion.so/Been-38c479097c3e4ebcb6d5ede959f5d5c3"
              target="_blank"
            >
              Blog
            </a>
            <a
              className="header__resume"
              href="https://www.notion.so/Resume-3d25edd559ee4f46a3832e3d51c586dd"
              target="_blank"
            >
              Resume
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
