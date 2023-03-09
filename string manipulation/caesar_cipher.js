/****************************************************************
 *             CODERBYTE CAESAR CIPHER CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CaesarCipher(str,num) take the str         *
 * parameter and perform a Caesar Cipher shift on it using the  *
 * num parameter as the shifting number. A Caesar Cipher works  *
 * by shifting each letter in the string N places in the        *
 * alphabet (in this case N will be num). Punctuation, spaces,  *
 * and capitalization should remain intact.                     *
 * For example if the string is "Caesar Cipher" and num is 2    *
 * the output should be "Ecguct Ekrjgt".                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Hello" and num = 4                                 *
 * Output 1: Lipps                                              *
 *                                                              *
 * Input 2: "abc" and num = 0                                   *
 * Output 2: abc                                                *
 *                                                              *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 49.2% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function CaesarCipher(string, number) {
  let stri = "";

  for (let i = 0; i < string.length; i++) {
    stri += String.fromCharCode(string.charCodeAt(i) + number);
  }

  return stri;
}
// KEEP THIS FUNCTION CALL HERE
console.log(CaesarCipher("abc", 1));
