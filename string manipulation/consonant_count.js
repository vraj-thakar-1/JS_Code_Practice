/****************************************************************
 *             CODERBYTE CONSONANT COUNT CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ConsonantCount(str) take the str string	*
 * parameter being passed and return the number of consonants 	*
 * the string contains.  					*
 *                                                              *
 * Examples                                                     *
 * Input 1: "Hello World"                                       *
 * Output 1: 7		                                        *
 *                                                              *
 * Input 2: "Alphabets"                                         *
 * Output 2: 6                                                  *
 *                                                              *
 ***************************************************************/

function ConsonantCount(str) {
  const vowels = /^[^aeiou]$/i; // do check first character
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.test(str[i])) {
      // skip first
      if (str[i] === " ") {
        continue;
      }
      count++;
    }
  }
return count;

}

// keep this function call here
console.log(ConsonantCount("Hello World"));
