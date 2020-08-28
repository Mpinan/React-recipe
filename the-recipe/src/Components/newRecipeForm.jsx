import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";
import Steps from "./steps";

class NewRecipeForm extends Component {
  state = {
    name: "",
    serves: 0,
    difficulty: "",
    type: "",
    cookTime: "",
    prepTime: "",
    description: "",
    ingredients: "",
    steps: {},
    stepsCount: 1,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  newRecipe = (e) => {
    e.preventDefault();
    console.log(this.state, "----1");
    fetch(
      "https://us-central1-the-recipe-api.cloudfunctions.net/app/recipes/create",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            name: this.state.name,
            serves: this.state.serves,
            difficulty: this.state.difficulty,
            type: this.state.type,
            cookTime: this.state.cookTime,
            prepTime: this.state.prepTime,
            description: this.state.description,
            ingredients: this.state.ingredients,
            steps: this.state.steps,
          },
        }),
      }
    )
      .then((response) => response.json())
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  onClickNewStep = () => {
    this.setState({
      stepsCount: this.state.stepsCount + 1,
    });

    let totalSteps = { 0: "" };

    Object.assign(this.state.steps, totalSteps);
    console.log(totalSteps, "-----");
  };

  stepObject = () => {
    let step = {};

    this.setState({});
  };

  getSteps = () => {
    console.log(this.state);
    let steps = [];
    // this.setState({
    //   stepsCount: this.state.stepsCount + 1,
    // });
    for (let i = 1; i < this.state.stepsCount; i++) {
      steps.push(
        <div>
          <Steps
            key={i}
            steps={this.state.steps}
            count={this.state.stepsCount}
          />
          <Button onClick={this.onClickNewStep}>+</Button>
        </div>
      );
    }
    console.log(steps);
    return steps;
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.newRecipe.bind(this)}>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name of dish"
                    id="name"
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="serves">Serves</Label>
                  <Input
                    type="text"
                    name="serves"
                    id="serves"
                    placeholder="1, 2, 3, 4..."
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="difficulty">Difficulty</Label>
                  <Input
                    type="text"
                    name="difficulty"
                    id="difficulty"
                    placeholder="Easy, Medium, Hard"
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="type">Type</Label>
                  <Input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Main, Dessert or Drink"
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="cookTime">Cooking Time</Label>
                  <Input
                    type="text"
                    name="cookTime"
                    id="cookTime"
                    placeholder="Minutes"
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="prepTime">Preparation Time</Label>
                  <Input
                    type="text"
                    name="prepTime"
                    id="prepTime"
                    placeholder="Minutes"
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Short description of your dish"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="ingredients">Ingredients</Label>
              <Input
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder="1 tbs oil, 4g of salt... etc"
                onChange={this.onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="steps">Steps:</Label>
              <Steps
                onChange={this.onChange}
                step={this.state.step}
                stepsCount={this.state.stepsCount}
              />
              <Button onClick={this.onClickNewStep}>+</Button>
              {this.getSteps()}
            </FormGroup>
            <Button>Post Recipe</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NewRecipeForm;
