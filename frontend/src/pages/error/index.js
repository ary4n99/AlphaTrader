import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

const ErrorPage = () => {
  return (
    <Container fluid="md" className="h-75">
      <Row className="h-100 align-items-center">
        <Col>
          <h1 style={{ fontSize: "180px", textAlign: "center" }}>404</h1>
          <h1 style={{ fontSize: "90px", textAlign: "center" }}>
            Page not found
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
