import React from "react";
import "../styles/FeaturedProjects.css";
import github from "../icons/github.png";
import { FcBriefcase } from "react-icons/fc";

function Project({
  title,
  description,
  image,
  projectinfo,
  year,
  role,
  link,
  theme,
}) {
  return (
    <div className={`card_1 ${theme === "light" ? "bg-white" : "bg-black"}`}>
      <div
        className={`flex_card_1 ${
          theme === "light" ? "flex-card-1-bg" : "flex_card_1"
        }`}
      >
        <img src={image} alt="" />
      </div>
      <div className="flex_card_2">
        <h3 className={`${theme === "light" ? "text-black" : "text-white"}`}>
          {title}
        </h3>
        <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
          {description}
        </p>
        <div className="texts_lines">
          <div>
            <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
              Project info
            </p>
            <small
              className={`${theme === "light" ? "text-black" : "text-white"}`}
            >
              {projectinfo}
            </small>
          </div>
          <div>
            <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
              Year
            </p>
            <small
              className={`${theme === "light" ? "text-black" : "text-white"}`}
            >
              {year}
            </small>
          </div>
          <div>
            <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
              Role
            </p>
            <small
              className={`${theme === "light" ? "text-black" : "text-white"}`}
            >
              {role}
            </small>
          </div>
          <div className="link custom-font" id="no-border">
            <a href={link}>
              Live Demo
              <FcBriefcase
                size={28}
                style={{ marginLeft: "10px", width: "auto" }}
              />
            </a>
            <a href="https://github.com/Kaleem362">
              see on github
              <img src={github} alt="Github Account" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
