import React from "react";
import PeriodCard from "components/PeriodCard/PeriodCard";
import PeriodInfo from "pages/historical/PeriodInfo";
import { periodsSelector } from "selectors/selectors";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Text } from "styles/styles";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { Era } from "types/types";
import { useSelector } from "react-redux";
import NotReady from "components/NotReady/NotReady";
import { SHeading as SHeadingSrc, Sp as SpSrc } from "pages/Home";
import styled from "styled-components";

const SHeading = styled(SHeadingSrc)`
  color: black;
`;

const SHeadingSmall = styled(SHeading)`
  text-align: center;
  font-size: 2.5vh;
  font-weight: bolder;
`;

const Sp = styled(SpSrc)`
  color: black;
  text-align: left;
`;

const HistoricalPage = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="col-12">
            <SHeading>By Historical Period</SHeading>

            <Sp>
              The long history of Western Philosophy is usually considered to
              begin with Thales of Miletus, who was active around 585 B.C., and
              will probably continue as long as humans exist.
            </Sp>

            <Sp>For convenience, it can be divided into three main eras:</Sp>
          </div>
        </Row>

        <Row>
          <Col md="4">
            <SHeadingSmall>Ancient</SHeadingSmall>
            <hr />
            <PeriodCard currentEra={Era.ANCIENT} />
          </Col>

          <Col md="4">
            <SHeadingSmall>Medieval</SHeadingSmall>
            <hr />
            <PeriodCard currentEra={Era.MEDIEVAL} />
          </Col>

          <Col md="4">
            <SHeadingSmall>Modern</SHeadingSmall>
            <hr />
            <PeriodCard currentEra={Era.MODERN} />
          </Col>
        </Row>
      </Container>

      <Jumbotron>
        <Container>
          <Sp>
            The dates are just rough guides, and the classifications rather
            arbitrary (for example, the Modern period is sometimes considered to
            start with the Age of Reason philosophers, and sometimes with the
            Renaissance philosophers). There is obviously also a certain amount
            of overlap between these periods.
          </Sp>

          <Sp>
            Also see the Philosophy Timeline for an overview of Western
            Philosophy, created as one long image to give an idea of the
            relative scale and the clusters of activity in philosophical
            thought.
          </Sp>
        </Container>
      </Jumbotron>
    </>
  );
};

const Historical = () => {
  const { path } = useRouteMatch();
  const { periods } = useSelector(periodsSelector);

  return (
    <Switch>
      <Route exact path={path} component={HistoricalPage} />
      {periods.map((period, i) => (
        <Route
          key={i}
          path={`${path}/${period.period_enum}`}
          render={() =>
            period.text1 ? <PeriodInfo {...period} /> : <NotReady />
          }
        />
      ))}
    </Switch>
  );
};

export default Historical;
