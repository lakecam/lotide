const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual([2, 6, 20], map([1, 3, 10], x => x * 2));
assertArraysEqual(["a", "ba", "ZZa"], map(["", "b", "ZZ"], x => x + "a"));
assertArraysEqual([false, true], map([25, 20], x => x % 2 === 0));