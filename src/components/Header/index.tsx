import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Header.css'

const Header: React.FC = () => {
  return (
    <Container fluid>
      <Row className="Header">
        <Col >
          <h1>Et vous... Comment ça va?</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
