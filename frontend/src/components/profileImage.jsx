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

      <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] xl:w-[520px] xl:h-[710px]">
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
