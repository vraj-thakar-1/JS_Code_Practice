/****************************************************************
 *             CODERBYTE BINARY REVERSAL CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BinaryReversal(str) take the str parameter *
 * being passed, which will be a positive integer, take its     *
 * binary representation (padded to the nearest N * 8 bits),    *
 * reverse that string of bits, and then finally return the new *
 * reversed string in decimal form. For example: if str is "47" *
 * then the binary version of this integer is 101111 but we pad *
 * it to be 00101111. Your program should reverse this binary   *
 * string which then becomes: 11110100 and then finally return  *
 * the decimal version of this string, which is 244.            *
 *                                                              *
 * Examples                                                     *
 * Input 1: "213"                                               *
 * Output 1: 171                                                *
 *                                                              *
 * Input 2: "4567"                                              *
 * Output 2: 60296                                              *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 54.6% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function BinaryReversal(str) {
  let rev = (+str).toString(2).split("").reverse().join("");
  rev += "00";
  const ans = parseInt(rev, 2); // binary to decimal\
  console.log("rev:", rev);
  console.log("originnal:", (+str).toString(2));

  return ans;
}

// KEEP THIS FUNCTION CALL HERE
console.log(BinaryReversal("4567"));
// console.log((7).toString(2));
