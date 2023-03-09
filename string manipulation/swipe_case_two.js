/****************************************************************
 *             CODERBYTE SWIPE CASE TWO CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SwapII(str) take the str parameter and swap*
 * the case of each character. Then, if a letter is between two *
 * numbers (without separation), switch the places of the two   *
 * numbers.                                                     *
 * For example: if str is "6Hello4 -8World, 7 yes3"             *
 * the output should be 4hELLO6 -8wORLD, 7 YES3.                *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Hello -5LOL6"                                      *
 * Output 1: hELLO -6lol5                                       *
 *                                                              *
 * Input 2: "2S 6 du5d4e"                                       *
 * Output 2: 2s 6 DU4D5E                                        *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 51.8% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function SwapII(str) {
  let dgt =[];
  const lst = str.split(" ");
  for (let i = 0; i < lst.length; i++) {
    let ele = lst[i].split("");
    for (let j = 0; j < ele.length; j++) {
      if (/\d+/g.test(Number(ele[j]))
      {
        console.log('slkdjf');
        
      }

    }
  
  }
  console.log("lst:", lst);
}
// KEEP THIS FUNCTION CALL HERE
console.log(SwapII("2S 6 du5d4e"));
console.log(Number(","));

