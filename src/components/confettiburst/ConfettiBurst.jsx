import { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiBurst = () => {
  useEffect(() => {
    confetti({
      particleCount: 300,
      spread: 180,
      origin: { y: 0.6 }
    });
  }, []);

  return null;
};

export default ConfettiBurst;