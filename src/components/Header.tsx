import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">Been</div>
      <div className="header__right">
        <div className="header__resume">resume</div>
        <div className="header__git">GitHub</div>
        <div className="header__blog">Blog</div>
      </div>
    </div>
  );
}

export default Header;
