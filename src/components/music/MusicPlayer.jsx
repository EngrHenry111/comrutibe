import { useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import birthdaySong from "../../assets/birthdaysong.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <button
        className="music-btn"
        onClick={toggleMusic}
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>

      <audio
        ref={audioRef}
        loop
      >
        <source
          src={birthdaySong}
          type="audio/mpeg"
        />
      </audio>
    </>
  );
};

export default MusicPlayer;