import React from "react";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movement from "./pages/movement/Movement";
import Historical from "./pages/historical/Historical";
import Philosophers from "./pages/philosophers/Philosophers";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const GrFooter = styled(Footer)`
  grid-area: footer;
  justify-self: stretch;
`;
const GrNav = styled(Navigation)`
  grid-area: nav;
`;

const GrSwitch = styled.div`
  grid-area: body;
`;
const Main = styled.div`
  font-family: "Ubuntu";
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 65px auto minmax(auto, 72px);
  grid-template-areas:
    "nav"
    "body"
    "footer";
`;

function App() {
  return (
    <Main>
      <GrNav />

      <GrSwitch>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/historical" component={Historical} />
          <Route path="/movement" component={Movement} />
          <Route path="/movement*" exact component={NotReady} />
          <Route path="/philosophers" component={Philosophers} />
          <Route path="/philosophers/*" exact component={NotReady} />
        </Switch>
      </GrSwitch>

      <GrFooter />
    </Main>
  );
}

export const NotReady = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "5em" }}
    >
      <Jumbotron>
        <h1>Hi! The content is on its way!</h1>
        <br />
        <p>
          <Button variant="primary" href="/">
            Go Home
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default App;
