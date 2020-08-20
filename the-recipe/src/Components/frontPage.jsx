import React, { Component } from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import RandomRecipe from "./randomRecipe";

class FrontPage extends Component {
  state = {
    randomRecipe: {},
    showRecipe: false,
  };

  getRandomRecipe(recipes) {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    this.setState({ randomRecipe, showRecipe: !this.state.showRecipe });
  }

  render() {
    const { randomRecipe, showRecipe } = this.state;
    return (
      <div>
        <Container>
          <div>
            <Jumbotron>
              <h1 className="display-3">Hello, amigo!</h1>
              <p className="lead">Welcome to the Recipe</p>
              <hr className="my-2" />
              <p>Feel free to post any recipe.</p>
              <p className="lead">
                <Button color="primary">
                  <Link to="/recipes">Recipes</Link>
                </Button>
                <Button color="primary">
                  <Link to="/new-recipe">Post New Recipe</Link>
                </Button>
              </p>
            </Jumbotron>
          </div>
        </Container>
        <h1>Random recipe:</h1>
        <Button onClick={() => this.getRandomRecipe(this.props.recipes)}>
          Get Recipe
        </Button>
        {showRecipe ? <RandomRecipe randomRecipe={randomRecipe} /> : null}
      </div>
    );
  }
}

export default FrontPage;
