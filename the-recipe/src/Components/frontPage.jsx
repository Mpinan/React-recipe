import React, { Component } from "react";
import { Jumbotron, Button, Container } from "reactstrap";

class FrontPage extends Component {
  state = {
    randomRecipe: {},
  };

  getRandomRecipe(recipes) {
    console.log(recipes);
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    this.setState({ randomRecipe });
  }
  render() {
    return (
      <div>
        <Container>
          <div>
            <Jumbotron>
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">Welcome to the Recipe</p>
              <hr className="my-2" />
              <p>Feel free to post any recipe.</p>
              <p className="lead">
                <Button color="primary">Recipes</Button>
              </p>
            </Jumbotron>
          </div>
          Random recipe:
          {console.log(this.props.recipes)}
          <Button onClick={() => this.getRandomRecipe(this.props.recipes)}>
            Get Recipe
          </Button>
          Name: {this.state.randomRecipe.name}
        </Container>
      </div>
    );
  }
}

export default FrontPage;
