import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headPhone from "../../assets/headPhone2.png"
import './Header.css'

const Header: React.FC = () => {
  const renderLogo = (): JSX.Element => {
    return <img src={headPhone} style={{ width: "2rem", height: "2rem" }} />
  };
  return (
    <Container fluid>
      <Row className="header">
        <Col >
          <h1 className="headerContent">C{renderLogo()}mment ça va?</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
