
function eqArrays(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

const assertEqual = function(actual, expected) {
if (actual === expected) {
  console.log ("assertion passed: " + actual + " === " + expected)
} else {
  console.log ("assertion failed: " + actual + " !== " + expected)
}
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], [5]), false);
assertEqual(eqArrays([1], ["1"]), false);