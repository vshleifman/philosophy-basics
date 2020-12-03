import React, { useEffect } from "react";
import { Link, Switch, useRouteMatch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PhilosophersList from "components/philosophers-list/PhilosophersList";
import IndivPhilosopher from "./IndivPhilosopher";
import { useDispatch, useSelector } from "react-redux";
import { setPhilosophersThunk } from "reducers/philosopherSlice";
import { philosophersSelector } from "selectors/selectors";

import NotReady from "components/NotReady/NotReady";
import { Sh1, SLink, Sp } from "styles/styles";

const PhilosophersPage = () => {
  const dispatch = useDispatch();
  const { philosophers } = useSelector(philosophersSelector);

  useEffect(() => {
    dispatch(setPhilosophersThunk());
  }, [dispatch]);

  return (
    <Container>
      <Row className="col-12">
        <Sh1>By Philosopher</Sh1>
        <Sp>Major philosophers in alphabetical order:</Sp>
      </Row>

      <Row>
        <PhilosophersList philosophers={philosophers} fraction={3} />
      </Row>

      <Sp className="mt-4">
        For a chronological analysis of this list of major philosophers, see the
        section <SLink to="/historical">By Historical Period</SLink>.
      </Sp>
    </Container>
  );
};

const Philosophers = () => {
  const { path } = useRouteMatch();
  const { philosophers } = useSelector(philosophersSelector);

  return (
    <Switch>
      <Route exact path={path} component={PhilosophersPage} />

      {philosophers.map((philo, i) => (
        <Route
          key={i}
          path={
            philo.topname
              ? `${path}/${philo.fname}_${philo.topname}`
              : philo.lname
              ? `${path}/${philo.lname}_${philo.fname}`
              : `${path}/${philo.fname}`
          }
          //@ts-ignore
          render={() =>
            philo.text_intro ? <IndivPhilosopher {...philo} /> : <NotReady />
          }
        />
      ))}
    </Switch>
  );
};

export default Philosophers;
