/****************************************************************
 *              CODERBYTE ARRAY SIMILAR CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Two arrays are called similar if one can be obtained from    *
 * another by swapping at most one pair of elements in one of   *
 * the arrays. Given two arrays a and b, check whether they are *
 * similar.                                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: a = [1, 2, 3] and b = [1, 2, 3]                     *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: [1, 2, 3] and b = [2, 1, 3]                         *
 * Output 2: true                                               *
 * Explanation: We can obtain b from a by swapping 2 and 1 in b.*
 *                                                              *
 * Input 3: [1, 2, 2] and b = [2, 1, 1]                         *
 * Output 3: false                                              *
 * Explanation: Any swap of any two elements either in a or b   *
 * won't make a and b equal                                     *
 *                                                              *
 ***************************************************************/

function solution(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  const sa = a.sort((a, b) => a - b);
  const sb = b.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < sa.length; i++) {
    if (sa[i] === sb[i]) {
      count++;
      console.log("hi");
    }
  }
  console.log("count:", count);

  if (count === sa.length) {
    return true;
  }
  return false;
}

// KEEP THIS FUNCTION CALL HERE
console.log(solution([1, 2, 3], [2, 1, 3]));
