import React, { useState } from "react";
import { experience, education } from "../data";

export const Main = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  const label = isDark ? 'Light' : 'Dark';

  return (
    <div className={isDark && "dark"}>
      <div className="main-container">
        <h4>EXPERIENCE</h4>
        {experience.map((job) => (
          <div className="job">
            <h3>{job.role}</h3>
            <h5>{job.company}</h5>
            <span>{job.date}</span>
            <p>{job.description}</p>
          </div>
        ))}

        <h4>EDUCATION</h4>
        {education.map((item) => (
          <div className="school">
            <h3>{item.school}</h3>
            <span>{item.date}</span>
          </div>
        ))}

        <button onClick={toggleDark}>{label}</button>
      </div>
    </div>
  );
};
