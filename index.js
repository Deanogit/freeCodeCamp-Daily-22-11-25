// Recipe Scaler
// Given an array of recipe ingredients and a number to scale the recipe, return an array with the quantities scaled accordingly.

// Each item in the given array will be a string in the format: "quantity unit ingredient". For example "2 C Flour".
// Scale the quantity by the given number. Do not include any trailing zeros and do not convert any units.
// Return the scaled items in the same order they are given.

function scaleRecipe(ingredients, scale) {
  console.log('This is whats in the arguments:', ingredients, scale);
  // returns ["2 C Flour", "1.5 T Sugar"], 2
  // loop through ingredients and return a new array
  const array = ingredients.map((x) => x.split(' '));
  console.log('This is whats in the ingredients array', array[1]);
  // multiply the first array item by scale
  const newArray = array.map(
    (x) => `${x[0] * scale} ${x.map((y) => y.join(' '))}`
  );
  console.log('This is what is in the new array', newArray);
  // I'm missing some of the arrays ...
  // return ingredients;
  return newArray;
}
