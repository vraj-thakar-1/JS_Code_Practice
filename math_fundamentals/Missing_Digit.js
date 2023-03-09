/****************************************************************
 *              CODERBYTE MISSING DIGIT CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MissingDigit(str) take the str parameter,	*
 * which will be simple mathematical formula with three numbers,*
 * a single operator (+, -, *, or /) and an equal sign (=) and  *
 * return the digit that completes the equation.                *
 *                                                              *
 * In one of the numbers in the equation, there will be an x    *
 * character, and your program should determine what digit is   *
 * missing.                                                     *
 *                                                              *
 * For example, if str is "3x + 12 = 46" then your program      *
 * should output 4. The x character can appear in any of the    *
 * three numbers and all three numbers will be greater than or  *
 * equal to 0 and less than or equal to 1000000.                *
 *                                                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "4 - 2 = x"		                                *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: "1x0 * 12 = 1200"		                        *
 * Output 2: 0                                                  *
 *                                                              *
 ***************************************************************/
function check(params) {
  let b = params.trim(); // remove spaces
  console.log("b:", b);

  let a = b.split("=");
  console.log("a:", a);

  for (let i = 0; i < 10; i++) {
    if (eval(a[0].replace("x", i)) == eval(a[1].replace("x", i))) {
      return i;
    }
  }
}

console.log(check("4-2 =x"));
//
//
//
//
///
///
///
///
///
///
//
//

// only for single operation
// function MissingDigit(str) {
//   let operator;

//   let lst = str.split(/[+-/*=]/);
//   let opt = str.split(/[0-9a-z=" "]/);
//   for (let i = 0; i < opt.length; i++) {
//     if (opt[i] !== "") {
//       operator = opt[i];
//     }
//   }
//   console.log("lst:", lst);
//   console.log("opt:", opt);
//   console.log("operator:", operator);
//   const c1 = [lst[0]];
//   const c2 = [lst[1]];
//   const result = [lst[2]];

//   // for finding x
//   let finder = [0, 0, 0];

//   for (let i = 0; i < lst.length; i++) {
//     let r = lst[i];
//     for (let j = 0; j < r.length; j++) {
//       if (r[j] === "x") {
//         finder[i] = 1;
//       }
//     }
//   }
//   console.log("finder:", finder);
//   if (finder[0] === 1) {
//     if (operator === "*") {
//       operator = "/";
//       console.log("hi");
//     } else if (operator === "/") {
//       operator = "*";
//     } else if (operator === "+") {
//       operator = "-";
//     } else if (operator === "-") {
//       operator = "+";
//     }
//     c1.push(operation(operator, result, c2));
//   }
//   if (finder[1] === 1) {
//     if (operator === "*") {
//       operator = "/";
//       console.log("hi");
//     } else if (operator === "/") {
//       operator = "*";
//     } else if (operator === "+") {
//       operator = "-";
//     } else if (operator === "-") {
//       operator = "+";
//     }
//     c2.push(operation(operator, result, c1));
//   }
//   if (finder[2] === 1) {
//     result.push(operation(operator, c1, c2));
//   }

//   function operation(op, c1, c2) {
//     switch (op) {
//       case "+":
//         return Number(c1) + Number(c2);
//         break;
//       case "-":
//         return c1 - c2;
//         break;
//       case "*":
//         return c1 * c2;
//         break;
//       case "/":
//         return c1 / c2;
//         break;
//     }
//   }

//   console.log("c1:", c1);
//   console.log("c2:", c2);
//   console.log("resu:", result);
//   let final = [c1, c2, result];

//   let f;
//   for (let i = 0; i < final.length; i++) {
//     if (final[i].length > 1) {
//       f = final[i];
//     }
//   }
//   console.log("f:", f);

//   const f1 = f[0].trim().split("");
//   if (f1.length > 1) {
//     const indx = f1.findIndex((val) => val === "x");

//     const f2 = String(f[1]).split("");
//     console.log("f2:", f2);
//     console.log("f1:", f1);
//     console.log("ind:", indx);

//     return f2[indx];
//   }

//   return f[1];
// }

// // KEEP THIS FUNCTION CALL HERE
// console.log(`x:${MissingDigit("8x0 - 10 = 800")}`);
// // 4 - 2 = x
// //1x0 * 12 = 1200
