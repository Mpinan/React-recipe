import React from "react";

const TabRecipe = (props) => {
  let recipesMain = props.recipes;
  return recipesMain.map((recipe) => {
    if (recipe.type === props.tabName) {
      console.log(recipe.type, props.tabName);
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
};

export default TabRecipe;
