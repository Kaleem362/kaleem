import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";
import FeaturedProjects from "./Components/FeaturedProjects";
import FirstSec from "./Components/FirstSec";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Work from "./Components/Work";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Default theme is "light"
  });

  // Function to toggle the theme
  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the new theme in localStorage
  };

  useEffect(() => {
    document.body.className = theme; // Apply the theme class to the body
  }, [theme]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar theme={theme} handleTheme={handleTheme} />
              <FirstSec theme={theme} />
              <Aboutus theme={theme} />
              <FeaturedProjects theme={theme} />
              <Contact theme={theme} />
            </>
          }
        />
        <Route
          path="/Work"
          element={
            <>
              <Navbar theme={theme} handleTheme={handleTheme} />
              <FeaturedProjects theme={theme} />
              <Work theme={theme} />
              <Contact theme={theme} />
            </>
          }
        />
        <Route
          path="/Aboutus"
          element={
            <>
              <Navbar theme={theme} handleTheme={handleTheme} />
              <Aboutus theme={theme} />
              <Contact theme={theme} />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <Navbar theme={theme} handleTheme={handleTheme} />
              <Contact theme={theme} />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
