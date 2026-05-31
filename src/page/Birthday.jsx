import "./birthday.css";

import { useState, useEffect } from "react";

import { TypeAnimation } from "react-type-animation";

import Fireworks from "../components/fireworks/Fireworks";
import ConfettiBurst from "../components/confettiburst/ConfettiBurst";
import MusicPlayer from "../components/music/MusicPlayer";

import img1 from "../assets/utibe1.jpg";
import img2 from "../assets/utibe2.jpg";
// import img3 from "../assets/utibe3.jpg";
// import img4 from "../assets/utibe4.jpg";

const images = [img1, img2];

const BirthdayPage = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage(
        prev => (prev + 1) % images.length
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="birthday-page">

      <Fireworks />
      <ConfettiBurst />
      <MusicPlayer />

      {/* Sparkles */}

      {[...Array(50)].map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        >
          ✨
        </span>
      ))}

      {/* Hearts */}

      {[...Array(15)].map((_, i) => (
        <span
          key={`heart-${i}`}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i}s`
          }}
        >
          ❤️
        </span>
      ))}

      {/* Balloons */}

      <div className="balloon b1">🎈</div>
      <div className="balloon b2">🎈</div>
      <div className="balloon b3">🎈</div>
      <div className="balloon b4">🎈</div>
      <div className="balloon b5">🎈</div>

      <div className="birthday-card">

        <div className="cake">
          🎂
        </div>

        <img
          src={images[currentImage]}
          alt="Utibe-Abasi"
          className="birthday-image"
        />

        <TypeAnimation
          sequence={[
            "🎉 Happy Birthday my Brother 🎂",
            2000,
            "👑 Utibe-Abasi Sunday 👑",
            2000
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="birthday-title"
        />

        <div className="birthday-message">
          <p>
            Today is more than just a birthday—it is a celebration
            of an incredible person whose presence has been a
            blessing to everyone around him.
          </p>

          <p>
            My dear brother, Utibe-Abasi Sunday, we have shared
            countless memories, challenges, victories, laughter,
            and unforgettable moments together.
          </p>

          <p>
            Through every season of life, you have remained
            dependable, caring, outspoken, and genuine.
          </p>

          <p>
            Your courage, honesty, kindness, and strength of
            character continue to inspire everyone around you.
          </p>

          <p>
            May God bless you with good health, happiness,
            success, divine favor, prosperity, and countless
            opportunities.
          </p>

          <p>
            Happy Birthday once again, Brother!
          </p>
        </div>

        <div className="signature">
          🚀 See You At The TOP, Brother!
          <br />
          ❤️ — EngrHenryTech
        </div>

      </div>
    </div>
  );
};

export default BirthdayPage;