import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import TabRecipe from "./tabRecipe";

class Recipes extends Component {
  state = {
    tab: "Main",
  };

  activeTab(tab) {
    if (this.state.tab1 !== tab) {
      this.setState({ tab });
    }
  }

  getDesserts() {
    this.props.recipes.forEach((recipe) => {
      if (recipe.type === "Dessert") {
        return (
          <div>
            <h4>Name</h4>
            {recipe.name}
            <h4>Description</h4>
            {recipe.description}
            <h4>Difficulty</h4>
            {recipe.difficulty}
            <h4>Cooking time</h4>
            {recipe.cookTime}
            <h4>Preparation time</h4>
            {recipe.prepTime}
            <h4>Serves</h4>
            {recipe.serves}
            <h4>Ingredients</h4>
            {recipe.ingredients.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}

            <h4>Steps</h4>
            {Object.entries(recipe.steps).map(([key, val]) => {
              return (
                <div key={key}>
                  {key}: {val}
                  <br />
                </div>
              );
            })}
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink
                onClick={() => {
                  this.activeTab("Main");
                }}
              >
                Mains
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => {
                  this.activeTab("Dessert");
                }}
              >
                Desserts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => {
                  this.activeTab("Drink");
                }}
              >
                Drinks
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.tab}>
            <TabPane tabId="Main">
              <TabRecipe
                recipes={this.props.recipes}
                tabName={this.state.tab}
              />
            </TabPane>
            <TabPane tabId="Dessert">
              <TabRecipe
                recipes={this.props.recipes}
                tabName={this.state.tab}
              />
            </TabPane>
            <TabPane tabId="Drink">
              <TabRecipe
                recipes={this.props.recipes}
                tabName={this.state.tab}
              />
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}

export default Recipes;
