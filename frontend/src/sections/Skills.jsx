import { useState } from "react";
import HeaderTitle from "../components/HeaderTitle";
import { skills } from "../constants";
const tabs = ["Frontend", "Backend", "Tools"];

export default function Skills() {
  const [active, setActive] = useState("Frontend");

  return (
    <section id="skills" className="section-padding">
      <HeaderTitle title="What I Bring to the Table" />
      <div className="mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-250 cursor-pointer
              ${
                active === tab
                  ? "bg-white text-black border-white"
                  : "bg-white/4 text-white/40 border-white/10 hover:text-white/70 hover:border-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill chips */}
        <div className="flex flex-wrap justify-center gap-3 min-h-28">
          {skills[active].map((skill, i) => (
            <div
              key={skill.name}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border
              ${skill.bg} ${skill.border}
              animate-fade-in-up hover:-translate-y-0.5 transition-transform duration-200`}
              style={{
                animationDelay: `${i * 55}ms`,
                animationFillMode: "both",
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className={`w-10 h-10 rounded-lg object-contain flex items-center justify-center text-sm bg-white`}
              />

              <span className="text-sm font-medium text-white/90">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
