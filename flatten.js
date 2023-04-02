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

function flatten(array) {
  const result = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (const subitem of item) {
        result.push(subitem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

assertArraysEqual([1, 2, 3], flatten([1, [2, 3]]));