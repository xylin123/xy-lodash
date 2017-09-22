const pullAll = require('./pullAll');

/**
 * 移除所有经过 SameValueZero 等值比较为 true 的元素
 * 
 * @param {array} array 需要调整的数组
 * @param {any} values 要移除的值
 * @returns 返回数组本身
 */
function pull(array, ...values) {
  return pullAll(array, values);
}

module.exports = pull;
