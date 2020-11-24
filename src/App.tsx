import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Navigation from "components/navigation/Navigation";
import Footer from "components/footer/Footer";
import NotReady from "components/NotReady/NotReady";

import Home from "pages/Home";
import Movement from "pages/movement/Movement";
import Historical from "pages/historical/Historical";
import Philosophers from "pages/philosophers/Philosophers";

const SContainer = styled.div`
  font-family: "Cinzel";
  min-height: 100vh;
`;

function App() {
  return (
    <SContainer>
      <Navigation />

      <Switch>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/historical" component={Historical} />
          <Route path="/movement" component={Movement} />
          <Route path="/movement*" exact component={NotReady} />
          <Route path="/philosophers" component={Philosophers} />
          <Route path="/philosophers/*" exact component={NotReady} />
        </Switch>
      </Switch>

      <Footer />
    </SContainer>
  );
}

export default App;
