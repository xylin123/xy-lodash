const isArray = require('../Lang/isArray');

/**
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 *
 * @param {array} array 要检查的数组。
 * @param {...*} values 排除的值。
 * @returns 返回一个过滤值后的新数组。
 * @example
 *
 * _.difference([3, 2, 1], [4, 2]);
 * // => [3, 1]
 */
function difference(array, values) {
  if (!isArray(array)) {
    return [];
  }
  values = isArray(values) ? values : [values];
  return array.filter(v => values.indexOf(v) === -1);
}

module.exports = difference;
