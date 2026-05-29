import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // spawn particle on every mouse move
      particles.current.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 1,
        opacity: 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= 0.03; // fade out speed
        p.size *= 0.97; // shrink speed

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 0, ${p.opacity})`;
        ctx.fill();
      });

      // remove dead particles
      particles.current = particles.current.filter((p) => p.opacity > 0);

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
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
    />
  );
};

export default CustomCursor;
