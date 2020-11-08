import React from "react";
import Card from "components/phil time card/PhilTimeCard";
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

const HistoricalPage = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="col-12">
            <br />
            <h1 className="text-center display-4">By Historical Period</h1>
            <br />

            <Text>
              The long history of Western Philosophy is usually considered to
              begin with Thales of Miletus, who was active around 585 B.C., and
              will probably continue as long as humans exist.
            </Text>

            <Text>
              For convenience, it can be divided into three main eras:
            </Text>
          </div>
        </Row>

        <Row>
          <Col>
            <h2 className="text-center">Ancient</h2>
            <hr />
            <Card currentEra={Era.ANCIENT} />
          </Col>

          <Col>
            <h2 className="text-center">Medieval</h2>
            <hr />
            <Card currentEra={Era.MEDIEVAL} />
          </Col>

          <Col>
            <h2 className="text-center">Modern</h2>
            <hr />
            <Card currentEra={Era.MODERN} />
          </Col>
        </Row>
      </Container>

      <Jumbotron>
        <Container>
          <Text>
            The dates are just rough guides, and the classifications rather
            arbitrary (for example, the Modern period is sometimes considered to
            start with the Age of Reason philosophers, and sometimes with the
            Renaissance philosophers). There is obviously also a certain amount
            of overlap between these periods.
          </Text>

          <Text>
            Also see the Philosophy Timeline for an overview of Western
            Philosophy, created as one long image to give an idea of the
            relative scale and the clusters of activity in philosophical
            thought.
          </Text>
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
          render={() => <PeriodInfo {...period} />}
        />
      ))}
    </Switch>
  );
};

export default Historical;
