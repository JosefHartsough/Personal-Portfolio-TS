import React from "react";
import * as headerStyles from "../styles/Header/Header.module.css";

export default function Header() {
  return (
    <div className={headerStyles.headerContainer}>
      <div className={headerStyles.headerContent}>
        <h1 className={headerStyles.nameContent}>
          <span className={headerStyles.introTitle}>Josef Hartsough.</span>
          <span>Full Stack Developer.</span>
          <span className={headerStyles.quote}>
            “A good programmer is someone who always looks both ways before
            crossing a one-way street.” - Doug Linder
          </span>
        </h1>
      </div>
    </div>
  );
}