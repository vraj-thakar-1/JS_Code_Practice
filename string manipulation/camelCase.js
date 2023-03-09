/****************************************************************
 *             CODERBYTE CAMEL CASE CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CamelCase(str) take the str parameter being*
 * passed and return it in proper camel case format where the   *
 * first letter of each word is capitalized (excluding the first*
 * letter). The string will only contain letters and some       *
 * combination of delimiter punctuation characters separating   *
 * each word.                                                   *
 *                                                              *
 * For example: if str is "BOB loves-coding" then your program  *
 *  should return the string bobLovesCoding.                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: "cats AND*Dogs-are Awesome"                         *
 * Output 1: catsAndDogsAreAwesome                              *
 *                                                              *
 * Input 2: "a b c d-e-f%g"                                     *
 * Output 2: aBCDEFG                                            *
 ***************************************************************/

function CamelCase(str) {
  let arr = str.split(/[" "%*-]/g);
  let strr = "";
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let v = arr[i];
    for (let j = 0; j < v.length; j++) {
      if (i === 0 && j === 0) {
        strr += v[j].toLowerCase();
      } else if (j === 0) {
        strr += v[j].toUpperCase();
      } else {
        strr += v[j].toLowerCase();
      }
    }
  }
  return strr;
}

// KEEP THIS FUNCTION CALL HERE
console.log(CamelCase("a b c d-e-f%g"));
