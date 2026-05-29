import React, { useRef, useCallback } from "react";

const ProfileImage = () => {
  return (
    <>
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(-1deg) scale(1);
          }
          25% {
            transform: translateY(-18px) rotate(0.5deg) scale(1.02);
          }
          50% {
            transform: translateY(-25px) rotate(1deg) scale(1.03);
          }
          75% {
            transform: translateY(-10px) rotate(-0.5deg) scale(1.01);
          }
          100% {
            transform: translateY(0px) rotate(-1deg) scale(1);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow:
              0 0 20px rgba(255, 255, 255, 0.3),
              0 0 60px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow:
              0 0 40px rgba(255, 255, 255, 0.6),
              0 0 100px rgba(255, 255, 255, 0.2);
          }
        }

        .float-card {
          animation:
            float 6s ease-in-out infinite,
            glow 6s ease-in-out infinite;
        }
      `}</style>

      <div className="w-50 h-70 sm:w-60 sm:h-80 md:w-75 md:h-100 lg:w-95 lg:h-130 xl:w-115 xl:h-160">
        <div className="float-card relative w-full h-full rounded-[20px] overflow-hidden shadow-lg">
          <img
            src="/images/GradPic.jpg"
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
