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
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Form>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleEmail">Name</Label>
                  <Input type="email" placeholder="Name of dish" />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="examplePassword">Serves</Label>
                  <Input type="text" placeholder="1, 2, 3, 4..." />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="examplePassword">Difficulty</Label>
                  <Input
                    type="text"
                    name="password"
                    id="examplePassword"
                    placeholder="Easy, Medium, Hard"
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="examplePassword">Type</Label>
                  <Input type="text" placeholder="Main, Dessert or Drink" />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="examplePassword">Cooking Time</Label>
                  <Input type="text" placeholder="Minutes" />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="examplePassword">Preparation Time</Label>
                  <Input type="text" placeholder="Minutes" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Description</Label>
              <Input type="text" placeholder="Short description of your dish" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress">Ingredients</Label>
              <Input type="text" placeholder="1 tbs oil, 4g of salt... etc" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress2">Address 2</Label>
              <Input
                type="text"
                name="address2"
                id="exampleAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Text Area
              </Label>
              <Col sm={10}>
                <Steps />
              </Col>
            </FormGroup>
            <Button>Post Recipe</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NewRecipeForm;
