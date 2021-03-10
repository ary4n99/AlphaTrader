import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = () => {
  return (
    <Container fluid="md" className="h-75">
      <Row className="h-100 align-items-center">
        <Col>
          <h1 style={{ fontSize: "180px", textAlign: "center" }}>Home</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
