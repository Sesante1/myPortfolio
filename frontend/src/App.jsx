import React from "react";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <CustomCursor />

      <Hero />
      <AboutMe />
      <Contact />
    </>
  );
};

export default App;
