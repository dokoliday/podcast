import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headPhone from "../../assets/headPhone.png"
import './Header.css'

const Header: React.FC = () => {
  const renderLogo = (): JSX.Element => {
    return <img src={headPhone} style={{ width: "2rem", height: "2rem" }} />
  }
  return (
    <Container fluid>
      <Row className="Header">
        <Col >
          <h1 className="EVCCV">Et v{renderLogo()}us... Comment ça va?</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
