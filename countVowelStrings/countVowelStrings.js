/**
 * @param {number} n
 * @return {number}
 */

var hash = {}
var countVowelStrings = function (n, currentNum=5) {
  if(n == 1) return currentNum

  let count = 0;
  for(let i=5; i>=1; i--) {
    count += countVowelStrings(n-1, i)
  }

  return count
};


console.log(countVowelStrings(12))
