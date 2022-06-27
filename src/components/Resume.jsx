import React from 'react'
import { Aside } from "./Aside";
import { BlackLine } from "./BlackLine";
import { Header } from "./Header";
import { Main } from "./Main";

export const Resume = () => {
  return (
    <div className="resume">
      <BlackLine />
      <Header name="Jitka Marešová" role="Junior React Developer" />
      <Aside />
      <Main />
      <BlackLine />
    </div>
  );
}
