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
          <h1 className="EVCCV">C{renderLogo()}mment ça va?</h1>
        </Col>
      </Row>
      <Col xs={12} className="intro">
        <p>&quot;Comment ça va ?&quot;, le podcast qui prend de tes nouvelles, qui brise un peu la solitude, essaye de te déconfiner et de t’emmener voir et écouter ailleurs.Chez le voisin, la voisine et chez ceux que tu n’connais pas.`</p>
        <Link to="/podcast" className="blink">
          <img src={play} className="homePlay" />
        </Link>
      </Col>
    </Container>
  )
}
export default Home;