const isArray = require('../Lang/isArray');
/**
 * 创建一个新数组，将array与任何数组 或 值连接在一起。
 *
 * @param {array} array 待处理的数组
 * @returns 返回过滤掉假值的新数组。
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * => [1, 2, 3]
 */
function compact(array) {
  if (!isArray(array)) {
    return [];
  }
  return array.filter(v => v);
}

module.exports = compact;
