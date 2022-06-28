import React from "react";
import { data } from "../data";
import { Avatar } from "./Avatar";

export const Aside = () => {
  return (
    <div className="aside">
      <Avatar url="./ja.jpg" />
      <section>
        <p>{data.name}</p>
        <p>{data.mail}</p>
        <p>{data.phone}</p>
        <p>{data.address}</p>
      </section>
      <section>
        <h3>Industry Knowledge</h3>
        <ul>
          {data.knowledge.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Tools &amp; Technologies</h3>
        <ul>
          {data.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Others Skills</h3>
        <ul>
          {data.other.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Languages</h3>
        <ul>
          {data.languages.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Social</h3>
        <a href={data.social[0]}>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href={data.social[1]}>
          <i className="fa-brands fa-github"></i>
        </a>
      </section>
    </div>
  );
};
