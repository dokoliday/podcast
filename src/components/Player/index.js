import React from "react";
import AudioPlayer from "react-modular-audio-player";
import "./Player.css";
import play from "../../assets/play.png";
import pause from "../../assets/pause.png";

let rearrangedPlayer = [
  {
    className: "top",
    innerComponents: [
      {
        type: "play",
        style: { width: "12.5%" }
      },
      { type: "time" },
      { type: "seek" }
    ]
  }
];
const Player = ({ src }) => {
  return (
    <>
      <AudioPlayer
        audioFiles={[{ src }]}
        rearrange={rearrangedPlayer}
        playIcon={play}
        playHoverIcon={play}
        pauseIcon={pause}
        pauseHoverIcon={pause}
        sliderClass="slider"
      />
    </>
  );
};
export default Player;
