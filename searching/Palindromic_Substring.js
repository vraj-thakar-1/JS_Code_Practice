/****************************************************************
 *          CODERBYTE PALINDROMIC SUBSTRING CHALLENGE		*
 *                                                              *
 * Problem Statement                                            *
 * Have the function PalindromicSubstring(str) take the str     *
 * parameter being passed and find the longest palindromic      *
 * substring, which means the longest substring which is read   *
 * the same forwards as it is backwards.                        *
 * For example: if str is "abracecars" then your program should *
 * return the string racecar because it is the longest          *
 * palindrome within the input string.                          *
 *                                                              *
 * The input will only contain lowercase alphabetic characters. *
 * The longest palindromic substring will always be unique,     *
 * but if there is none that is longer than 2 characters,       *
 * return the string none.                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "hellosannasmith"                                   *
 * Output 1: sannas                                             *
 *                                                              *
 * Input 2: "abcdefgg"                                          *
 * Output 2: none                                               *
 *                                                              *
 ***************************************************************/

function isPalindrome(string) {
  // max string palindrome\
  function pali(str) {
    const str1 = str;
    const str2 = str.split("").reverse().join("");
    if (str1 === str2) {
      return true;
    } else {
      return false;
    }
  }
  let pal = "";
  for (let i = string.length; i > 2; i--) {
    for (let j = 0; j < string.length; j++) {
      let slce = string.substr(j, i);
      console.log(`slce${i}:${slce}`);

      if (pali(slce) && pal.length < slce.length) {
        pal = slce;
      }
    }
  }
  if (pal.length > 2) {
    return pal;
  }
  return "none";
}

// KEEP THIS FUNCTION CALL HERE
console.log(`ans:${isPalindrome("abcdefgag")}`);
