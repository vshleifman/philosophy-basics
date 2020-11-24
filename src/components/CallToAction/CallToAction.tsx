import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import imgPeriod from "img/parchment.svg";
import imgMovement from "img/flowchart.svg";
import imgPhilo from "img/aristotle.svg";
import styled from "styled-components";

const Text = styled.p`
  color: black;
  font-weight: 200;
  font-size: 1.5vh;
  margin-top: 1em;
  text-align: center;
`;

const Heading = styled(Text)`
  font-weight: 700;
  font-size: 2vh;
`;

export const SCard = styled(Card)`
  border-radius: 15px;
  border: 2px solid #000000;
  background-color: #ffffff;
  padding: 2em;
  margin-left: 3em;
  margin-right: 3em;
  transition: border 0.5s, background-color 0.5s, color 0.5s;
  &:hover {
    color: #ffffff;
    border: 2px solid #3e4edf;
    border-radius: 15px;
    background-color: #eb7412;
  }
`;

const SCardImg = styled(Card.Img)`
  max-height: 10vh;
`;

const CallToAction = () => {
  return (
    <div>
      <CardDeck className="m-3">
        <SCard>
          <Link to="/historical" style={{ textDecoration: "none" }}>
            <SCardImg src={imgPeriod} />
            <Card.Title>
              <Heading>By Historical Period</Heading>
            </Card.Title>
            <Card.Text>
              <Text>
                Browse through historical periods of philosophical thought
              </Text>
            </Card.Text>
          </Link>
        </SCard>

        <SCard>
          <Link to="/movement" style={{ textDecoration: "none" }}>
            <SCardImg src={imgMovement} />
            <Card.Title>
              <Heading>By Movement</Heading>
            </Card.Title>
            <Card.Text>
              <Text>Browse through movements of philosophical thought</Text>
            </Card.Text>
          </Link>
        </SCard>

        <SCard>
          <Link to="/philosophers" style={{ textDecoration: "none" }}>
            <SCardImg src={imgPhilo} />
            <Card.Title>
              <Heading>By Philosopher</Heading>
            </Card.Title>
            <Card.Text>
              <Text>Learn about individual philosophers</Text>
            </Card.Text>
          </Link>
        </SCard>
      </CardDeck>
    </div>
  );
};

export default CallToAction;
