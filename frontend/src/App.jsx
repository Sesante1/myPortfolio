import React from "react";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import NavBar from "./components/NavBar";
import FeaturedProjects from "./sections/FeaturedProjects";

const App = () => {
  return (
    <>
      <CustomCursor />

      <NavBar />
      <Hero />
      {/* <AboutMe /> */}
      <FeaturedProjects />
      <Contact />
    </>
  );
};

export default App;
