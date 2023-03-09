/****************************************************************
 *      CODERBYTE CODELAND USERNAME VALIDATION CHALLENGE        *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CodelandUsernameValidation(str) take the   *
 * str parameter being passed and determine if the string is a  *
 * valid username according to the following rules:             *
 * 1. The username is between 4 and 25 characters.              *
 * 2. It must start with a letter.                              *
 * 3. It can only contain letters, numbers, & underscore.       *
 * 4. It cannot end with an underscore character.               *
 * If the username is valid then your program should return the *
 * string true, otherwise return the string false.              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "aa_"                                               *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: "u__hello_world123"                                 *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/

function CodelandUsernameValidation(string) {
  // length
  // start with thhe letter
  // it contain only letters, numbgers, & underscore
  // no end with _

  const reg = /^[a-zA-Z][\w]{2,22}[^_]$/g;
  // const reg = /^[a-zA-Z][\w].*[^_]$/;
  // const reg = /^[a-zA-Z][^_]*$/g;

  if (reg.test(string)) {
    return true;
    // console.log("hi");
  }
  return false;
}

// KEEP THIS FUNCTION CALL HERE
let str = "dhjt_fghj_h354678967512_";
console.log(CodelandUsernameValidation(str));
console.log(str.length);
