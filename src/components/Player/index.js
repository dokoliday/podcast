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
        type: "name"
      },
      {
        type: "time",
        style: { justifyContent: "flex-end" }
      }
    ]
  },
  {
    className: "bottom",
    innerComponents: [
      {
        type: "play"
      },
      { type: "seek" }
    ]
  }
];
const Player = ({ title, src }) => {
  return (
    <>
      <AudioPlayer
        audioFiles={[
          {
            src,
            title
          }
        ]}
        rearrange={rearrangedPlayer}
        playIcon={play}
        playHoverIcon={play}
        pauseIcon={pause}
        pauseHoverIcon={pause}
        fontFamily="serif"
        sliderClass="invert-blue-grey"
      />
    </>
  );
};
export default Player;
