// done

function powerSet(arr) {
  const getAllSubsets = (theArray) =>
    theArray.reduce(
      (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
      [[]]
    );

  return getAllSubsets(arr);
}

console.log("powerSet:", powerSet([5, 5, 3, 2, 2]));
