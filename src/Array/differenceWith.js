const isFunction = require('../Lang/isFunction');
const difference = require('./difference');

/**
 * 
 * 
 * @param {Array} array 
 * @param {...Array} values 
 * @param {function} comparator 比较器
 * @returns {Array} 返回一个差异化后的新数组
 */

function differenceWith(array, values, comparator) {
  if (comparator === undefined) {
    return difference(array, values);
  }
  if (isFunction(comparator)) {
    return array.filter((v) => {
      let isDiff = false;
      values.forEach((item) => {
        if (isDiff) { return; }
        isDiff = comparator(v, item);
      });
      return !isDiff;
    });
  }
  return undefined;
}

module.exports = differenceWith;
