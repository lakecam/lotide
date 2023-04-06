const letterPositions = function(sentence) {
  const results = {};
  for (let position = 0; position < sentence.length; position++) {
    const letter = sentence[position];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(position);
      } else {
        results[letter] = [position];
      }
    }
  }
  return results;
};


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

function assertArraysEqual(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`assertion passed: ${arrayA} equals ${arrayB}`);
  } else {
    console.log(`assertion failed: ${arrayA} does not equal ${arrayB}`);
  }
}

const test1 = letterPositions("hello hi");
assertArraysEqual(test1["h"], [0, 6]);
assertArraysEqual(test1["e"], [1]);
assertArraysEqual(test1["l"], [2, 3]);
assertArraysEqual(test1["o"], [4]);
assertArraysEqual(test1["i"], [7]);