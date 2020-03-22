import React from "react";
import Header from "./components/Header";
import DisplayPodcast from "./containers/DisplayPodcast";
import { audioFiles } from "../src/data/podcastFiles";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          {audioFiles.map(podCast => (
            <DisplayPodcast
              image={podCast.img}
              title={podCast.title}
              src={podCast.src}
              resume={podCast.resume}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default App;
