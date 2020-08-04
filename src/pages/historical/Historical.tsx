import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "components/phil time card/PhilTimeCard";
import axios from "axios";

import { Text } from "config/styles";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import PeriodInfo from "pages/historical/PeriodInfo";
import { Era, PeriodDataType } from "config/types";

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
  const [periods, setPeriods] = useState<PeriodDataType[]>([]);

  const fetchPeriods = async () => {
    try {
      const periodData = await axios.get("http://localhost:3001/period");
      setPeriods(periodData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPeriods();
  }, []);

  return (
    <Switch>
      <Route exact path={path} component={HistoricalPage} />
      {periods.map((card, i) => (
        <Route
          key={i}
          path={`${path}/${card.period_enum}`}
          render={() => <PeriodInfo {...card} />}
        />
      ))}
    </Switch>
  );
};

export default Historical;
