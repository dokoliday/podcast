import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./player.css";

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