import React, { useState } from "react";
import { Content } from "./Content";
import { Gallery } from "./Gallery";

export const Main = () => {
  const [isDark, setIsDark] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  const toggleCV = () => {
    setContentVisible(!contentVisible);
  }

  const label = isDark ? "Light mode" : "Dark mode";
  const secondLabel = contentVisible ? "Certificates" : "Curriculum vitae";

  return (
    <div className={isDark && "dark"}>
      <div className="main-container">
        <div className="buttons">
          <button className="button" onClick={toggleDark}>
            {label}
          </button>
          <button className="button button-cv" onClick={toggleCV}>
            {secondLabel}
          </button>
        </div>
        {contentVisible ? <Content /> : <Gallery />}
      </div>
    </div>
  );
};
