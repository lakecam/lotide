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

function middle(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[Math.floor(array.length / 2)]];
  } else {
    const point = array.length / 2 - 1;
    return array.slice(point, point + 2);
  }
}

assertArraysEqual([4, 9], middle([1, 2, 4, 9, 6, 8]));
assertArraysEqual([], middle([1]));
assertArraysEqual([], middle([9, 10]));
assertArraysEqual([3], middle([1, 3, 5]));