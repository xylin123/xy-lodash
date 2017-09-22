/**
 * 将数组中的所有元素转换为由 separator 分隔的字符串。
 * 
 * @param {array} array 需要转换的数组
 * @param {string} [separator=','] 分隔符
 * @returns 返回连接好的字符串
 */
function join(array, separator = ',') {
  return array.join(separator);
}

module.exports = join;
