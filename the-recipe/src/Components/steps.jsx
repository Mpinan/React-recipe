import React, { Component } from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";

const Steps = ({ idx, steps, handleStepChange }) => {
  const description = `description-${idx}`;
  return (
    <div key={`cat-${idx}`}>
      <Label htmlFor={description}>{`Step ${idx + 1}`} Description</Label>
      <Input
        type="text"
        name={description}
        data-idx={idx}
        id={description}
        className="description"
        value={steps[idx].description}
        onChange={handleStepChange}
      />
    </div>
  );
};

export default Steps;
