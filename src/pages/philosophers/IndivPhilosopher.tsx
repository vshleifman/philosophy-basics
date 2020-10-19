import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PhilType } from "types/types";
import Figure from "react-bootstrap/Figure";
import { Text } from "styles/styles";

const IndivPhilosopher = ({
  text_intro,
  text_life,
  text_work,
  image_url,
  image_desc,
}: PhilType) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="col-4">
          <Figure>
            <Figure.Image src={image_url} />
            <Figure.Caption>{image_desc}</Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <h3>Introduction</h3>
          <Text>{text_intro}</Text>
        </Col>
      </Row>

      <Row>
        <Col>
          {" "}
          <h3>Life</h3>
          <Text>{text_life}</Text>
        </Col>
      </Row>

      <Row>
        <Col>
          {" "}
          <h3>Work</h3>
          <Text>{text_work}</Text>
        </Col>
      </Row>
      {/* 
      <Row>
        <Col>
          {" "}
          <h3>Books</h3>
          {text.books.map((book) => (
            <>
              <Text>{book}</Text> <br />
            </>
          ))}
        </Col>
      </Row> */}
    </Container>
  );
};

export default IndivPhilosopher;
