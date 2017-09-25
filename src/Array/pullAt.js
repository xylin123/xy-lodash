const flattenDeep = require('./flattenDeep');

/**
 * 根据给的 indexes 移除对应的数组元素并返回被移除的元素。
 * 
 * @param {array} array 需要调整的数组
 * @param {number[]} indexes indexes 可以是特殊的数组队列，或者个别的单个或多个参数
 * @returns 返回被移除的元素数组
 */
function pullAt(array, ...indexes) {
  const evens = [];
  flattenDeep(indexes).sort((a, b) => a - b).forEach((v, i) => {
    evens.push(...array.splice(v - i, 1));
  });
  return evens;
}

module.exports = pullAt;
