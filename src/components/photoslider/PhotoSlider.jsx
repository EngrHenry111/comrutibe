import { useEffect, useState } from "react";

import img1 from "../assets/utibe1.jpg";
import img2 from "../assets/utibe2.jpg";
import img3 from "../assets/utibe3.jpg";
import img4 from "../assets/utibe4.jpg";

const images = [img1, img2, img3, img4];

const PhotoSlider = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);

  }, []);

  return (
    <img
      src={images[index]}
      alt="Utibe"
      className="slider-image"
    />
  );
};

export default PhotoSlider;