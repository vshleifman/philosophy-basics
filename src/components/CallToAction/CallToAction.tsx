import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import imgPeriod from "img/parchment.svg";
import imgMovement from "img/flowchart.svg";
import imgPhilo from "img/aristotle.svg";
import styled from "styled-components";
import { SCard, Sh2, SLink, Sp } from "styles/styles";

const cardLinks = [
  {
    name: "By Historical Period",
    text: "Browse through historical periods of philosophical thought",
    link: "/historical",
    img: imgPeriod,
  },
  {
    name: "By Movement",
    text: "Browse through movements of philosophical thought",
    link: "/movement",
    img: imgMovement,
  },
  {
    name: "By Philosopher",
    text: "Learn about individual philosophers",
    link: "/philosophers",
    img: imgPhilo,
  },
];

const SCardImg = styled(Card.Img)`
  max-height: 10vh;
`;

const CallToAction = () => {
  return (
    <CardDeck className="m-3 flex-nowrap">
      {cardLinks.map((cardLink) => (
        <SCard
          key={cardLink.name}
          style={{
            wordWrap: "inherit",
          }}
        >
          <SLink
            to={cardLink.link}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <SCardImg src={cardLink.img} />
            <Card.Title>
              <Sh2>{cardLink.name}</Sh2>
            </Card.Title>
            <Card.Text>
              <Sp>{cardLink.text}</Sp>
            </Card.Text>
          </SLink>
        </SCard>
      ))}
    </CardDeck>
  );
};

export default CallToAction;
