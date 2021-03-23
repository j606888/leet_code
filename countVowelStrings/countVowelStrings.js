bigHash = {}
var countVowelStrings = function(n, currentNum=5) {
  if(bigHash[n] == undefined) bigHash[n] = {}
  if(n == 1) return currentNum;
  if(bigHash[n][currentNum]) return bigHash[n][currentNum]
  count = 0
  for(let i = 5; i >= 1; i--) {
    if(currentNum >= i) {
      bigHash[n][currentNum] = countVowelStrings(n - 1, i)
      count += bigHash[n][currentNum]
    }
  }
  return count
};

console.log(countVowelStrings(3));