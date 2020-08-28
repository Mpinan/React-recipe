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
    let count = 0;
    let step = { "1": this.state.step };
    // Object.assign(this.props.steps, { 1: this.state.step });
    let object = {};
    Object.assign(object, step);
    // console.log(step);
    console.log(object);
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
