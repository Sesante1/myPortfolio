import React, { useRef, useCallback } from "react";

const ProfileImage = () => {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float-card {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="w-[200px] h-[280px] sm:w-[240px] sm:h-[320px] md:w-[300px] md:h-[400px] lg:w-[380px] lg:h-[520px] xl:w-[460px] xl:h-[640px]">
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
