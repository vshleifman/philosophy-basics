import React from "react";
import Quoter from "../components/quoter/Quoter";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import CallToAction from "components/CallToAction/CallToAction";
import Jumbotron from "react-bootstrap/Jumbotron";
import image from "img/Philosophy-and-Modern-Language.png";
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

const MainText = styled.p`
  color: white;
  font-size: 5vh;
  font-weight: 400;
  text-align: center;
`;

const Quote = styled.h4`
  color: white;
  font-weight: 200;
  font-size: 2vh;
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
            <Col sm="4">
              <MainText>BASICS OF PHILOSOPHY</MainText>
            </Col>
            <Col sm="8">
              <Quote>
                If men were born free, they would, so long as they remained
                free, form no conception of good and evil” – Baruch Spinoza
              </Quote>
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
