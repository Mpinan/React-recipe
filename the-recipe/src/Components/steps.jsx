import React, { Component } from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";

class Steps extends Component {
  state = {};
  render() {
    return (
      <div>
        <Input
          type="text"
          name="text"
          id="exampleText"
          placeholder="First add oil to the pan...."
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Steps;
