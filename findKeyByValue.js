const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log ("assertion passed: " + actual + " === " + expected)
  } else {
    console.log ("assertion failed: " + actual + " !== " + expected)
  }
};

const findKeyByValue = function(object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const someNumbers = {
  a: 10,
  b: 33,
  anotherOne: 1000.2
};

assertEqual(findKeyByValue(someNumbers, 1000.2), "anotherOne");
assertEqual(findKeyByValue(someNumbers, 999), undefined);
assertEqual(findKeyByValue(someNumbers, 33), "b");