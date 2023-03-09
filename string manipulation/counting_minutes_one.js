/****************************************************************
 *             CODERBYTE COUNTING MINUTES ONE CHALLENGE         *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CountingMinutesI(str) take the str         *
 * parameter being passed which will be two times               *
 * (each properly formatted with a colon and am or pm)          *
 * separated by a hyphen and return the total number of minutes *
 * between the two times. The time will be in a 12 hour clock   *
 * format.                                                      *
 * For example: if str is 9:00am-10:00am then the               *
 * output should be 60. If str is 1:00pm-11:00am the output     *
 * should be 1320.                                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "12:30pm-12:00am"                                   *
 * Output 1: 690                                                *
 *                                                              *
 * Input 2: "1:23am-1:08am"                                     *
 * Output 2: 1425                                               *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 44.7% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function CountingMinutesI(dateString) {
  const lst = dateString.split("-");
  console.log("lst:", lst);
  const ampm = dateString.match(/[ap]m/g);
  const inn = lst[0].split(":");
  const out = lst[1].split(":");
  const hour = [inn[0], out[0]];
  const minutes = [inn[1].match(/\d/g).join(""), out[1].match(/\d/g).join("")];

  console.log("ampm", ampm);
  // console.log("inn", inn);

  // console.log("out", out);
  console.log("hour", hour);
  console.log("minutes", minutes);
}

// KEEP THIS FUNCTION CALL HERE
console.log(CountingMinutesI("1:23am-1:08am"));
