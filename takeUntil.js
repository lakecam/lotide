const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      result.push(item);
    }
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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


assertArraysEqual([1, 3, 2], takeUntil([1, 3, 2, 5, 1], x => x >= 5));