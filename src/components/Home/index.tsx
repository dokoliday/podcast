import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import play from '../../assets/play.png';
import headPhone from "../../assets/headPhone.png";
import './Home.css';

const Home: React.FC = () => {
  const renderLogo = (): JSX.Element => {
    return <img src={headPhone} />
  }
  return (
    <Container fluid className="home">
      <Row>
        <Col xs={12}>
          <h1 className="EVCCV">Et v{renderLogo()}us... Comment ça va?</h1>
        </Col>
      </Row>
      <Col xs={12} className="intro">
      <h3>Un podcast le confinage blablablabla</h3>
      <Link to="/podcast" className="blink">
        <img src={play} className="homePlay" />
      </Link>
      </Col>
    </Container>

  )
}
export default Home;