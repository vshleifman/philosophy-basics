import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import CallToAction from "components/CallToAction/CallToAction";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Sh1, Sh2 } from "styles/styles";

const CoverImg = styled.div`
  background-image: linear-gradient(rgba(1, 28, 87, 0.7), rgba(1, 28, 87, 0.7)),
    url("https://visitvatican.info/wp-content/uploads/2020/07/school_athens_painting.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: overlay;
  color: white;
`;

const Home = () => {
  return (
    <>
      <CoverImg>
        <Container>
          <Row className="justify-content-between align-items-center pt-3">
            <Col lg="4">
              <Sh1 style={{ paddingLeft: "0px" }}>BASICS OF PHILOSOPHY</Sh1>
            </Col>
            <Col lg="7" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              <Sh2 style={{ paddingRight: "0px" }}>
                If men were born free, they would, so long as they remained
                free, form no conception of good and evil” – Baruch Spinoza
              </Sh2>
            </Col>
          </Row>

          <Row className="align-items-center justify-content-center pt-md-5">
            <CallToAction />
          </Row>
        </Container>
      </CoverImg>
    </>
  );
};

export default Home;
