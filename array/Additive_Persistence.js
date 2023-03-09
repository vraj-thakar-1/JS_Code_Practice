/****************************************************************
 *            CODERBYTE ADDITIVE PERSISTENCE CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function AdditivePersistence(num) take the num      *
 * parameter being passed which will always be a positive       *
 * integer and return its additive persistence which is the     *
 * number of times you must add the digits in num until you     *
 * reach a single digit. For example: if num is 2718 then your  *
 * program should return 2                                      *
 * because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.  *
 *                                                              *
 * Examples                                                     *
 * Input 1: 4                                                   *
 * Output 1: 0                                                  *
 *                                                              *
 * Input 2: 19                                                  *
 * Output 2: 2                                                  *
 *                                                              *
 ***************************************************************/
//  done
function AdditivePersistence(num) {
  num = String(num);
  if (num.length === 0) {
    return 0;
  }
  let count = 0;
  while (num.length !== 1) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += Number(num[i]);
    }
    count++;
    num = String(sum);
    console.log(num);
  }
  return count;
}

// KEEP THIS FUNCTION CALL HERE
console.log(AdditivePersistence(888));
// thank you
