/****************************************************************
 *             CODERBYTE PERMUTATION STEP CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PermutationStep(num) take the num parameter*
 * being passed & return the next number greater than num using *
 * the same digits.                                             *
 *                                                              *
 * For example: if num is 123 return 132, if it's 12453 return  *
 * 12534. If a number has no greater permutations,              *
 * return -1 (ie. 999).                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: 11121		                                *
 * Output 1: 11211                                              *
 *                                                              *
 * Input 2: 41352                                               *
 * Output 2: 41523                                              *
 *                                                              *
 * Input 3: 897654321                                           *
 * Output 3: 912345678                                          *
 *                                                              *
 * Input 4: 76666666                                            *
 * Output 4: -1                                                 *
 *                                                              *
 ***************************************************************/
function stringMatcher(str) {
  let arr = str.toString().split("");
  const ar = [];
  for (let i = 0; i < arr.length; i++) {
    let t = arr[i];
    let td = arr[i + 1];
    if (t % 2 == 0) {
      ar.push(t);
      if (td % 2 == 0) {
        ar.push("-");
      }
    }
    if (t % 2 != 0) {
      ar.push(t);
      if (td % 2 != 0) {
        ar.push("*");
      }
    }
  }
  return ar.join("");
}

console.log(stringMatcher("123541544142322"));
