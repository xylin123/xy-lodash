/**
 * 根据 value 使用 SameValueZero 等值比较返回数组中首次匹配的 index， 
 * 如果 fromIndex 为负值，将从数组尾端索引进行匹配，
 * 如果将 fromIndex 设置为 true，将使用更快的二进制检索机制。
 * 
 * @param {array} array 要检索的数组
 * @param {any} value 要检索的值
 * @param {number} [fromIndex=0] 需要检索的起始位置
 * @returns 返回匹配值的index，否则返回 -1。
 */
function indexOf(array, value, fromIndex = 0) {
  return array.indexOf(value, fromIndex);
}

module.exports = indexOf;
