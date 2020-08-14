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
                  <Input type="text" placeholder="minutes" />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="examplePassword">Preparation Time</Label>
                  <Input type="text" placeholder="minutes" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Description</Label>
              <Input
                type="text"
                name="address"
                id="exampleAddress"
                placeholder="Short description of your dish"
              />
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
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" id="exampleCity" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" id="exampleState" />
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zip" id="exampleZip" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Input type="checkbox" name="check" id="exampleCheck" />
              <Label for="exampleCheck" check>
                Check me out
              </Label>
            </FormGroup>
            <Button>Sign in</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NewRecipeForm;
