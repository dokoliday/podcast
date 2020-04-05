import React from "react";
import DisplayPodcast from "../DisplayPodcast";
import { Container, Row, Col } from "react-bootstrap";
import { audioFiles } from "../../data/podcastFiles";
import Map from "../Map";

const Home: React.FC = () => {
  return (
    <Container fluid className="App">
      <Row>
        <Col xs={12} xl={6}>
          {audioFiles.map((podCast, key) => (
            <DisplayPodcast
              key={key}
              image={podCast.img}
              title={podCast.title}
              src={podCast.src}
              resume={podCast.resume}
            />
          ))}
        </Col>
        <Col xs={12} xl={6}>
          <Map audioFiles={audioFiles}/>
        </Col>
      </Row>
    </Container>

  )
}
export default Home;