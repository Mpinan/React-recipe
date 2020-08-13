import React from "react";

const RandomRecipe = ({ randomRecipe }) => (
  <div>
    <h1>Name</h1>
    {randomRecipe.name}
    <h1>Description</h1>
    {randomRecipe.description}
    <h1>Difficulty</h1>
    {randomRecipe.difficulty}
    <h1>Cooking time</h1>
    {randomRecipe.cookTime}
    <h1>Preparation time</h1>
    {randomRecipe.prepTime}
    <h1>Serves</h1>
    {randomRecipe.serves}
    <h1>Ingridients</h1>
    {randomRecipe.ingredients}
    <h1>Steps</h1>
    {Object.keys(randomRecipe.steps).forEach((e) => {
      return e + ": " + randomRecipe.steps[e];
    })}
  </div>
);

export default RandomRecipe;
