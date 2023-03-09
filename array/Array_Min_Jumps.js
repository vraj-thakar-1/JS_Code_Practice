/****************************************************************
 *             CODERBYTE ARRAY MIN JUMPS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayMinJumps(arr) take the array of       *
 * integers stored in arr, where each integer represents the    *
 * maximum number of steps that can be made from that position, *
 * and determine the least amount of jumps that can be made to  *
 * reach the end of the array.                                  *
 * For example: if arr is [1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then   *
 * your program should output the number 3 because you can reach*
 * the end of the array from the beginning via the following    *
 * steps: 1 -> 5 -> 9 -> END or 1 -> 5 -> 6 -> END.             *
 * Both of these combinations produce a series of 3 steps.      *
 * And as you can see, you don't always have to take the maximum*
 * number of jumps at a specific position, you can take less    *
 * jumps even though the number is higher.                      *
 *                                                              *
 * If it's not possible to reach the end of the array, return -1*
 *                                                              *
 * Examples                                                     *
 * Input 1: [3, 4, 2, 1, 1, 100]                                *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: [1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2]       *
 * Output 2: 4                                                  *
 *                                                              *
 ***************************************************************/

// JavaScript program to find Minimum
// number of jumps to reach end

// Function to return the minimum number
// of jumps to reach arr[h] from arr[l]
function minJumps(arr, n) {
  // Base case: when source and
  // destination are same
  if (n == 1) return 0;

  // Traverse through all the points
  // reachable from arr[l]
  // Recursively, get the minimum number
  // of jumps needed to reach arr[h] from
  // these reachable points
  let res = Number.MAX_VALUE;
  console.log("res:", res);
  //i=6-2=4
  for (let i = n - 2; i >= 0; i--) {
    if (i + arr[i] >= n - 1) {
      let sub_res = minJumps(arr, i + 1);
      if (sub_res != Number.MAX_VALUE) res = Math.min(res, sub_res + 1);
    }
  }

  return res;
}

// Driver Code

let arr = [3, 4, 2, 1, 1, 100];
let n = arr.length; //6
document.write("Minimum number of jumps to");
document.write(" reach end is " + minJumps(arr, n));
