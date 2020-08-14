import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";

class Recipes extends Component {
  state = {
    tab: "1",
  };

  activeTab(tab) {
    if (this.state.tab1 !== tab) {
      this.setState({ tab });
    }
  }

  getMains() {
    console.log(this.props, "hello");
    this.props.recipes.forEach((recipe) => {
      if (recipe.type === "Main") {
        return (
          <div>
            <h1>HELLOOOOOOOOOOO</h1>
            {/* <h4>Name</h4>
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
            })} */}
          </div>
        );
      }
    });
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
                  this.activeTab("1");
                }}
              >
                Mains
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => {
                  this.activeTab("2");
                }}
              >
                Desserts
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.tab}>
            <TabPane tabId="1">
              <h4>Tab 1 Contents</h4>
              {this.getMains()}
            </TabPane>
            <TabPane tabId="2">{this.getDesserts()}</TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}

export default Recipes;
