import React from "react";
import "../styles/FeaturedProjects.css";
import ProjectsList from "./ProjectsList";

function FeaturedProjects({ theme }) {
  console.log("the theme is arrived in the Featured Projects component", theme);

  return (
    <div
      className={`FeaturedDiv  text-start  ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="titlebar">
        <h1
          className={`title ${theme === "light" ? "text-black" : "text-white"}`}
        >
          Featured projects
        </h1>
        <p
          className={`title text-start ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Here are some of the mentioned projects that showcase my passion in
          front-end web
        </p>
      </div>
      <ProjectsList theme={theme} />
    </div>
  );
}

export default FeaturedProjects;
