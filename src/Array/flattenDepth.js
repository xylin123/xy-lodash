const flatten = require('./flatten');

/**
 * 根据 depth 递归展平 数组 的层级
 * 
 * @param {array} array 需要展平的数组
 * @param {number} [depth=1] 展平的层级
 * @returns {array} 返回展平后的新数组
 */
function flattenDepth(array, depth = 1) {
  for (let i = 0; i < depth; i += 1) {
    array = flatten(array);
  }
  return array;
}

module.exports = flattenDepth;
