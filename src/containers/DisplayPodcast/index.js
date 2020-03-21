import React from "react";
import Poster from "../../components/Poster";
import Player from "../../components/Player";
import Resume from "../../components/Resume";

const DisplayPodcast = ({ image, title, src, resume }) => {
  return (
    <>
      <Poster image={image} />
      <Resume resume={resume} />
      <Player title={title} src={src} />
    </>
  );
};
export default DisplayPodcast;
