import React, { Component } from "react";
import FrontPage from "./Components/frontPage";

class App extends Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes() {
    fetch(`https://us-central1-the-recipe-api.cloudfunctions.net/app/recipes`)
      .then((response) => response.json())
      .then((result) => this.setState({ recipes: result }))
      .then((result) => console.log(this.state.recipes))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <FrontPage recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
