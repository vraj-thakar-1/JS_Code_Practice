/****************************************************************
 *            CODERBYTE BRACKET COMBINATIONS CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BracketCombinations(num) read num which    *
 * will be an integer greater than or equal to zero, and return *
 * the number of valid combinations that can be formed with num *
 * pairs of parentheses.                                        *
 *                                                              *
 * For example, if input is 3, then the possible combinations   *
 * of 3 pairs of parenthesis,                                   *
 * namely: ()()(), are ()()(), ()(()), (())(), ((())), & (()()) *
 *                                                              *
 * There are 5 total combinations when the input is 3, so your  *
 * program should return 5.                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: 3                                                   *
 * Output 1: 5                                                  *
 *                                                              *
 * Input 2: 2                                                   *
 * Output 2: 2                                                  *
 *                                                              *
 ***************************************************************/

/*
        Coding Tips:
                1) if n = 3, then we can have 3 open & 3 closing parenthesis
                2) closing bracket cannot come before open bracket
        Rules:
                1) Only add open parenthesis if open < n
                2) Only add closing parenthesis if open > close
                3) We get a valid combination IIF,  openParenthesisCount == closeParenthesisCount && closeParenthesisCount == n && openParenthesisCount == n
*/
//done
function BracketCombinations(n) {}

// KEEP THIS FUNCTION CALL HERE
console.log(BracketCombinations(readline()));

//thank you
