bigHash = {}
var countVowelStrings = function(n, currentNum=5) {
  if(bigHash[n] == undefined) bigHash[n] = {}
  if(n == 1) return currentNum;
  if(bigHash[n][currentNum]) return bigHash[n][currentNum]
  count = 0
  for(let i = 5; i >= 1; i--) {
    if(currentNum >= i) {
      count += countVowelStrings(n - 1, i)
    }
  }
  bigHash[n][currentNum] = count;
  return count
};

console.log(countVowelStrings(1));
console.log(countVowelStrings(2));
console.log(countVowelStrings(3));
console.log(countVowelStrings(4));
console.log(countVowelStrings(5));