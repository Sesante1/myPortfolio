import React from "react";
// import AnimatedCounter from "../components/AnimatedCounter";

const aboutMe = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          About Me
        </h1>
        <div className=" p-6 rounded-lg">
          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Hi, I’m Jomel, a recent IT graduate passionate about building
            responsive and user-friendly web applications.
            <br />
            <br />
            I enjoy creating clean and functional interfaces and working with
            modern web technologies like React and JavaScript. Most of my time
            is spent improving my skills through personal projects and exploring
            better ways to design and build smooth user experiences. I have also
            worked on several full stack projects during my studies, which
            helped me gain experience in both frontend and backend development.
            <br />
            <br />
            I’m continuously learning and improving as a developer, and I’m open
            to new opportunities, challenges, and growth in the tech industry.
          </p>
        </div>
      </div>

      {/* <AnimatedCounter /> */}
      {/* <div className="h-100" /> */}
    </div>
  );
};

export default aboutMe;
