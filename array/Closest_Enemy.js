/****************************************************************
 *                 CODERBYTE CLOSEST ENEMY CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ClosestEnemy(arr) take the array of numbers*
 * stored in arr and from the position in the array where a 1	*
 * is, return the number of spaces either left or right you	*
 * must move to reach an enemy which is represented by a 2.	*
 * For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your	*
 * program should return 3 because the closest enemy (2) is 3	*
 * spaces away from the 1. The array will contain any number of	*
 * 0's and 2's, but only a single 1. It may not contain any 2's	*
 * at all as well, where in that case your program should	*
 * return a 0. 							*
 *                                                              *
 * Examples                                                     *
 * Input 1: [1, 0, 0, 0, 2, 2, 2] 	                        *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: [2, 0, 0, 0, 2, 2, 1, 0]                            *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/
// done
function ClosestEnemy(array) {
  let ind_1 = 0;
  let twos = [];

  const place = array.findIndex((val) => val === 2);
  if (place === -1) {
    return 0;
  }
  // find both indexes of  1 and 0
  for (let i = 0; i < array.length; i++) {
    if (1 === array[i]) {
      ind_1 = i;
    }
    if (2 === array[i]) {
      twos.push(i);
    }
  }
  // find closest one
  let close = Math.abs(ind_1 - twos[0]);
  for (let i = 1; i < twos.length; i++) {
    let re = Math.abs(ind_1 - twos[i]);

    if (re < close) {
      close = re;
    }
  }
  return close;
}

// KEEP THIS FUNCTION CALL HERE
console.log(ClosestEnemy([2, 0, 0, 0, 2, 2, 1, 0]));

// thank you
