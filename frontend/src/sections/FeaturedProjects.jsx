import React from "react";
import { projects } from "../constants";
import AnimatedCounter from "../components/AnimatedCounter";

const badgeColors = {
  blue: "bg-blue-500/10 border-blue-500/30 text-blue-300",
  green: "bg-green-500/10 border-green-500/30 text-green-300",
  orange: "bg-orange-500/10 border-orange-500/30 text-orange-300",
  purple: "bg-purple-500/10 border-purple-500/30 text-purple-300",
  pink: "bg-pink-500/10 border-pink-500/30 text-pink-300",
  cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
  yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
  red: "bg-red-500/10 border-red-500/30 text-red-300",
};

const FeaturedProjects = () => {
  return (
    <>
      <section id="projects" className="section-padding">

        
        <div className="mb-20" />

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden w-137.5 rounded-2xl bg-black-100 border border-black-50 aspect-4/3 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Base info  */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-white font-semibold text-base">
                  {project.title}
                </h3>
                <p className="text-white/50 text-xs mt-0.5">
                  {project.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col justify-center p-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                <h3 className="text-white font-bold text-xl mb-1">
                  {project.title}
                </h3>
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

                {/* <a
                href={project.link}
                className="mt-4 pt-3.5 border-t border-white/10 flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
                >
                View project <span>→</span>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedProjects;
