import React from "react";
import Quoter from "../components/quoter/Quoter";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const Quote = styled.h4`
  font-weight: 400;
  padding: 20px 0 5px 0;
  text-align: center;
  justify-content: center;
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <Quoter />
      <Container>
        <Quote>
          If men were born free, they would, so long as they remained free, form
          no conception of good and evil” – Baruch Spinoza
        </Quote>
      </Container>
    </>
  );
};

export default Home;
