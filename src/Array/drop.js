/**
 * 裁剪数组中的前 N 个数组，返回剩余的部分。
 * 
 * @param {array} array 需要处理的数组
 * @param {number} [n=1] 裁剪的个数
 * @returns {array} 返回数组的剩余的部分。
 */
function drop(array, n = 1) {
  let i = 0;
  while (i < n) {
    array.shift();
    i += 1;
  }
  return array;
}

module.exports = drop;
