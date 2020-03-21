import React from "react";
import "../Poster/Poster.css"
const Poster = ({image}) => {
  return (
    <>
      <img src={image} alt="illustration" className="poster"/>
    </>
  );
};
export default Poster;
