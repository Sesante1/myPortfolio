import React from "react";
import { projects, badgeColors } from "../constants";
import AnimatedCounter from "../components/AnimatedCounter";
import HeaderTitle from "../components/HeaderTitle";
import { useState, useRef, useEffect } from "react";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [tapped, setTapped] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setTapped(false);
      }
    };
    document.addEventListener("touchstart", handleClickOutside);
    return () => document.removeEventListener("touchstart", handleClickOutside);
  }, []);

  return (
    <div
      className="group relative overflow-hidden w-137.5 rounded-2xl bg-black-100 border border-black-50 aspect-4/3 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
      ref={cardRef}
      onClick={() => setTapped((t) => !t)}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Base info  */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300
          ${tapped ? "opacity-0" : "opacity-100"} group-hover:opacity-0`}
      >
        <h3 className="text-white font-semibold text-base">{project.title}</h3>
        <p className="text-white/50 text-xs mt-0.5">{project.description}</p>
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col justify-center p-6 transition-all duration-300
          ${tapped ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
        <p className="text-white/50 text-xs leading-relaxed mb-4">
          {project.description}
        </p>

        <p className="text-[10px] font-semibold tracking-widest uppercase text-white/30 mb-2.5">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t.name}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] font-medium border ${badgeColors[t.color]}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full bg-current`} />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-padding">
      <HeaderTitle title="Featured Projects" />
      <div className="mb-20" />

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
