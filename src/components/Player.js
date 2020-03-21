import React from "react";
import AudioPlayer from "react-modular-audio-player";
import "./Player.css";
import play from "../assets/play.png";
import pause from "../assets/pause.png";

let audioFiles = [
  {
    src: "https://archive.org/download/BioHazardRadio/Jour%201%20molles.mp3",
    title: "first day confinement "
  }
];

let rearrangedPlayer = [
  {
    className: "top",
    style: { marginBottom: "0.2rem" },
    innerComponents: [
      {
        type: "name",
        style: { width: "58%" }
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
        type: "play",
        style: { width: "12.5%", justifyContent: "flex-end" }
      },
      { type: "seek" }
    ]
  }
];
const Player = () => {
  return (
    <AudioPlayer
      audioFiles={audioFiles}
      rearrange={rearrangedPlayer}
      iconSize="1.5%"
      playIcon={play}
      playHoverIcon={play}
      pauseIcon={pause}
      pauseHoverIcon={pause}
      fontFamily="serif"
      fontSize="1.5rem"
      playerWidth="25%"
      sliderClass="invert-blue-grey"
    />
  );
};
export default Player;


