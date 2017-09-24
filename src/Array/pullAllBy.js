const pullAll = require('./pullAll');
const property = require('../Util/property');
const isFunction = require('../Lang/isFunction');
const isString = require('../Lang/isString');

/**
 * 这个方法类似 _.pullAll，除了它接受一个 comparator 调用每一个数组元素的值。 comparator 会传入一个参数：(value)。
 * 
 * @param {array} array 需要调整的数组
 * @param {array} values 要移除的值
 * @param {function|string} iteratee 这个函数会处理每一个元素
 * @returns 返回数组本身
 */
function pullAllBy(array, values, iteratee) {
  if (iteratee === undefined) {
    return pullAll(array, values);
  }
  if (isString(iteratee)) {
    iteratee = property(iteratee);
  }
  if (isFunction(iteratee)) {
    const mid = array.map(iteratee);
    values.forEach((val) => {
      let index = -1;
      do {
        index = mid.indexOf(iteratee(val));
        if (index > -1) {
          array.splice(index, 1);
          mid.splice(index, 1);
        }
      } while (index > -1);
    });
    return array;
  }
  return undefined;
}

module.exports = pullAllBy;
