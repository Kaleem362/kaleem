import React, { useState } from "react";
import "../styles/Aboutus.css";

function Aboutus({ theme }) {
  const [textcolor, settextcolor] = useState(theme === "dark");
  console.log(
    "the theme is working in the About Component by defined state variable " +
      textcolor
  );
  return (
    <div className={`About_us ${theme === "light" ? "bg-white" : "bg-black"}`}>
      <div className="about_title">
        <h1
          className={
            theme === "light"
              ? "bg-transparent" && "text-black"
              : "bg-transparent" && "text-light"
          }
        >
          About me
        </h1>
      </div>
      <div className="about_content">
        <h2
          className={
            theme === "light"
              ? "bg-transparent" && "text-black"
              : "bg-transparent" && "text-light"
          }
        >
          I am Front-end Web Developer. A computer science graduate with
          Front-end Developer Background
        </h2>
        <p className={theme === "light" ? "text-black" : "text-light"}>
          Highly motivated and detail-oriented React JS developer with a strong
          foundation in computer science, leveraging expertise in JavaScript,
          HTML, CSS, PHP, and MySQL to craft scalable, accessible, and
          user-centric web applications. With a passion for problem-solving and
          continuous learning, I excel in creating dynamic interfaces and
          seamless user experiences. Proficient in React JS, I'm always
          exploring innovative solutions and best practices to enhance my
          skills.
        </p>
        <a href="#" className={theme === "light" ? "text-black" : "text-light"}>
          More about me
        </a>
      </div>
    </div>
  );
}

export default Aboutus;
