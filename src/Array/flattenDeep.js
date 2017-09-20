const isArray = require('../Lang/isArray');

/**
 * 递归展平 数组.
 * 
 * @param {array} array 需要展平的数组
 * @returns 返回展平后的新数组
 */
function flattenDeep(array) {
  const result = [];
  array.forEach((item) => {
    isArray(item) ? result.push(...flattenDeep(item)) : result.push(item);
  });
  return result;
}

module.exports = flattenDeep;
