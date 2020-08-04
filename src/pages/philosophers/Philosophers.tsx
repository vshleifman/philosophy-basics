import React from "react";
import { Text } from "config/styles";
import { Link, Switch, useRouteMatch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import { philosophers } from "data/philosophersData";
import PhilosophersList from "components/philosophers-list/PhilosophersList";
import IndivPhilosopher from "./IndivPhilosopher";

const PhilosophersPage = () => {
  return (
    <Container>
      <Text data-testid="text" className="mt-3">
        Major philosophers in alphabetical order:
      </Text>
      {/* 
      <Row>
        <PhilosophersList philosophers={philosophers} fraction={3} />
      </Row> */}

      <Text className="mt-4">
        For a chronological analysis of this list of major philosophers, see the
        section <Link to="/historical">By Historical Period</Link>.
      </Text>
    </Container>
  );
};

const Philosophers = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={PhilosophersPage} />

      {/* {philosophers.map((philo, i) => (
        <Route
          key={i}
          path={
            philo.nickname
              ? `${path}/${philo.name}_${philo.nickname}`
              : `${path}/${philo.name}`
          }
          render={() => <IndivPhilosopher {...philo} />}
        />
      ))} */}
    </Switch>
  );
};

export default Philosophers;
