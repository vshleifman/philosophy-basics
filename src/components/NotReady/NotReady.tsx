import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const NotReady = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "5em" }}
    >
      <Jumbotron>
        <h1>Sorry, the content is on its way!</h1>
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

export default NotReady;
