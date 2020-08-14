import React, { Component } from "react";
import FrontPage from "./Components/frontPage";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import NotFound from "./Components/notFound";
import Recipes from "./Components/recipes";
import NewRecipeForm from "./Components/newRecipeForm";

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
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/home"
              render={(props) => <FrontPage recipes={this.state.recipes} />}
            />
            <Redirect exact path="/" exact to="/home" />
            <Route
              exact
              path="/recipes"
              render={(props) => (
                <Recipes {...props} recipes={this.state.recipes} />
              )}
            />
            <Route exact path="/new-recipe" component={NewRecipeForm} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
