import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const TestGrid = () => {
  return (
    <Container className="w-25 h-100">
      <Row className="border border-dark h-100">hi</Row>
      <Row className="border border-dark h-100">hi</Row>
    </Container>
  );
};

export default TestGrid;
