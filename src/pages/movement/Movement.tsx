import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Sh1, Sh2, Sp } from "styles/styles";

const ancientMoves = [
  "Aristotelianism",
  "Atomism",
  "Cynicism",
  "Eleatic School",
  "Ephesian School",
  "Epicureanism",
  "Hedonism",
  "Milesian School",
  "Neo-Platonism",
  "Platonism",
  "Pluralism",
  "Pythagoreanism",
  "Skepticism",
  "Sophism",
  "Stoicism",
];

const medMoves = [
  "Averroism",
  "Avicennism",
  "Illuminationism",
  "Scholasticism",
  "Scotism",
  "Thomism",
];

const modMoves = [
  "Analytic Philosophy",
  "British Empiricism",
  "Continental Philosophy",
  "Deconstructionism",
  "Existentialism",
  "German Idealism",
  "Hegelianism",
  "Humanism",
  "Kantianism",
  "Logicism",
  "Logical Positivism",
  "Marxism",
  "Modernism",
  "Ordinary Language Philosophy",
  "Phenomenology",
  "Positivism",
  "Post-Modernism",
  "Post-Structuralism",
  "Pragmatism",
  "Rationalism",
  "Romanticism",
  "Structuralism",
  "Transcendentalism",
  "Utilitarianism",
];

const SButton = styled(Button)`
  width: 100%;
  &:hover {
    color: #ffffff;
    border: 2px solid #3e4edf;
    background-color: #eb7412;
  }
`;

const listMoves = (arr: string[]) =>
  arr.map((move: string) => (
    <Row key={move}>
      <Link to={`movements_${move}`}>
        <Button className="mb-2" variant="light">
          <Sp style={{ textAlign: "center" }}>{move}</Sp>
        </Button>
      </Link>
      <br />
    </Row>
  ));

const Movement = () => {
  return (
    <Container>
      <Row className="col-12">
        <Sh1>By Movement</Sh1>
        <Sp>
          A philosophical movement is the appearance of (or the increased
          popularity of) a specific school of philosophy, an identifiable
          tradition of philosophy, or a marked change in philosophical thought
          on a particular subject. A school is a group of people, especially
          philosophers, artists, or writers, whose thought, work, or style
          demonstrates a common origin or influence or unifying belief. These
          are the famous “-isms” of philosophy.
        </Sp>
        <Sp>
          A movement or school may represent the broad views of many individual
          philosophers, even if they may not agree entirely in all respects, so
          it is more a diffusely organized or heterogeneous group of
          philosophers tending toward or favoring a generalized common goal. It
          may also consist of intellectual thought by several individuals on
          several related ideas or doctrines, and the distinction between
          schools or movements, and doctrines or theories is sometimes blurred.
        </Sp>
        <Sp>
          For convenience, the major movements and schools can be classified
          under three main sub-headings:
        </Sp>
      </Row>
      <Row>
        <Col sm="4">
          <Sh2>Ancient</Sh2>
          <hr />
          {listMoves(ancientMoves)}
        </Col>
        <Col sm="4">
          <Sh2>Medieval</Sh2>
          <hr />
          {listMoves(medMoves)}
        </Col>
        <Col sm="4">
          <Sh2>Modern</Sh2>
          <hr />
          {listMoves(modMoves)}
        </Col>
      </Row>
    </Container>
  );
};

export default Movement;
