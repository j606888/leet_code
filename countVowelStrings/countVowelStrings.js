/**
 * @param {number} n
 * @return {number}
 */

// var hash = {}
// var countVowelStrings = function (n, currentNum=5) {
//   if(n == 1) return currentNum

//   let count = 0;
//   for(let i=5; i>=1; i--) {
//     count += countVowelStrings(n-1, i)
//   }

//   return count
// };

var countVowelStrings = function (n) {
  var dp = {}
  for (let i = 1; i <= n; i++) {
    dp[i] = {}
    for (let k = 1; k <= 5; k++) {
      dp[i][k] = ( k > 1 ? dp[i][k-1] : 0) + ( i > 1 ? dp[i-1][k] : 1)
    }
  }

  return dp[n][5];
}

console.log(countVowelStrings(33))

