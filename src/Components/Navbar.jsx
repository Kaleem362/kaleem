import "../styles/Navbar.css";
import menu from "../icons/menu.png";
import closemenu from "../icons/closemenu.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLightbulb } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import logo from "./../images/matrixLogo.png";
import {ThemeToggle} from "./ThemeToggle/ThemeToggle";


function Navbar({ theme, handleTheme }) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // New sticky state
  console.log(logo)

  // Toggle the visibility of the nav
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  // Check screen size on load and window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsNavVisible(false); // Close nav when resizing above 768px
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call it on mount to check initial screen size
    handleResize();

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Set sticky when scrolling beyond 100px (adjust this value as needed)
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`${
          theme === "light"
            ? "bg-white text-black navbar-shadow"
            : "text-white bg-black"
        } ${isSticky ? "navbar-sticky" : ""}`}
      >
        <div className="name">
          <a href="#">
            <img
              className={
                theme === "light"
                  ? "bg-transparent" && "text-black"
                  : "bg-transparent" && "text-light"
              }
              
              src={logo}
            >
              
            </img>
          </a>
        </div>
        <div className="pages">
          {(isNavVisible || !isMobile) && (
            <ul
              className={`nav-links ${isNavVisible ? "nav-visible" : ""} ${
                theme === "light"
                  ? "text-black bg-white"
                  : "text-white bg-black"
              }`}
            >
              <li>
                <Link
                  to="/"
                  className={theme === "light" ? "text-black" : "text-light"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Work"
                  className={
                    theme === "light" && "active" ? "text-black" : "text-light"
                  }
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/Aboutus"
                  className={theme === "light" ? "text-black" : "text-light"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className={theme === "light" ? "text-black" : "text-light"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div
          className={`menuimg h-auto mt-2  ${
            theme === "light" ? "bg-black" : "bg-transparent"
          }`}
        >
          <img
            src={isNavVisible ? closemenu : menu}
            alt={isNavVisible ? "Close Menu" : "Open Menu"}
            onClick={toggleNav}
          />
        </div>
        {/* <div
          className="toggle-btn "
          style={{ width: "150px", paddingTop: "10px" }}
          onClick={handleTheme}
          ThemeToggle
        >
          {theme === "light" ? (
            <FaRegLightbulb size={24} className="text-black" />
          ) : (
            <FaLightbulb size={24} className="text-light" />
          )}
        </div> */}
        <ToggleTheme/>
      </nav>
    </div>
  );
}

export default Navbar;
