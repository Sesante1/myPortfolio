import React, { useEffect, useRef } from "react";

const MeteorShower = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.2,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005, // how fast it pulses
      twinkleDirection: Math.random() > 0.5 ? 1 : -1,
    }));

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

    function drawStar(star) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    }

    // ── Twinkle update ──────────────────────────────────
    function updateStar(star) {
      star.opacity += star.twinkleSpeed * star.twinkleDirection;

      if (star.opacity >= 1) {
        star.opacity = 1;
        star.twinkleDirection = -1;
      } else if (star.opacity <= 0.1) {
        star.opacity = 0.1;
        star.twinkleDirection = 1;
      }
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

    function updateMeteor(meteor) {
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

      stars.forEach((star) => {
        drawStar(star);
        updateStar(star);
      })

      meteors.forEach((meteor) => {
        drawMeteor(meteor);
        updateMeteor(meteor);
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
