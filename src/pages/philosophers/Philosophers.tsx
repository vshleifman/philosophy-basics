import React, { useEffect } from "react";
import { Text } from "styles/styles";
import { Link, Switch, useRouteMatch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PhilosophersList from "components/philosophers-list/PhilosophersList";
import IndivPhilosopher from "./IndivPhilosopher";
import { useDispatch, useSelector } from "react-redux";
import { setPhilosophersThunk } from "reducers/philosopherSlice";
import { philosophersSelector } from "selectors/selectors";

const PhilosophersPage = () => {
  const dispatch = useDispatch();
  const { philosophers } = useSelector(philosophersSelector);

  useEffect(() => {
    dispatch(setPhilosophersThunk());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <div className="col-12">
          <br/>
          <h1 className="text-center display-4">By Philosopher</h1>
          <Text data-testid="text" className="mt-3">
            Major philosophers in alphabetical order:
          </Text>
        </div>

      </Row>

      <Row>
        <PhilosophersList philosophers={philosophers} fraction={3} />
      </Row>

      <Text className="mt-4">
        For a chronological analysis of this list of major philosophers, see the
        section <Link to="/historical">By Historical Period</Link>.
      </Text>
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
          render={() => <IndivPhilosopher {...philo} />}
        />
      ))}
    </Switch>
  );
};

export default Philosophers;
