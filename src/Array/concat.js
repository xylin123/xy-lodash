const isArray = require('../Lang/isArray');

/**
 * 创建一个新数组，将array与任何数组 或 值连接在一起。
 *
 * @param {array} array 被连接的数组。
 * @param {...*} others 连接的值。
 * @returns 返回连接后的新数组。
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat(array, ...others) {
  return isArray(array) ?
    Array.prototype.concat.apply(array, others)
    :
    Array.prototype.concat.apply([array], others);
}

module.exports = concat;
