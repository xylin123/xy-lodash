
/**
 * 获取数组中除了最后一个元素之外的所有元素
 * 
 * @param {array} array 需要检索的数组 (Array)
 * @returns {array} 返回没有最后一个元素的数组
 */
function initial(array) {
  return array.slice(0, array.length - 1);
}

module.exports = initial;
