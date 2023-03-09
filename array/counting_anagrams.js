/****************************************************************
 *             CODERBYTE COUNTING ANAGRAMS CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CountingAnagrams(str) take the str         *
 * parameter & determine how many anagrams exist in the string. *
 * An anagram is a new word that is produced from rearranging   *
 * the characters in a different word.                          *
 * For example: cars and arcs are anagrams.                     *
 *                                                              *
 * Your program should determine how many anagrams exist in a   *
 * given string and return the total number.                    *
 *                                                              *
 * For example: "cars are very cool so are arcs and my os"      *
 * then your program should return 2 because "cars" and "arcs"  *
 * form 1 anagram and "so" and "os" form a 2nd anagram.         *
 *                                                              *
 * The word "are" occurs twice in the string but it isn't an    *
 * anagram because it is the same word just repeated.           *
 * The string will contain only spaces and lowercase letters,   *
 * no punctuation, numbers, or uppercase letters.               *
 *                                                              *
 * Examples                                                     *
 * Input 1: "aa aa odg dog gdo"                                 *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: "a c b c run urn urn"                               *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

function CountingAnagrams(str) {
  const lst = str.split(" ");
  let nw = [];

  for (let i = 0; i < lst.length; i++) {
    if (lst[i].length > 1) {
      nw.push(lst[i].split("").sort().join(""));
    }
  }

  const st = new Set(nw);
  //   console.log("st", st);

  return st.size;
}

// KEEP THIS FUNCTION CALL HERE
console.log(CountingAnagrams("aa aa odg dog gdo"));

// const lst = str.split(" ");
// let count = 0;
// let =[];

// for (let i = 0; i < lst.length; i++) {
//   if (lst[i].length > 1) {
//     // now
//     let ct2 = 0;
//     let cr = lst[i].split("").sort().join(""); // run
//     console.log(`cr${i}:${cr}`);

//     for (let j = 0; j < lst.length; j++) {
//       let x = lst[j].split("").sort().join("");
//       console.log(`x${j}:${x}`);

//       if (i !== j && cr === x) {
//         ct2++;
//       }
//     }
//     console.log("ct2", ct2);

//     if (ct2 > 0) {
//       count++;
//     }
//   }
// }
