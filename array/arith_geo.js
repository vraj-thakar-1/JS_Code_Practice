/****************************************************************
 *             CODERBYTE ARITHMETC GEOMETRIC CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArithGeo(arr) take the array of numbers    *
 * stored in arr and return the string "Arithmetic" if the      *
 * sequence follows an arithmetic pattern or return "Geometric" *
 * if it follows a geometric pattern. If the sequence doesn't   *
 * follow either pattern return -1. An arithmetic sequence is   *
 * one where the difference between each of the numbers is      *
 * consistent, where as in a geometric sequence, each term after*
 * the first is multiplied by some constant or common ratio.    *
 * Arithmetic example: [2, 4, 6, 8] and                         *
 * Geometric example: [2, 6, 18, 54]. Negative numbers may be   *
 * entered as parameters, 0 will not be entered, and no array   *
 * will contain all the same elements.                          *
 *                                                              *
 * Examples                                                     *
 * Input 1: new int[] {5,10,15}                                 *
 * Output 1: Arithmetic                                         *
 *                                                              *
 * Input 2: new int[] {2,4,16,24}                               *
 * Output 2: -1                                                 *
 *                                                              *
 ***************************************************************/
// done
function ArithGeo(arr) {
  const arth = Math.abs(arr[1] - arr[0]);
  let arthC = 0;
  const geo = Math.abs(arr[1] / arr[0]);
  let GeoC = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i + 1] - arr[i] === arth)) {
      arthC++;
    }
    if (Math.abs(arr[i + 1] / arr[i] === geo)) {
      GeoC++;
    }
  }

  if (arthC === arr.length - 1) {
    return "Arithmetic";
  }
  if (GeoC === arr.length - 1) {
    return "Geometric";
  }
  return -1;
}
console.log(ArithGeo([2, 6, 18, 54]));
// thank you
