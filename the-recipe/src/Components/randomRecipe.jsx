import React from "react";
import { Container } from "reactstrap";

const RandomRecipe = ({ randomRecipe }) => (
  <div>
    <Container>
      <h4>Name</h4>
      {randomRecipe.name}
      <h4>Description</h4>
      {randomRecipe.description}
      <h4>Difficulty</h4>
      {randomRecipe.difficulty}
      <h4>Cooking time</h4>
      {randomRecipe.cookTime}
      <h4>Preparation time</h4>
      {randomRecipe.prepTime}
      <h4>Serves</h4>
      {randomRecipe.serves}
    </Container>
    <Container>
      <h4>Ingredients</h4>
      {randomRecipe.ingredients.split("\n").map(function (item, idx) {
        return (
          <span key={idx}>
            {item}
            <br />
          </span>
        );
      })}

      <h4>Steps</h4>
      {Object.entries(randomRecipe.steps).map(([key, val]) => {
        return (
          <div>
            {key}: {val}
            <br />
          </div>
        );
      })}
    </Container>
  </div>
);

export default RandomRecipe;
