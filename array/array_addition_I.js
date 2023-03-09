/****************************************************************
 *             CODERBYTE ARRAY ADDITION I CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayAdditionI(arr) take the array of      *
 * numbers stored in arr and return the string true if any      *
 * combination of numbers in the array (excluding the largest   *
 * number) can be added up to equal the largest number in the   *
 * array, otherwise return the string false.                    *
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output *
 * should return true because 4 + 6 + 10 + 3 = 23. The array    *
 * will not be empty, will not contain all the same elements,   *
 * and may contain negative numbers.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: [5,7,16,1,2]                                        *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [3,5,-1,8,12]                                       *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/
// done
function ArrayAdditionI(arr) {
  const srtd = arr.sort(function (a, b) {
    return a - b;
  });

  const max = srtd.pop(); // pop the last element
  const getAllSubsets = (Array) =>
    Array.reduce(
      (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
      [[]]
    );
  const result = getAllSubsets(srtd);

  console.log(result);

  const sum = srtd.reduce(function (cr, acc) {
    return cr + acc;
  });
  let sum1;
  console.log("srtd:", srtd);

  if (sum >= max) {
    for (let i = 0; i < result.length; i++) {
      if (result[i].length > 1) {
        let sum1 = 0;
        for (let j = 0; j < result[i].length; j++) {
          sum1 += result[i][j];
        }
        if (sum1 === max) {
          return true;
        }
      }
    }
  } else {
    return false;
  }
}

// KEEP THIS FUNCTION CALL HERE
console.log(ArrayAdditionI([13, 8, -5, 8, 16]));

// find Power set

// const getAllSubsets = (theArray) =>
//   theArray.reduce(
//     (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
//     [[]]
//   );

// console.log(getAllSubsets([1, 2, 3]));

// thank you
