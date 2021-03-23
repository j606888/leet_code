bigHash = {}
var countVowelStrings = function(n, currentNum=5) {
  if(n == 1) return currentNum;
  count = 0
  for(let i = 5; i >= 1; i--) {
    if(currentNum >= i) {
      count += countVowelStrings(n - 1, i)
    }
  }
  return count
};

console.log(countVowelStrings(3));