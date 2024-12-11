import React from "react";
import projectone from "../images/Projectoneimage.png";
import projecttwo from "../images/Projecttwoimage.png";
import "../styles/FeaturedProjects.css";
import Project from "./Project";
import Projectthree from "../images/Projectthreeimage.png";
import projectfourimage from "../images/projectfourimage.png";
import projectfiveimage from "../images/projectfiveimage.png";

function ProjectsList({ theme }) {
  const projects = [
    {
      title: "official website for our [ford9 Computer institute]",
      description:
        "Teamed up with designer and My Mentor for providing me a best idea to make an innovative and eye catching website for our institute",
      image: projectone,
      projectinfo: "official website",
      year: 2024,
      Role: "Front-end-Developer",
      live: "https://fordnine.com/institute/",
    },
    {
      title: "Posting Application",
      description:
        "I have used the vital functions of react.js to be implemented in a this project, that a user can create a post and view it in the home Feed.",
      image: projecttwo,
      projectinfo: "posting Management Application",
      year: 2024,
      Role: "Front-end-Developer [React.js]",
      live: "https://posting-application.vercel.app/",
    },
    {
      title: "Password Checker",
      description:
        "this project is based on simple html css javascript , and has a functionality of detecting the strength of password by analyzing the characters included in the password, this turns the result of password as , Strong weak  or medium.",
      image: Projectthree,
      projectinfo: "Password Checker",
      year: 2023,
      Role: "Front-end-Developer",
      live: "https://passwordcheckerbykaleem.netlify.app/",
    },
    {
      title: "Notes taking Application",
      description:
        "This is a project based on pure html css and js, it  has a functionality of taking notes and storing them in local storage.",
      image: projectfourimage,
      projectinfo: "Notes taking Application",
      year: 2023,
      Role: "Front-end-Developer",
      live: "https://noteapplicationbykaleem.netlify.app/",
    },
    {
      title: "Todo List Application",
      description:
        "this is pure html css javascript based project which work as todo list application which  can add ,mark/ un-mark and edit the task.",
      image: projectfiveimage,
      projectinfo: "Todo List Application",
      year: 2022,
      Role: "Project Developer",
      Live: "https://todolistbykaleem.netlify.app/",
    },
    {
      title: "Fordnine Solution Official website",
      description:
        "This is the official website of Fordnine Solution developed by me and is based on HTML CSS Reactjs",
      image: projectfiveimage,
      projectinfo: "Todo List Application",
      year: 2022,
      Role: "Project Developer",
      Live: "https://todolistbykaleem.netlify.app/",
    },
  ];
  return (
    <div className={`CourseList ${theme === "light" ? "bg-white" : "bg-dark"}`}>
      {projects.map((project, key) => (
        <Project
          key={key}
          title={project.title}
          description={project.description}
          image={project.image}
          projectinfo={project.projectinfo}
          year={project.year}
          role={project.Role}
          link={project.live}
          theme={theme}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
