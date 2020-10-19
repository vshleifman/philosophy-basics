import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Foot = styled.footer`
  background-color: #444;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 1em;
`;

const Footer = () => {
  return (
    <Foot data-testid="footer">
      <Container>
        <Row>
          <p className="py-2 my-2">
            The articles on this site are © 2008-2020. If you quote this
            material please be courteous and provide a link.
          </p>
        </Row>
      </Container>
    </Foot>
  );
};

export default Footer;
