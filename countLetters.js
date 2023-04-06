//assertEqual implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log ("assertion passed: " + actual + " === " + expected)
  } else {
    console.log ("assertion failed: " + actual + " !== " + expected)
  }
};

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};


const result1 = countLetters("hello hi");
assertEqual(result1["h"], 2);
assertEqual(result1["e"], 1);