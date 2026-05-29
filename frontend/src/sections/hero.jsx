import React from "react";
import { words } from "../constants/index";
import Button from "../components/Button";
import ProfileImage from "../components/ProfileImage";
import MeteorShower from "../components/MeteorShower";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Hero Background" />
      </div> */}

      <MeteorShower />

      <div className="hero-layout">
        {/* left hero hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Building
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2 px-4"
                      >
                        <img
                          src={word.imagePath}
                          alt={word.Text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                        />
                        <span>{word.Text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Scalable Web Solutions</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Jomel Sesante, a passionate software developer with a
              knack for <br />
              turning innovative ideas into real-world applications.
            </p>

            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="View my work"
            />
          </div>
        </header>
        {/* Profile Picture */}
        <figure className="flex items-center justify-center w-full h-full">
          <div>
            <ProfileImage />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default hero;
