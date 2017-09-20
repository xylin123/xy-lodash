const isArray = require('../Lang/isArray');

/**
 * 向上一级展平数组嵌套
 * 
 * @param {array} array 需要展平的数组
 * @returns {array} 返回展平后的新数组
 */
function flatten(array) {
  const result = [];
  array.forEach((item) => {
    isArray(item) ? result.push(...item) : result.push(item);
  });
  return result;
}

module.exports = flatten;
