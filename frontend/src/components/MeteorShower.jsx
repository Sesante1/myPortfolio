import React, { useEffect, useRef } from "react";

const MeteorShower = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const meteors = Array.from({ length: 20 }, () => createMeteor(canvas));

    function createMeteor(canvas) {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1,
        length: Math.random() * 150 + 50, // meteor trail length
        speed: Math.random() * 6 + 4, // fall speed
        opacity: Math.random() * 0.7 + 0.3, // brightness
        width: Math.random() * 2 + 0.5, // trail thickness
      };
    }

    function drawMeteor(meteor) {
      const gradient = ctx.createLinearGradient(
        meteor.x,
        meteor.y,
        meteor.x + meteor.length * 0.5,
        meteor.y + meteor.length,
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(meteor.x + meteor.length * 0.5, meteor.y + meteor.length);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = meteor.width;
      ctx.stroke();
    }

    function update(meteor) {
      meteor.x += meteor.speed * 0.5;
      meteor.y += meteor.speed;

      // reset when off screen
      if (meteor.y > canvas.height || meteor.x > canvas.width) {
        Object.assign(meteor, {
          x: Math.random() * canvas.width,
          y: -meteor.length,
          speed: Math.random() * 6 + 4,
          opacity: Math.random() * 0.7 + 0.3,
        });
      }
    }

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      meteors.forEach((meteor) => {
        drawMeteor(meteor);
        update(meteor);
      });
      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default MeteorShower;
