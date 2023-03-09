/****************************************************************
 *             CODERBYTE DIFFERENT CASES CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function DifferentCases(str) take the str parameter *
 * being passed and return it in upper camel case format where  *
 * the first letter of each word is capitalized. The string will*
 * only contain letters and some combination of delimiter       *
 * punctuation characters separating each word.                 *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Daniel LikeS-coding"                               *
 * Output 1: DanielLikesCoding                                  *
 *                                                              *
 * Input 2: "cats AND*Dogs-are Awesome"                         *
 * Output 2: CatsAndDogsAreAwesome                              *
 *                                                              *
 * Input 3: "a b c d-e-f%g"                                     *
 * Output 3: ABCDEFG                                            *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 31.2% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function DifferentCases(string) {
  const lst = string.split(/[-*" "%]/);
  let final = "";

  for (let i = 0; i < lst.length; i++) {
    final +=
      lst[i][0].toUpperCase() + lst[i].slice(1, lst[i].length).toLowerCase();
  }
  return final;
}

// KEEP THIS FUNCTION CALL HERE
console.log("1:", DifferentCases("a b c d-e-f%g"));
console.log("2:", DifferentCases("cats AND*Dogs-are Awesome"));
console.log("3:", DifferentCases("Daniel LikeS-coding"));
