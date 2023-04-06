const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log ("assertion passed: " + actual + " === " + expected)
  } else {
    console.log ("assertion failed: " + actual + " !== " + expected)
  }
};

const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    const item = object[key];
    if (callback(item)) {
      return key;
    }
  }
  return undefined;
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"


assertEqual("one", findKey({"one": 22, "two": 33}, x => x === 22));
assertEqual("b", findKey({"one": 22, "b": 33}, x => x > 30));
assertEqual(undefined, findKey({}, x => x > 1));