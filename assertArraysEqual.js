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

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,5], [2, 10]);