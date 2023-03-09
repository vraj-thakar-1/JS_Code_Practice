/****************************************************************
 *               CODERBYTE EVEN PAIRS CHALLENGE		        *
 *                                                              *
 * Problem Statement                                            *
 * Have the function EvenPairs(str) take the str parameter being*
 * passed & determine if a pair of adjacent even numbers exists *
 * anywhere in the string. If a pair exists, return the string  *
 * true, otherwise return false. For example: if str is         *
 * "f178svg3k19k46" then there are two even numbers at the end  *
 * of the string, "46" so your program should return the string *
 * true. Another example: if str is "7r5gg812" then the pair is *
 * "812" (8 & 12) so your program should return the string true *
 *                                                              *
 * Examples                                                     *
 * Input 1: "3gy41d216"                                         *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: "f09r27i8e67"                                       *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/

function EvenPairs(str) {
  const len = str.length - 1;
  const arr = str.match(/\d\d+/g);
  console.log("arr", arr);

  for (let i = 0; i < arr.length; i++) {
    x = arr[i];
    count = 0;
    for (let j = 0; j < x.length; j++) {
      if (x[j] % 2 === 0) {
        count++;
      }
    }
    if (count > 1) {
      return true;
    }
  }
  return false;
}

// KEEP THIS FUNCTION CALL HERE
console.log(EvenPairs("3gy41d216"));
console.log(EvenPairs("f09r27i8e67"));
console.log(EvenPairs("f09r27i8e6723232"));
