import { useEffect } from "react";
import confetti from "canvas-confetti";

const Fireworks = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 150,
        spread: 160,
        startVelocity: 60,
        ticks: 300,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5
        }
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default Fireworks;