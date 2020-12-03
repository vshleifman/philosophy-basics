import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

import { PhilType } from "types/types";
import { Sh2, Sp } from "styles/styles";
// import { Text } from "styles/styles";

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
          <Sh2>Introduction</Sh2>
          <Sp>{text_intro}</Sp>
        </Col>
      </Row>

      <Row>
        <Col>
          {" "}
          <Sh2>Life</Sh2>
          <Sp>{text_life}</Sp>
        </Col>
      </Row>

      <Row>
        <Col>
          {" "}
          <Sh2>Work</Sh2>
          <Sp>{text_work}</Sp>
        </Col>
      </Row>
      {/* 
      <Row>
        <Col>
          {" "}
          <h3>Books</h3>
          {text.books.map((book) => (
            <>
              <p>{book}</p> <br />
            </>
          ))}
        </Col>
      </Row> */}
    </Container>
  );
};

export default IndivPhilosopher;
