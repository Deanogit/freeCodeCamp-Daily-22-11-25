// Recipe Scaler
// Given an array of recipe ingredients and a number to scale the recipe, return an array with the quantities scaled accordingly.

// Each item in the given array will be a string in the format: "quantity unit ingredient". For example "2 C Flour".
// Scale the quantity by the given number. Do not include any trailing zeros and do not convert any units.
// Return the scaled items in the same order they are given.

// function scaleRecipe(ingredients, scale) {
// console.log("This is whats in the arguments:", ingredients, scale)
// returns ["2 C Flour", "1.5 T Sugar"], 2
// loop through ingredients and return a new array
// const array = ingredients.map((x) => x.split(" "))
// console.log("This is whats in the ingredients array", array[1])
// multiply the first array item by scale
// const newArray = array.map((x) => `${x[0] * scale} ${x.map((y) => y.join(" "))}`);
// console.log("This is what is in the new array", newArray)
// I'm missing some of the arrays ...
// return ingredients;
//  return newArray
//}

function scaleRecipe(ingredients, scale) {
  // for each ingredient
  // split up ingredients into an array
  // console.log(scale)
  // write an shiftUnshift function
  function shiftUnshift(x) {
    console.log('hey', x, scale);
    const shift = x.shift();
    console.log(shift);
    const unshift = shift * scale;
    x.unshift(unshift);
    x.join(' ');
    return x;
  }
  const ingredientsArray = ingredients.map((x) => x.split(' '));
  // console.log(ingredientsArray)
  // loop through each entry
  const scaled = ingredientsArray.map((x, scale) => shiftUnshift(x, scale));
  console.log(scaled);
  //ingredientsArray.unshift(shift * scale);
  // take the first entry
  //const newEntry = ingredientsArray.map((x) => x[0] * scale)
  //ingredientsArray[0] = ingredientsArray[0] * scale;
  // console.log(newEntry)
  // remove it
  // replace it with first entry * scale
  // join ingredients
  // return ingredients
}

// The shift() method removes the first item of an array.

// The shift() method changes the original array.

// The shift() method returns the shifted element.

// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
