import React from "react";
import AudioPlayer from "react-modular-audio-player";
import "./Player.css";
import play from "../../assets/play.png";
import pause from "../../assets/pause.png";

const rearrangedPlayer = [
  {
    className: "top",
    innerComponents: [
      {
        type: "play",
      },
      { type: "time" },
      {
        type: "seek",
      }
    ]
  }
];

interface Props {
  src: string;
};
const Player: React.FC<Props> = ({ src }: Props) => {
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
