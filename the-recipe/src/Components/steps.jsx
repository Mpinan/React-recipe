import React, { Component } from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";

class Steps extends Component {
  state = {
    step: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.step);
  };

  addToStep = () => {
    let step = { 1: this.state.step };
    Object.assign(this.props.steps, { 1: this.state.step });
    console.log(this.props.steps);
  };

  render() {
    return (
      <div>
        <Input
          type="text"
          name="step"
          id="exampleText"
          placeholder="First add oil to the pan...."
          onChange={this.onChange}
        />
        {this.addToStep()}
      </div>
    );
  }
}

export default Steps;
