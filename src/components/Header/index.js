import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Header.css'

const Header = () => {
  return (
    <Container fluid>
      <Row className="Header">
        <Col >
          <h1>Alors... comment ça va la?</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
