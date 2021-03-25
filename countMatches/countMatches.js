/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  ruleMaps = {
    'type': 0,
    'color': 1,
    'name': 2
  }
  
  items.reduce((ans, item) => item[ruleMaps[ruleKey]] === ruleValue ? ans + 1 : ans, 0)

  return count
};

let items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]]
let ruleKey = "color"
let ruleValue = "silver"

console.log(countMatches(items, ruleKey, ruleValue))