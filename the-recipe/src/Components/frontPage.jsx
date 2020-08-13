import React, { Component } from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const FrontPage = () => {
  return (
    <div className="App">
      <Container>
        <div>
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">Welcome to the Recipe</p>
            <hr className="my-2" />
            <p>Feel free to post any recipe.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </div>
        Recipe of the day:
      </Container>
    </div>
  );
};

export default FrontPage;
