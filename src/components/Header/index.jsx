import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <a href="">
          <img
            src="http://pluspng.com/img-png/burger-king-logo-png--500.png"
            alt=""
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
