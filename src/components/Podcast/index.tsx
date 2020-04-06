import React from "react";
import DisplayPodcast from "../DisplayPodcast";
import { Container, Row, Col } from "react-bootstrap";
import { audioFiles } from "../../data/podcastFiles";
import Header from "../Header";
import Map from "../Map";
import './Podcast.css'

const Podcast: React.FC = () => {
  return (
    <Container fluid className="podcast">
      <Header />
      <Row>
        <Col xs={12} xl={{ span: 4, offset: 1 }}>
          {audioFiles.map((podCast, key) => (
            <DisplayPodcast
              key={key}
              image={podCast.img}
              title={podCast.title}
              src={podCast.src}
              resume={podCast.resume}
              date={podCast.date}
            />
          ))}
        </Col>
        <Col xs={12} xl={6}>
          <Map audioFiles={audioFiles} />
        </Col>
      </Row>
    </Container>

  )
}
export default Podcast;