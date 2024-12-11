import React, { useState, useEffect } from "react";
import { MdLaunch } from "react-icons/md";
import "../styles/firstsec.css";
import thirdpic from "../images/thirdpic.png";
import linkedin from "../socialicons/link.png";
import github from "../socialicons/github.png";

function FirstSec({ theme }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for screen resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("the theme is " + theme);

  return (
    <>
      <div
        className={`First_section ${
          theme === "light" ? "bg-white" : "bg-black"
        }`}
      >
        <div className="First_sub_div">
          <div className="center_sub_div">
            <h1
              className={
                theme === "light"
                  ? "bg-transparent" && "text-black"
                  : "bg-transparent" && "text-light"
              }
            >
              HI, I AM <br />
              KALEEM ULLAH
            </h1>
            <p className={theme === "light" ? "text-black" : "text-light"}>
              "I'm a blend of HTML, CSS, JavaScript, and React.js, pushing
              forward with limitless creativity and modern solutions."
            </p>
            <div className="button_links">
              <div
                className={`contact_link ${
                  theme === "light" ? "dark-theme" : "light-theme"
                }`}
              >
                <a href="/Contact">Contact Me</a>

                {screenWidth <= 480 ? (
                  <MdLaunch size={24} style={{ width: "auto" }} />
                ) : (
                  <div className="dot"></div>
                )}
              </div>
              <div
                className={`linkedin_link links ${
                  theme === "light" ? "black-theme" : "white-theme"
                }`}
              >
                <a href="https://www.linkedin.com/in/kaleem-ullah-a35664258">
                  <img src={linkedin} alt="LinkedIn" className="link_img" />
                </a>
              </div>
              <div className="github_link links">
                <a href="https://github.com/Kaleem362">
                  <img src={github} alt="GitHub" className="link_img" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Second_sub_div img_div">
          <div className={`imgdiv  ${theme === "light" ? "bg-transparent" : "bg-black"}`}>
            <img src={thirdpic}  alt="Author" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSec;
