/****************************************************************
 *          CODERBYTE NON REPEATING CHARACTERS CHALLENGE        *
 *                                                              *
 * Problem Statement                                            *
 * Have the function NonrepeatingCharacter(str) take the str    *
 * parameter being passed, which will contain only alphabetic   *
 * characters and spaces, and return the first non-repeating    *
 * character. For example: if str is "agettkgaeee" then your    *
 * program should return k. The string will always contain at   *
 * least one character and there will always be at least one    *
 * non-repeating character.                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: "abcdef"                                            *
 * Output 1: a                                                  *
 *                                                              *
 * Input 2: "hello world hi hey"                                *
 * Output 2: w                                                  *
 *                                                              *
 ***************************************************************/

function NonrepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let v = str[i]; //a
    let count = 0;
    // console.log(`v${i}:${v}`);

    for (let j = 0; j < str.length; j++) {
      if (i !== j && v === str[j]) {
        count++;
      }
    }
    if (count === 0) {
      return v;
    }
  }
}

// KEEP THIS FUNCTION CALL HERE
console.log(NonrepeatingCharacter("agettkgaeee"));
//k
