/****************************************************************
 *              CODERBYTE ARRAY MATCHING CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayMatching(strArr) read the array of    *
 * strings stored in strArr which will contain only two elements*
 * both of which will represent an array of positive integers.  *
 * For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], *
 * then both elements in the input represent two integer arrays *
 * and your goal for this challenge is to add the elements in   *
 * corresponding locations from both arrays. For the example    *
 * input your program should do the following additions:        *
 * [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then             *
 * equals [6, 4, 13, 17]. Your program should finally return    *
 * this resulting array in a string format with each element    *
 * separated by a hyphen: 6-4-13-17.                            *
 * If the two arrays do not have the same amount of elements,   *
 * then simply append the remaining elements onto the new array *
 * (example shown below). Both arrays will be in the            *
 * format: [e1, e2, e3, ...] where at least one element will    *
 * exist in each array.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]                   *
 * Output 1: 7-4-6-10-6                                         *
 *                                                              *
 * Input 2: ["[1, 2, 1]", "[2, 1, 5, 2]"]                       *
 * Output 2: 3-3-6-2                                            *
 *                                                              *
 ***************************************************************/
// done
function ArrayMatching(strArr) {
  const reg = /\d+/g;
  let l1 = strArr[0].match(reg).map(Number);
  let l2 = strArr[1].match(reg).map(Number);
  console.log("l1:", l1);

  let re = [];
  let ll1 = l1.length;
  let ll2 = l2.length;
  let d = 0;

  if (ll1 !== ll2) {
    if (ll1 > ll2) {
      d = ll1 - ll2;
      for (let i = 0; i < d; i++) {
        l2.push(0);
      }
    } else {
      d = ll2 - ll1;
      for (let i = 0; i < d; i++) {
        l1.push(0);
      }
    }
  }
  let restr = `${l1[0] + l2[0]}`;

  for (let i = 1; i < l1.length; i++) {
    restr += `-${l1[i] + l2[i]}`;
  }
  //   console.log("restr:", restr);
  return restr;
}

// KEEP THIS FUNCTION CALL HERE
console.log(ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"]));
// thank you
