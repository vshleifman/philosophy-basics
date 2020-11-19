import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import imgPeriod from "img/Geologica_time.png";
import imgMovement from "img/movement.jpg";
import imgPhilo from "img/philosophers.jpg";
import styled from "styled-components";

const Text = styled.p`
  color: white;
  font-weight: 200;
  margin-top: 0.5em;
`;

const Heading = styled(Text)`
  font-weight: 700;
  font-size: 25px;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
`;

const SCard = styled(Card)`
  border-radius: 15px;
  border: 2px solid #f6f8f7;
  background-color: #759397;
  padding: 1em;
  transition: border 0.5s, background-color 0.5s;
  &:hover {
    border: 2px solid #3e4edf;
    border-radius: 15px;
    background-color: #586f72;
  }
`;

const SCardImg = styled(Card.Img)`
  border-radius: 15px;
`;

const CallToAction = () => {
  return (
    <div>
      <Jumbotron className="px-3">
        <CardDeck>
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
      </Jumbotron>
    </div>
  );
};

export default CallToAction;
