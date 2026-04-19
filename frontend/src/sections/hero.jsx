import React from "react";

const hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Hero Background" />
      </div>

      <div className="hero-layout">
        {/* left hero hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shaping</h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
          </div>
        </header>
        {/* right 3d model or image */}
      </div>
    </section>
  );
};

export default hero;
