/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  ruleMaps = ['type', 'color', 'name']
  ruleIndex = ruleMaps.indexOf(ruleKey)
  count = 0
  items.forEach(item => {
    console.log(item)
    if (item[ruleIndex] == ruleValue) count++
  })

  return count
};

let items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]]
let ruleKey = "color"
let ruleValue = "silver"

console.log(countMatches(items, ruleKey, ruleValue))