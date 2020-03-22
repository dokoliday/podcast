import React from "react";
import Header from "./components/Header";
import DisplayPodcast from "./containers/DisplayPodcast";
import { audioFiles } from "../src/data/podcastFiles";
import { Container, Row, Col } from "react-bootstrap";
import Map from "./components/Map";
import './App.css'

const App = () => {
  return (
    <>
    <Header />
    <Container fluid className="App">
      <Row>
        <Col s={1} xl={4}>
          {audioFiles.map(podCast => (
            <DisplayPodcast
              image={podCast.img}
              title={podCast.title}
              src={podCast.src}
              resume={podCast.resume}
            />
          ))}
        </Col>
        <Col s={1} xl={8}>
          <Map audioFiles={audioFiles} />
        </Col>
      </Row>
    </Container>
    </>
  );
};
export default App;
