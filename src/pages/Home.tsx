import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import CallToAction from "components/CallToAction/CallToAction";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const JumboImg = styled.div`
  background-image: linear-gradient(rgba(1, 28, 87, 0.7), rgba(1, 28, 87, 0.7)),
    url("https://visitvatican.info/wp-content/uploads/2020/07/school_athens_painting.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const SHeading = styled.p`
  color: white;
  font-size: 3vw;
  font-weight: 400;
  text-align: center;
`;

export const Sp = styled.h4`
  color: white;
  font-weight: 200;
  font-size: 1.5vw;
  padding: 20px 0 5px 0;
  text-align: center;
  width: 100%;
`;

const SRow = styled(Row)`
  margin-top: 20vh;
`;

const Home = () => {
  return (
    <>
      <JumboImg>
        <Container fluid>
          <Row className="justify-content-between align-items-center pt-3">
            <Col lg="4">
              <SHeading>BASICS OF PHILOSOPHY</SHeading>
            </Col>
            <Col lg="8">
              <Sp>
                If men were born free, they would, so long as they remained
                free, form no conception of good and evil” – Baruch Spinoza
              </Sp>
            </Col>
          </Row>

          <SRow className="align-items-center justify-content-center">
            <CallToAction />
          </SRow>
        </Container>
      </JumboImg>
    </>
  );
};

export default Home;
