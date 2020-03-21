import React from "react";
import Header from "./components/Header";
import DisplayPodcast from "./containers/DisplayPodcast";
import {audioFiles} from "../src/data/podcastFiles";

const App = () => {
  return (
    <>
      <Header />
      {audioFiles.map(podCast => (
        <DisplayPodcast
          image={podCast.img}
          title={podCast.title}
          src={podCast.src}
          resume={podCast.resume}
        />
      ))}
    </>
  );
};
export default App;
