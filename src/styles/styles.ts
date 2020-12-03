import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Sh1 = styled.h1`
  font-size: 3.5vh;
  padding: 2em;
  font-weight: 300;
  text-align: center;
`;

export const Sh2 = styled.h2`
  font-size: 2.5vh;
  padding: 1.5em;
  font-weight: 300;
  text-align: center;
`;

export const Sp = styled.p`
  font-size: 2vh;
  padding: 0.5em;
  font-weight: 400;
  text-align: left;
`;

export const SLink = styled(Link)`
  width: 100%;
  text-decoration: none;
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

export const SButton = styled(Button)`
  width: 100%;
  &:hover {
    color: #ffffff;
    border: 2px solid #3e4edf;
    background-color: #eb7412;
  }
`;
