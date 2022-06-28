import React from 'react'
import { Aside } from "./Aside";
import { BlackLine } from "./BlackLine";
import { Header } from "./Header";
import { Main } from "./Main";

export const Resume = () => {
  return (
    <div className="resume">
      <BlackLine />
      <div className="resume__container">
        <div className="resume__left-container">
          <Header name="Jitka Marešová" role="Junior React Developer" />
          <Main />
        </div>
        <Aside />
      </div>
    </div>
  );
}
