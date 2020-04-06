import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./player.css";
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
        className="audio-player"
        autoPlay
        src={src}
      />
    </>
  );
};
export default Player;
