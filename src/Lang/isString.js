
const stringTag = '[object String]';

/**
 * 检查 value 是否是原始字符串String或者对象。
 *
 * @param {*} value 要检查的值。
 * @returns 如果 value 为一个字符串，那么返回 true，否则返回 false。
 * @example
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value === 'string' ||
    Object.prototype.toString.call(value) === stringTag;
}

module.exports = isString;
